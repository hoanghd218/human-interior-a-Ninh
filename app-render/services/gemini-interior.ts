"use server";

import { GoogleGenAI } from "@google/genai";
import { DesignStyle, BudgetRange } from "@/data/interior-design";

const getClient = () => {
    let apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

    apiKey = "AIzaSyCIBQhBhHd5hRw_wrCLS9R2YNZ7K3aNmuI"


    if (!apiKey) {
        console.error("GEMINI_API_KEY is missing from environment variables");
    }
    return new GoogleGenAI({ apiKey: apiKey || '' });
};

// Helper to convert base64 to standard format
const cleanBase64 = (b64: string) => b64.replace(/^data:image\/\w+;base64,/, "");
const getMimeType = (b64: string) => {
    const match = b64.match(/^data:(image\/\w+);base64,/);
    return match ? match[1] : 'image/jpeg';
};

export const generateInteriorDesigns = async (
    base64Image: string,
    styles: DesignStyle[],
    budget: BudgetRange,
    referenceImage?: string
): Promise<string[]> => {
    const ai = getClient();
    const model = 'gemini-2.5-flash-image';

    const styleText = styles.join(', ');

    // Build reference image instruction if provided
    const referenceInstruction = referenceImage
        ? `
    QUAN TRỌNG - ẢNH THAM CHIẾU:
    Ảnh thứ 2 là ảnh tham chiếu phong cách. Hãy học hỏi và áp dụng:
    - Phong cách thiết kế, bố cục nội thất
    - Tông màu, palette màu sắc
    - Phong cách đồ nội thất, vật liệu
    - Ánh sáng, không khí của không gian
    Kết hợp phong cách từ ảnh tham chiếu với không gian từ ảnh gốc.`
        : '';

    const promptTemplate = `
    Bạn là một chuyên gia thiết kế nội thất kiến trúc. 
    Hãy thiết kế lại căn phòng trong bức ảnh này theo phong cách: ${styleText}.
    Ngân sách thi công: ${budget}.
    ${referenceInstruction}
    
    Yêu cầu quan trọng:
    1. Giữ nguyên cấu trúc phòng (tường, cửa sổ, sàn).
    2. Thay đổi nội thất, màu sắc, ánh sáng cho phù hợp phong cách đã chọn.
    3. Hình ảnh phải chân thực (photorealistic), chất lượng cao.
    4. Phù hợp với bối cảnh nhà ở Việt Nam.
    ${referenceImage ? '5. Đặc biệt chú ý học theo phong cách từ ảnh tham chiếu.' : ''}
    
    Hãy tạo ra một phương án thiết kế ấn tượng.
  `;

    // We need 3 variations. Make 3 parallel calls with slightly different prompts.
    const promises = [1, 2, 3].map(async (i) => {
        try {
            // Build content parts
            const parts: Array<{ inlineData?: { mimeType: string; data: string }; text?: string }> = [
                {
                    inlineData: {
                        mimeType: getMimeType(base64Image),
                        data: cleanBase64(base64Image),
                    },
                },
            ];

            // Add reference image if provided
            if (referenceImage) {
                parts.push({
                    inlineData: {
                        mimeType: getMimeType(referenceImage),
                        data: cleanBase64(referenceImage),
                    },
                });
            }

            // Add text prompt
            parts.push({
                text: `${promptTemplate} (Phương án số ${i}: Hãy sáng tạo khác biệt một chút về cách bố trí hoặc tông màu)`,
            });

            const response = await ai.models.generateContent({
                model: model,
                contents: {
                    parts,
                },
                config: {
                    // High creativity
                    temperature: 0.8 + (i * 0.1),
                }
            });

            // Extract image from response
            if (response.candidates && response.candidates[0]?.content?.parts) {
                for (const part of response.candidates[0].content.parts) {
                    if (part.inlineData && part.inlineData.data) {
                        return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
                    }
                }
            }
            return null;
        } catch (error) {
            console.error(`Error generating design ${i}:`, error);
            return null;
        }
    });

    const results = await Promise.all(promises);
    return results.filter((res): res is string => res !== null);
};

export const editInteriorDesign = async (
    base64Image: string,
    instruction: string
): Promise<string | null> => {
    const ai = getClient();
    const model = 'gemini-2.0-flash-exp';

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: getMimeType(base64Image),
                            data: cleanBase64(base64Image),
                        },
                    },
                    {
                        text: `Chỉnh sửa hình ảnh nội thất này theo yêu cầu: "${instruction}". Giữ nguyên góc chụp và bố cục chính, chỉ thay đổi các chi tiết được yêu cầu. Hình ảnh kết quả phải chân thực.`,
                    },
                ],
            },
        });

        if (response.candidates && response.candidates[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData && part.inlineData.data) {
                    return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
                }
            }
        }
        return null;

    } catch (error) {
        console.error("Error editing design:", error);
        throw error;
    }
};
