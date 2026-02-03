"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

const Counter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById(`counter-${end}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);

      // EaseOutQuart function
      const ease = 1 - Math.pow(1 - percentage, 4);

      setCount(Math.floor(ease * end));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span id={`counter-${end}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};



export default function LandingPage() {
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const consultantSection = document.getElementById('consultant-section');

      let shouldHide = false;
      if (consultantSection) {
        const rect = consultantSection.getBoundingClientRect();
        // Hide if the section has entered the viewport (or we've scrolled past it)
        // rect.top < window.innerHeight means the top of the section is visible or above the viewport
        shouldHide = rect.top < window.innerHeight;
      }

      // Show if scrolled past 300px AND we haven't reached the consultant section yet
      if (scrollY > 300 && !shouldHide) {
        setShowFloatingBar(true);
      } else {
        setShowFloatingBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 48,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 5 days, 12 hours, 48 minutes from now (for demo purposes)
    // In production, replace this with your actual Event Date, e.g., new Date("2026-12-31T00:00:00")
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(targetDate.getHours() + 12);
    targetDate.setMinutes(targetDate.getMinutes() + 48);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#F9F9F9] font-sans antialiased">
      {/* ========== HEADER / NAVBAR ========== */}
      <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 max-w-7xl mx-auto rounded-3xl overflow-hidden ${showFloatingBar ? 'glass-effect shadow-golden py-2 border border-white/40' : 'bg-white/20 backdrop-blur-md border border-white/30 py-4'}`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-11 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M7 2H9.53659V38H7V2Z" fill="#D4AF37" />
                  <path d="M30.4634 2H33V38H30.4634V2Z" fill="#D4AF37" />
                  <path d="M13.6585 2H9.53659V4.23009H12.5488C14.578 4.23009 15.1911 6.67257 15.2439 7.89381V13.469H20.1585V11.5575H17.4634V7.89381C17.4634 3.43363 14.9268 2.10619 13.6585 2Z" fill="#D4AF37" />
                  <path d="M26.5 2H30.622V4.23009H27.6098C25.5805 4.23009 24.9675 6.67257 24.9146 7.89381V13.469H20V11.5575H22.6951V7.89381C22.6951 3.43363 25.2317 2.10619 26.5 2Z" fill="#D4AF37" />
                  <path d="M13.6585 38H9.53659V35.7699H12.5488C14.578 35.7699 15.1911 33.3274 15.2439 32.1062V26.531H20.1585V28.4425H17.4634V32.1062C17.4634 36.5664 14.9268 37.8938 13.6585 38Z" fill="#D4AF37" />
                  <path d="M26.5 38H30.622V35.7699H27.6098C25.5805 35.7699 24.9675 33.3274 24.9146 32.1062V26.531H20V28.4425H22.6951V32.1062C22.6951 36.5664 25.2317 37.8938 26.5 38Z" fill="#D4AF37" />
                  <path d="M15.8204 15.9308C16.3392 15.9308 16.8149 16.008 17.2472 16.1625C17.6844 16.3121 18.0783 16.5101 18.429 16.7562C18.7846 16.9976 19.0968 17.2534 19.3659 17.5237C19.5388 17.683 19.6973 17.8471 19.8415 18.0161C19.9904 18.185 20.1297 18.3492 20.2594 18.5084C20.3747 18.3492 20.4972 18.1923 20.6269 18.0378C20.7567 17.8833 20.9224 17.712 21.1242 17.5237C21.5277 17.1183 22.0249 16.7514 22.6159 16.4232C23.2116 16.0949 23.9058 15.9308 24.6984 15.9308C25.4287 15.9308 26.0916 16.1094 26.6874 16.4666C27.2879 16.819 27.7635 17.2969 28.1142 17.9002C28.4697 18.4988 28.6475 19.1649 28.6475 19.8986C28.6475 20.4537 28.5442 20.9751 28.3376 21.4626C28.1358 21.9453 27.8548 22.3701 27.4945 22.7369C27.1341 23.099 26.7138 23.3838 26.2334 23.5913C25.7578 23.794 25.2461 23.8954 24.6984 23.8954C24.17 23.8954 23.6848 23.8206 23.2428 23.671C22.8056 23.5165 22.4093 23.321 22.0538 23.0845C21.7031 22.8431 21.3932 22.5921 21.1242 22.3315C20.9512 22.1577 20.7927 21.9863 20.6486 21.8174C20.5044 21.6436 20.3747 21.4771 20.2594 21.3178C20.1297 21.4771 19.9904 21.6436 19.8415 21.8174C19.6973 21.9863 19.5388 22.1577 19.3659 22.3315C19.0968 22.5921 18.7846 22.8431 18.429 23.0845C18.0783 23.321 17.6844 23.5165 17.2472 23.671C16.8149 23.8206 16.3392 23.8954 15.8204 23.8954C15.0806 23.8954 14.4104 23.7168 13.8099 23.3596C13.2093 23.0024 12.7313 22.5221 12.3758 21.9187C12.0203 21.3154 11.8426 20.642 11.8426 19.8986C11.8426 19.3484 11.9435 18.8343 12.1452 18.3564C12.3518 17.8737 12.6353 17.4513 12.9956 17.0893C13.3607 16.7273 13.7834 16.4449 14.2639 16.2422C14.7491 16.0346 15.2679 15.9308 15.8204 15.9308ZM13.4856 19.8986C13.4856 20.3331 13.5889 20.7289 13.7955 21.0861C14.0068 21.4385 14.2879 21.7208 14.6386 21.9332C14.9941 22.1408 15.388 22.2446 15.8204 22.2446C16.296 22.2446 16.7308 22.136 17.1247 21.9187C17.5187 21.7015 17.8814 21.4336 18.2129 21.115C18.429 20.8978 18.6188 20.6879 18.7822 20.4851C18.9455 20.2824 19.092 20.0869 19.2217 19.8986C19.092 19.7249 18.9479 19.539 18.7894 19.3411C18.6356 19.1384 18.4435 18.9284 18.2129 18.7112C17.8958 18.3926 17.5355 18.1247 17.1319 17.9075C16.7332 17.6903 16.296 17.5817 15.8204 17.5817C15.388 17.5817 14.9941 17.6879 14.6386 17.9002C14.2879 18.1078 14.0068 18.3878 13.7955 18.7401C13.5889 19.0877 13.4856 19.4739 13.4856 19.8986ZM27.0044 19.8986C27.0044 19.4739 26.8987 19.0877 26.6874 18.7401C26.4808 18.3878 26.2021 18.1078 25.8514 17.9002C25.5055 17.6879 25.1212 17.5817 24.6984 17.5817C24.3718 17.5817 24.0643 17.6323 23.7761 17.7337C23.4878 17.8302 23.2188 17.9654 22.969 18.1392C22.7191 18.3081 22.4885 18.4988 22.2772 18.7112C22.0177 18.9574 21.8016 19.1963 21.6286 19.428C21.4605 19.6549 21.3404 19.8117 21.2683 19.8986C21.398 20.0869 21.5445 20.2824 21.7079 20.4851C21.8712 20.6879 22.061 20.8978 22.2772 21.115C22.6086 21.4336 22.9714 21.7015 23.3653 21.9187C23.764 22.136 24.2084 22.2446 24.6984 22.2446C25.1212 22.2446 25.5055 22.1408 25.8514 21.9332C26.2021 21.7208 26.4808 21.4385 26.6874 21.0861C26.8987 20.7289 27.0044 20.3331 27.0044 19.8986Z" fill="#D4AF37" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-display tracking-tight text-[#171717]">
                  Human Interior
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-x-4 lg:gap-x-8 shrink-0">
              <Link href="#event-details" className="flex group scroll-smooth whitespace-nowrap min-w-max focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E05C3E] focus-visible:ring-offset-4 rounded-sm transition-all cursor-pointer font-bold text-sm tracking-wide text-[#171717]/80 hover:text-[#E05C3E]">
                Sự kiện
              </Link>

              <Link href="#why-attend" className="flex group scroll-smooth whitespace-nowrap min-w-max focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E05C3E] focus-visible:ring-offset-4 rounded-sm transition-all cursor-pointer font-bold text-sm tracking-wide text-[#171717]/80 hover:text-[#E05C3E]">
                Vì sao nên tham gia?
              </Link>

              <Link href="#solution" className="flex group scroll-smooth whitespace-nowrap min-w-max focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E05C3E] focus-visible:ring-offset-4 rounded-sm transition-all cursor-pointer font-bold text-sm tracking-wide text-[#171717]/80 hover:text-[#E05C3E]">
                Giải pháp
              </Link>

              <Link href="#proof" className="flex group scroll-smooth whitespace-nowrap min-w-max focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E05C3E] focus-visible:ring-offset-4 rounded-sm transition-all cursor-pointer font-bold text-sm tracking-wide text-[#171717]/80 hover:text-[#E05C3E]">
                Công trình thực tế
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">

              <Link
                href="https://human-interior-a-ninh-app-render.vercel.app/"
                target="_blank"
                className="bg-[#E05C3E] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-2xl font-black text-[10px] lg:text-[11px] tracking-wide transition-all duration-300 uppercase flex items-center gap-2 lg:gap-3 shadow-golden hover:translate-y-[-2px] hover:shadow-golden cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E05C3E]"
              >
                <div className="flex flex-col items-start leading-none pointer-events-none">
                  <span className="text-[7px] lg:text-[8px] opacity-80 mb-0.5 uppercase tracking-wider">Tự tay thiết kế</span>
                  <span>NHẬN BÁO GIÁ NGAY</span>
                </div>
                <span className="material-symbols-outlined text-[16px] lg:text-[18px] pointer-events-none">open_in_new</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="text-[#333] hover:text-[#E05C3E] cursor-pointer focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
              >
                <span className="material-symbols-outlined text-3xl">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ top: '80px' }} // Start below the header
        >
          <div className="flex flex-col p-8 space-y-6 text-center">
            <Link
              href="#event-details"
              className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SỰ KIỆN
            </Link>
            <Link
              href="#why-attend"
              className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VÌ SAO NÊN THAM GIA?
            </Link>
            <Link
              href="#solution"
              className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GIẢI PHÁP
            </Link>
            <Link
              href="#proof"
              className="text-lg font-bold text-[#333] hover:text-[#E05C3E]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CÔNG TRÌNH THỰC TẾ
            </Link>
            <Link
              href="#register"
              className="mt-4 bg-[#E05C3E] text-white px-8 py-4 rounded-xl font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NHẬN VÉ MỜI VIP
            </Link>
            <div className="pt-8 border-t border-gray-100">
              <Link
                href="https://human-interior-a-ninh-app-render.vercel.app/"
                target="_blank"
                className="bg-[#E05C3E] text-white hover:bg-[#C8482D] w-full py-3 rounded-lg font-bold transition-all duration-300 uppercase text-xs tracking-wide flex items-center justify-center gap-2 shadow-lg animate-ripple"
              >
                TỰ TAY THIẾT KẾ
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION (OUTCOME FOCUS) ========== */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Human Interior AI Master Hero"
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
            <span className="text-white text-xs uppercase tracking-[0.2em] font-medium">Sự Kiện Khai Trương Showroom Flagship & Ra Mắt Công Nghệ Thiết Kế AI 2026</span>
          </div>

          <h1 className="font-display flex flex-col items-center mb-6 text-center">
            <span className="text-[12px] md:text-[14px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4">
              Dễ dàng - Tức thì - Minh bạch
            </span>
            <span className="text-[24px] md:text-[40px] lg:text-[52px] font-bold leading-tight text-white uppercase tracking-tight font-display max-w-4xl px-4">
              KHÔNG CẦN BIẾT VẼ, VẪN <br />
              <span className="text-gradient-gold">TỰ THIẾT KẾ ĐƯỢC NHÀ ĐẸP</span> <br />
              CHỈ TRONG 30 PHÚT
            </span>
          </h1>

          <p className="text-gray-300 max-w-4xl mx-auto text-base md:text-xl leading-relaxed mb-10 font-sans">
            Bạn có ý tưởng nhưng không biết diễn đạt sao cho KTS hiểu? Bạn chán cảnh phải chờ đợi cả tuần chỉ để đổi một màu sơn? Với công nghệ AI mới nhất từ Human Interior, chỉ cần <span className="text-white font-semibold">30 phút</span> ngồi cùng chúng tôi, tổ ấm trong mơ của bạn sẽ hiện ra <span className="text-white font-semibold">sắc nét, chân thực 100%</span>.
          </p>

          {/* Special Countdown for Hero */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 border border-white/20 px-6 py-3 rounded-xl backdrop-blur-md">
              <div className="text-white text-sm font-bold tracking-widest uppercase mb-1">SỰ KIỆN BẮT ĐẦU SAU</div>
              <div className="text-[#D4AF37] text-2xl font-black font-display flex gap-4">
                <div className="flex flex-col items-center"><span>{timeLeft.days}</span><span className="text-[8px] opacity-70">NGÀY</span></div>
                <span>:</span>
                <div className="flex flex-col items-center"><span>{timeLeft.hours}</span><span className="text-[8px] opacity-70">GIỜ</span></div>
                <span>:</span>
                <div className="flex flex-col items-center"><span>{timeLeft.minutes}</span><span className="text-[8px] opacity-70">PHÚT</span></div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-[#D4AF37] text-black font-bold py-5 px-10 rounded-xl shadow-glow hover:bg-white transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-3 group cursor-pointer"
            >
              NHẬN VÉ MỜI VIP – THỬ LÀM KIẾN TRÚC SƯ NGAY
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">confirmation_number</span>
            </button>
            <button
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold py-5 px-10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 uppercase tracking-widest text-sm cursor-pointer"
            >
              XEM CÔNG NGHỆ THIẾT KẾ TRONG 30 GIÂY
            </button>
          </div>
        </div>
      </section>



      {/* ========== PAIN POINTS (THE FEAR) ========== */}
      {/* ========== PAIN POINTS (THE FEAR) ========== */}
      <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Thực Trạng Xây Nhà</span>
            <h2 className="text-4xl md:text-5xl font-display text-[#171717] mb-6">
              Làm Nhà Là Để Hưởng Thụ, <br />Tại Sao Bạn Lại <span className="text-[#E05C3E]">Mệt Mỏi?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Đừng để quy trình cũ kỹ làm bay mất cảm hứng về tổ ấm của bạn. Hãy nhìn xem những nỗi khổ mà ai làm nhà cũng từng gặp:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Nói Một Đường, Vẽ Một Nẻo",
                desc: "Bạn giải thích mãi mà KTS vẫn vẽ ra bản vẽ 'lệch' tông. Sửa đi sửa lại vẫn không đúng ý đồ.",
                icon: "psychology"
              },
              {
                title: "Chờ Đợi Mòn Mỏi",
                desc: "Muốn đổi mẫu gỗ, màu sơn là phải đợi 3-4 ngày mới thấy ảnh. Mất cả tuần chỉ để chỉnh sửa một góc nhỏ.",
                icon: "schedule"
              },
              {
                title: "Ảnh 3D Thì Đẹp, Làm Thật Thì Xấu",
                desc: "Sợ nhất là lúc giao nhà không giống như hình quảng cáo. Nỗi lo đồ thật không sắc nét như 3D.",
                icon: "visibility_off"
              },
              {
                title: "Tiền Mất Tật Mang",
                desc: "Chi phí phát sinh mập mờ, lúc báo giá một kiểu, lúc làm lại đội lên một kiểu khác không rõ lý do.",
                icon: "money_off"
              },
              {
                title: "Nhà Như Khách Sạn",
                desc: "Bản vẽ trông khô cứng, thiếu đi cái hồn và sự ấm cúng của một gia đình thực sự.",
                icon: "sentiment_dissatisfied"
              },
              {
                title: "Cảm Giác Bị 'Lèo Lái'",
                desc: "Bỏ tiền tỷ làm nhà nhưng toàn phải nghe theo ý KTS, không được thực sự làm chủ không gian của mình.",
                icon: "person_off"
              }
            ].map((pain, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-golden hover:border-[#D4AF37]/30 transition-all duration-500 group border border-gray-100 flex flex-col items-center text-center cursor-default">
                <div className="w-16 h-16 bg-[#E05C3E]/10 rounded-2xl flex items-center justify-center text-[#E05C3E] mb-6 group-hover:bg-[#E05C3E] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{pain.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#171717] font-display uppercase tracking-tight">{pain.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========== SOLUTION: THE NEW OPPORTUNITY (AI & PROCESS) ========== */}
      {/* ========== SOLUTION: THE NEW OPPORTUNITY (AI & PROCESS) ========== */}
      <section id="solution" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Giải Pháp "Mắt Thấy - Tay Chạm"</span>
            <h2 className="text-4xl md:text-5xl font-display text-[#171717] mb-6">
              Bạn Cứ Đưa Ý Tưởng <br /><span className="text-[#D4AF37]">AI Sẽ "Hiện Hình" Ngôi Nhà Cho Bạn</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Chúng tôi đưa cho bạn một "cây bút thần" AI. Bạn chỉ cần nói yêu cầu, AI sẽ vẽ ngay ra căn nhà thực tế để bạn xem có ưng không.
            </p>
          </div>

          {/* Part A: 4 Core AI Abilities (Based on content.md) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              {
                title: "Vẽ Sơ Sơ - Ra Ảnh Thật",
                desc: "Bạn chỉ cần vẽ vài đường cơ bản hoặc mô tả bằng lời, AI sẽ tự hiểu và dựng thành phối cảnh 3D sắc nét sau 30 giây.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                icon: "draw"
              },
              {
                title: "Đổi Vật Liệu Trong 1 Nốt Nhạc",
                desc: "Thích gỗ sồi hay đá Marble? Bấm nút một cái là hiện lên ngay trên bản vẽ để bạn xem có hợp gu không, thích thì chọn luôn.",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop",
                icon: "texture"
              },
              {
                title: "Thấy Trước Nắng Gió Trong Nhà",
                desc: "AI tính toán chính xác hướng nắng lúc 8h sáng hay 4h chiều để bạn chọn vị trí đặt ban công cho thoáng mát, an yên nhất.",
                image: "https://images.unsplash.com/photo-1507652313519-d4c9174996dd?q=80&w=2070&auto=format&fit=crop",
                icon: "light_mode"
              },
              {
                title: "Quản Lý Thi Công Qua App",
                desc: "Không cần ra công trình, vẫn biết thợ đang làm gì, dùng gỗ gì qua App My Team trên điện thoại. Minh bạch 100%.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
                icon: "smartphone"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F9F9F9] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D4AF37]/30 hover-golden transition-all duration-500 group cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#171717] mb-2 uppercase text-[10px] tracking-widest">{item.title}</h4>
                  <p className="text-gray-600 text-[11px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>


          {/* Part B: Deep Dive Process */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-display text-[#171717]">Quản Trị Số Hóa 5 Sao</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sự an lạc thực sự đến từ sự minh bạch. Chúng tôi kiểm soát từng millimet và từng đồng ngân sách qua hệ thống phần mềm độc quyền.
                  </p>
                </div>

                <ul className="space-y-8">
                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-2xl">smartphone</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#171717] block uppercase text-sm tracking-wide mb-1">App My Team - Kiểm soát 24/7</span>
                      <p className="text-sm text-gray-500 leading-relaxed">Khách hàng theo dõi tiến độ thi công, nhật ký vật tư và báo cáo hình ảnh hiện trường hàng ngày ngay trên Smartphone.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-2xl">speed</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#171717] block uppercase text-sm tracking-wide mb-1">Fit-Out Fast Track (Tiết kiệm 25%)</span>
                      <p className="text-sm text-gray-500 leading-relaxed">Quy trình tiền chế (Off-site fabrication) giúp rút ngắn thời gian lắp đặt tại công trình, đưa bạn vào ở sớm hơn.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl aspect-square shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop"
                    alt="Digital Control Center"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="px-3 py-1 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded">LIVE REPORT</div>
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full border border-white overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="team" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold font-display uppercase italic">Minh bạch đến từng millimet</h4>
                  </div>
                </div>
                {/* Floating stat card */}
                <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 animate-float hidden lg:block">
                  <div className="text-[#D4AF37] font-bold text-3xl font-display mb-1">98.5%</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Độ chính xác so với 3D</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROOF: TESTIMONIALS & RESULTS ========== */}
      <section id="proof" className="py-24 bg-[#171717] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Niềm Tin Từ Khách Hàng</span>
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Hơn <span className="text-[#D4AF37] font-bold"><Counter end={100} /></span> Gia Chủ <br />
                Đã Thực Sự Hài Lòng
              </h2>
              <p className="text-gray-400 text-lg">
                Sự hài lòng của bạn là thước đo thành công lớn nhất của Human Interior. Hãy cùng khám phá những tổ ấm mà chúng tôi đã tận tâm kiến tạo.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm text-center min-w-[200px]">
              <div className="text-5xl font-bold text-[#D4AF37] font-display"><Counter end={98} suffix="%" /></div>
              <div className="text-xs uppercase text-gray-500 tracking-[0.2em] mt-2">Khách hàng hài lòng</div>
            </div>
          </div>

          {/* Results Showcase (Visual) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" alt="Căn hộ Vinhomes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs uppercase text-[#D4AF37] mb-1">Căn hộ cao cấp</span>
                <span className="text-white font-bold">Vinhomes Central Park</span>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl md:mt-12">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" alt="Biệt thự phố Thảo Điền" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs uppercase text-[#D4AF37] mb-1">Biệt thự phố</span>
                <span className="text-white font-bold">Thảo Điền, Quận 2</span>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" alt="Penthouse Thủ Thiêm" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs uppercase text-[#D4AF37] mb-1">Penthouse</span>
                <span className="text-white font-bold">The Metropole Thủ Thiêm</span>
              </div>
            </div>
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl md:mt-12">
              <img src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop" alt="Townhouse Lakeview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs uppercase text-[#D4AF37] mb-1">Townhouse</span>
                <span className="text-white font-bold">Lakeview City</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VIP OFFER: THE IRRESISTIBLE OFFER ========== */}
      <section id="vip-benefits" className="py-24 bg-[#F9F9F9] relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E05C3E]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Đặc Quyền Duy Nhất</span>
            <h2 className="text-4xl md:text-5xl font-display text-[#171717] mb-6">
              Gói Ưu Đãi <span className="text-[#D4AF37]">Kiến Tạo Tổ Ấm</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto italic">
              "Giá trị quà tặng lên đến 100 Triệu Đồng dành cho khách hàng đăng ký sớm nhất trong tháng này"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                <span className="material-symbols-outlined text-[#D4AF37] group-hover:text-white">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Gói Trải Nghiệm AI</h3>
              <p className="text-gray-600 mb-6 flex-grow">Buổi thiết kế 1-1 cùng KTS trưởng, biến ý tưởng không gian quan trọng nhất thành 3D trong 30 phút.</p>
              <div className="text-[#D4AF37] font-bold text-lg mb-4">Trị giá: 20.000.000đ</div>
              <div className="h-1 w-12 bg-gray-100 group-hover:w-full transition-all duration-500"></div>
            </div>

            {/* Offer 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#D4AF37] hover:shadow-glow transition-all duration-300 relative group overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">Quà tặng đặc biệt</div>
              <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white">inventory_2</span>
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Sales Kit Vật Liệu Số</h3>
              <p className="text-gray-600 mb-6 flex-grow">Tặng trọn bộ mẫu vật liệu thực tế đã được chuẩn hóa để bạn mang về trải nghiệm và so sánh tại nhà.</p>
              <div className="text-[#D4AF37] font-bold text-lg mb-4">Đặc quyền VIP</div>
              <div className="h-1 w-full bg-[#D4AF37]"></div>
            </div>

            {/* Offer 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="w-14 h-14 bg-[#E05C3E]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E05C3E] transition-colors">
                <span className="material-symbols-outlined text-[#E05C3E] group-hover:text-white">celebration</span>
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Ưu Đãi Khai Trương</h3>
              <p className="text-gray-600 mb-6 flex-grow">Giảm ngay 100 Triệu Đồng khi ký hợp đồng thi công trọn gói trực tiếp tại sự kiện khai trương showroom.</p>
              <div className="text-[#E05C3E] font-bold text-lg mb-4">Tiết kiệm: 100.000.000đ</div>
              <div className="h-1 w-12 bg-gray-100 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient-gold text-white font-bold py-5 px-12 rounded-xl shadow-glow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3 uppercase tracking-wider animate-ripple-gold"
            >
              <span>Nhận Ưu Đãi Ngay</span>
              <span className="material-symbols-outlined">card_giftcard</span>
            </button>
            <p className="mt-4 text-gray-500 text-sm italic">
              * Ưu đãi áp dụng có điều kiện cho các hợp đồng ký mới trong tháng này.
            </p>
          </div>
        </div>
      </section>




      {/* ========== AUTHORITY: THE TEAM ========== */}
      <section id="authority" className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-left">
              <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm mb-4 block font-display">Đội Ngũ Tận Tâm</span>
              <h2 className="text-4xl md:text-5xl font-display text-[#171717] mb-8 leading-[1.2] tracking-tight">
                Làm Việc Bằng <br />
                <span className="text-[#D4AF37]">Cái Tâm & Công Nghệ</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-sans">
                Tại Human Interior, chúng tôi không chỉ vẽ nhà cho bạn. Chúng tôi thấu hiểu thói quen, sở thích của từng thành viên để tạo nên không gian sống thoải mái nhất. Sự hỗ trợ của AI giúp mọi thứ nhanh hơn, nhưng chính con người mới là yếu tố tạo nên sự ấm cúng.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                <div>
                  <div className="text-4xl font-bold font-display text-[#D4AF37] mb-1"><Counter end={10} suffix="+" /></div>
                  <div className="text-[10px] uppercase text-gray-500 tracking-[0.2em] font-bold leading-relaxed">Năm kinh nghiệm trong ngành</div>
                </div>
                <div>
                  <div className="text-4xl font-bold font-display text-[#D4AF37] mb-1"><Counter end={50} suffix="+" /></div>
                  <div className="text-[10px] uppercase text-gray-500 tracking-[0.2em] font-bold leading-relaxed">Chuyên gia hàng đầu từ các trường danh tiếng</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-video md:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
              </div>
              {/* Decorative floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-gray-50 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="material-symbols-outlined font-bold">stars</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#171717] text-lg leading-none">Top 100</div>
                  <div className="text-[10px] uppercase text-gray-400 tracking-widest font-bold mt-1">Đơn vị uy tín 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS (VIDEO FEEDBACK) ========== */}
      <section id="testimonials" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Cảm Xúc Thật</span>
            <h2 className="text-4xl md:text-5xl font-display text-[#171717] mb-6">
              Khách Hàng Nói Về <span className="text-[#D4AF37]">Chúng Tôi</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sự hài lòng của khách hàng là minh chứng rõ nét nhất cho chất lượng và cái tâm trong từng công trình.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Review 1: Mrs. Lan Anh */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer aspect-[3/4]">
              <img
                alt="Review Mrs. Lan Anh"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsbWw4_B4KZYNgbRTuTy38OVdNehPIJYi3jEsXREKQ-qZh88lYiNffMDs5CDoskr86EbpJWp1VgtzrDPRrKaCkrlDoISuGt68rjz8abbbbcRwSIE5Mg6rcDUUOMnVhWDxmizuX8QyF53hxPY23BWhxoUhm3bE7FriyJD3aG5-ejjhQeyU3bbPcZLyLY7v4-dk9xLMzCl3If8FP7ZdTn3IjsaxKiB2PE0TPSI8hXEIDA4luDU3b0muvZE_F8lwqw37PdmdXxr90g648"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-black font-bold">play_arrow</span>
                  </div>
                  <p className="text-white text-lg font-display italic mb-4">
                    "Tôi không biết về kiến trúc, nhưng ngồi với AI 30 phút là tự tay 'mix' được màu sơn, chọn được mẫu sofa ưng ý. Thấy kết quả ngay nên chốt luôn, không cần suy nghĩ nhiều!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37] overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=32" alt="Mrs. Lan Anh" />
                    </div>
                    <div>
                      <div className="font-bold text-white uppercase tracking-widest text-xs">Chị Lan Anh</div>
                      <div className="text-[10px] text-gray-400">Gia chủ Vinhomes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Review 2: Mr. Minh */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer aspect-[3/4] md:mt-12">
              <img
                alt="Review Mr. Minh"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-black font-bold">play_arrow</span>
                  </div>
                  <p className="text-white text-lg font-display italic mb-4">
                    "Sợ nhất là mua gỗ giả, đá rởm. Nhưng ở đây tôi được sờ tận tay mẫu vật liệu thật rồi đối chiếu ngay trên máy. Làm xong cái nhà y hệt như bản vẽ, rất hài lòng."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37] overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=12" alt="Mr. Minh" />
                    </div>
                    <div>
                      <div className="font-bold text-white uppercase tracking-widest text-xs">Anh Minh</div>
                      <div className="text-[10px] text-gray-400">Gia chủ Biệt thự phố</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Review 3: Expert Talk */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer aspect-[3/4]">
              <img
                alt="Expert Talk"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#E05C3E] rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-white font-bold">mic</span>
                  </div>
                  <p className="text-white text-lg font-display italic mb-4">
                    "Tôi không muốn khách hàng phải 'tưởng tượng' ngôi nhà của mình. Với AI, tôi cho họ thấy trọn vẹn từng ngóc ngách trước khi đặt viên gạch đầu tiên."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-[#E05C3E] overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=68" alt="Expert" />
                    </div>
                    <div>
                      <div className="font-bold text-white uppercase tracking-widest text-xs">KTS Tony Hoang</div>
                      <div className="text-[10px] text-gray-400">Master AI Architect</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Featured Visual */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-[2.5rem] blur-2xl"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop"
                    alt="Human Interior Philosophy"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                    <div>
                      <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Triết Lý Human Interior</span>
                      <h3 className="text-3xl font-display text-white italic">"Nơi công nghệ AI kết tinh cùng tâm huyết trong từng chi tiết"</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="w-full lg:w-1/2">
              <div className="mb-10">
                <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Điều Chúng Tôi Cam Kết</span>
                <h2 className="text-4xl md:text-5xl font-display text-[#171717] mb-6">
                  Nhanh - Đúng - <span className="text-[#D4AF37]">Sạch</span>
                </h2>
                <p className="text-gray-600">Mọi thứ đều phải minh bạch từ bản vẽ AI cho đến khi thợ đóng cái đinh cuối cùng vào tường.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { t: "Tốc Độ Thật", d: "30 phút ra phương án, không phải chờ cả tuần.", icon: "speed" },
                  { t: "Giá Trị Thật", d: "Vật liệu thật, giá thật, không kê giá.", icon: "paid" },
                  { t: "Cam Kết Thật", d: "Sai thiết kế hoàn tiền 100%. Đơn giản vậy thôi.", icon: "verified" },
                  { t: "An Lạc Thật", d: "Làm nhà là niềm vui, không phải gánh nặng.", icon: "favorite", highlight: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-default ${item.highlight
                      ? "bg-[#D4AF37]/5 border-[#D4AF37]/30 shadow-golden"
                      : "bg-white border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-golden"
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.highlight ? "bg-[#D4AF37] text-white" : "bg-[#D4AF37]/10 text-[#D4AF37]"
                      }`}>
                      <span className="material-symbols-rounded icon-filled text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#171717] mb-1">{item.t}</h4>
                      <p className="text-xs text-gray-500 leading-snug font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== RISK REVERSAL: GUARANTEE ========== */}
      <section id="guarantee" className="py-24 bg-[#171717] relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full -mr-64 -mt-64 blur-[120px]"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-12 inline-flex items-center justify-center w-24 h-24 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
            <span className="material-symbols-outlined text-[#D4AF37] text-5xl font-bold">verified_user</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display text-white mb-8 uppercase tracking-tight leading-tight">
            NÓI ĐƯỢC <span className="text-gradient-gold">LÀM ĐƯỢC</span>
          </h2>

          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative shadow-2xl">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black font-bold px-8 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] shadow-lg">
              Uy Tín Là Vàng
            </div>

            <div className="text-3xl md:text-4xl text-[#D4AF37] mb-6 opacity-50 font-display">"</div>
            <p className="text-xl md:text-2xl text-white font-display italic leading-relaxed mb-6 px-4">
              Nếu thi công không đẹp như bản vẽ AI, chúng tôi hoàn lại 100% tiền. Không lý do, không đổ thừa.
            </p>
            <div className="text-3xl md:text-4xl text-[#D4AF37] mb-8 opacity-50 font-display text-right -mt-4">"</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-t border-white/10 pt-10">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green-500 text-sm font-bold">check_circle</span>
                </div>
                <span className="text-xs uppercase font-bold text-white/70 tracking-wide">Không 'Vẽ' Thêm Tiền</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green-500 text-sm font-bold">check_circle</span>
                </div>
                <span className="text-xs uppercase font-bold text-white/70 tracking-wide">Hư Là Sửa Ngay</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green-500 text-sm font-bold">check_circle</span>
                </div>
                <span className="text-xs uppercase font-bold text-white/70 tracking-wide">Đúng Hẹn Là Đúng Hẹn</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex -space-x-4 mb-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#171717] overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-[#171717] bg-[#D4AF37] flex items-center justify-center text-black font-bold text-xs">
                100+
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium">Đã có hơn 100 gia chủ đặt trọn niềm tin vào cam kết này</p>
          </div>
        </div>
      </section>

      {/* ========== WHY ATTEND: EVENT BENEFITS ========== */}
      <section id="why-attend" className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Đặc Quyền VIP</span>
            <h2 className="text-4xl md:text-5xl font-display text-[#171717] mb-6">
              5 Lý Do Không Thể Bỏ Lỡ <br />
              <span className="text-[#D4AF37]">Lễ Khai Trương Showroom</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Tự Vẽ Nhà Với AI 1-1",
                d: "Làm việc riêng với KTS Trưởng: Dùng AI hiện thực hóa ngay góc phòng bạn thích nhất trong 30 phút.",
                icon: "verified"
              },
              {
                t: "Sờ Tận Tay Vật Liệu Thật",
                d: "Được tặng bộ mẫu vật liệu cao cấp mang về nhà để tự tay kiểm chứng chất lượng và so sánh.",
                icon: "auto_awesome"
              },
              {
                t: "Quà Tặng 100 Triệu Đồng",
                d: "Ưu đãi cực khủng dành riêng cho khách tham dự sự kiện: Giảm ngay 100 triệu khi ký thi công trọn gói.",
                icon: "card_giftcard"
              },
              {
                t: "Tư Vấn Hướng Nắng, Gió",
                d: "KTS sẽ phân tích khoa học hành vi và hướng nắng cho căn nhà của bạn bằng công nghệ mô phỏng AI.",
                icon: "support_agent"
              },
              {
                t: "Hospitality Chuẩn 5 Sao",
                d: "Thưởng thức tiệc trà Teabreak cao cấp trong không gian 'An Lạc' và nhận những phần quà công nghệ độc đạo.",
                icon: "local_cafe"
              },
              {
                t: "Khái Toán Ngân Sách",
                d: "Nhận ngay bảng dự toán sơ bộ minh bạch cho dự án của bạn ngay tại sự kiện.",
                icon: "analytics"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-500">
                  <span className="material-symbols-outlined text-[#D4AF37] group-hover:text-white text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-[#171717] mb-4 font-display">{item.t}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RSVP: EVENT REGISTRATION ========== */}
      <section id="register" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:w-1/2 space-y-8">
              <span className="text-[#E05C3E] font-bold tracking-[0.3em] uppercase text-sm block">Đăng Ký Tham Dự</span>
              <h2 className="text-4xl md:text-5xl font-display text-[#171717] leading-tight">
                Mời Anh Chị Ghé Chơi <br />
                <span className="text-[#D4AF37]">Tự Tay Vẽ Nhà, Nhận Quà Khủng</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Showroom mỗi ngày chỉ đón 20 khách để đảm bảo KTS có thể ngồi riêng, hướng dẫn bạn dùng AI vẽ nhà một cách chu đáo nhất. Hãy đăng ký ngay để giữ chỗ và nhận gói quà tặng 100 triệu.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F9F9F9] rounded-full flex items-center justify-center border border-gray-100 shrink-0">
                    <span className="material-symbols-outlined text-[#D4AF37]">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717]">Địa điểm tổ chức</h4>
                    <p className="text-gray-500 text-sm">Số 27 (Trụ sở mới Human Interior) - Không gian mẫu chuẩn 5 sao.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F9F9F9] rounded-full flex items-center justify-center border border-gray-100 shrink-0">
                    <span className="material-symbols-outlined text-[#D4AF37]">confirmation_number</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#171717]">Hình thức vé</h4>
                    <p className="text-gray-500 text-sm">Vé mời điện tử xác nhận qua Zalo/Phone ngay sau khi đăng ký.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-bl-full -mr-20 -mt-20"></div>

                <form className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-display uppercase tracking-wider text-[10px]">Tên của anh/chị *</label>
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 font-display uppercase tracking-wider text-[10px]">Số điện thoại liên hệ *</label>
                      <input
                        type="tel"
                        placeholder="09xx xxx xxx"
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#D4AF37] outline-none transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-display uppercase tracking-wider text-[10px]">Anh/chị định làm không gian nào? *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Phòng khách', 'Phòng ngủ', 'Biệt thự', 'Penthouse'].map((opt) => (
                        <label key={opt} className="flex flex-col items-center gap-2 p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all">
                          <input type="radio" name="space" className="accent-[#D4AF37]" required />
                          <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#171717] text-white font-bold py-5 rounded-xl hover:bg-[#E05C3E] shadow-golden transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-sm cursor-pointer"
                  >
                    TÔI MUỐN THAM GIA TRẢI NGHIỆM AI
                    <span className="material-symbols-outlined pointer-events-none">auto_awesome</span>
                  </button>


                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    CHỈ CÒN 08 SUẤT ƯU ĐÃI THIẾT KẾ AI 100% – ĐĂNG KÝ NGAY ĐỂ GIỮ CHỖ
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t-[8px] border-[#E05C3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-12 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 40 40" className="w-full h-full fill-white">
                    <path d="M7 2H9.53659V38H7V2Z" fill="#A8893A" />
                    <path d="M30.4634 2H33V38H30.4634V2Z" fill="#A8893A" />
                    <path d="M13.6585 2H9.53659V4.23009H12.5488C14.578 4.23009 15.1911 6.67257 15.2439 7.89381V13.469H20.1585V11.5575H17.4634V7.89381C17.4634 3.43363 14.9268 2.10619 13.6585 2Z" fill="#A8893A" />
                    <path d="M26.5 2H30.622V4.23009H27.6098C25.5805 4.23009 24.9675 6.67257 24.9146 7.89381V13.469H20V11.5575H22.6951V7.89381C22.6951 3.43363 25.2317 2.10619 26.5 2Z" fill="#A8893A" />
                    <path d="M13.6585 38H9.53659V35.7699H12.5488C14.578 35.7699 15.1911 33.3274 15.2439 32.1062V26.531H20.1585V28.4425H17.4634V32.1062C17.4634 36.5664 14.9268 37.8938 13.6585 38Z" fill="#A8893A" />
                    <path d="M26.5 38H30.622V35.7699H27.6098C25.5805 35.7699 24.9675 33.3274 24.9146 32.1062V26.531H20V28.4425H22.6951V32.1062C22.6951 36.5664 25.2317 37.8938 26.5 38Z" fill="#A8893A" />
                    <path d="M15.8204 15.9308C16.3392 15.9308 16.8149 16.008 17.2472 16.1625C17.6844 16.3121 18.0783 16.5101 18.429 16.7562C18.7846 16.9976 19.0968 17.2534 19.3659 17.5237C19.5388 17.683 19.6973 17.8471 19.8415 18.0161C19.9904 18.185 20.1297 18.3492 20.2594 18.5084C20.3747 18.3492 20.4972 18.1923 20.6269 18.0378C20.7567 17.8833 20.9224 17.712 21.1242 17.5237C21.5277 17.1183 22.0249 16.7514 22.6159 16.4232C23.2116 16.0949 23.9058 15.9308 24.6984 15.9308C25.4287 15.9308 26.0916 16.1094 26.6874 16.4666C27.2879 16.819 27.7635 17.2969 28.1142 17.9002C28.4697 18.4988 28.6475 19.1649 28.6475 19.8986C28.6475 20.4537 28.5442 20.9751 28.3376 21.4626C28.1358 21.9453 27.8548 22.3701 27.4945 22.7369C27.1341 23.099 26.7138 23.3838 26.2334 23.5913C25.7578 23.794 25.2461 23.8954 24.6984 23.8954C24.17 23.8954 23.6848 23.8206 23.2428 23.671C22.8056 23.5165 22.4093 23.321 22.0538 23.0845C21.7031 22.8431 21.3932 22.5921 21.1242 22.3315C20.9512 22.1577 20.7927 21.9863 20.6486 21.8174C20.5044 21.6436 20.3747 21.4771 20.2594 21.3178C20.1297 21.4771 19.9904 21.6436 19.8415 21.8174C19.6973 21.9863 19.5388 22.1577 19.3659 22.3315C19.0968 22.5921 18.7846 22.8431 18.429 23.0845C18.0783 23.321 17.6844 23.5165 17.2472 23.671C16.8149 23.8206 16.3392 23.8954 15.8204 23.8954C15.0806 23.8954 14.4104 23.7168 13.8099 23.3596C13.2093 23.0024 12.7313 22.5221 12.3758 21.9187C12.0203 21.3154 11.8426 20.642 11.8426 19.8986C11.8426 19.3484 11.9435 18.8343 12.1452 18.3564C12.3518 17.8737 12.6353 17.4513 12.9956 17.0893C13.3607 16.7273 13.7834 16.4449 14.2639 16.2422C14.7491 16.0346 15.2679 15.9308 15.8204 15.9308ZM13.4856 19.8986C13.4856 20.3331 13.5889 20.7289 13.7955 21.0861C14.0068 21.4385 14.2879 21.7208 14.6386 21.9332C14.9941 22.1408 15.388 22.2446 15.8204 22.2446C16.296 22.2446 16.7308 22.136 17.1247 21.9187C17.5187 21.7015 17.8814 21.4336 18.2129 21.115C18.429 20.8978 18.6188 20.6879 18.7822 20.4851C18.9455 20.2824 19.092 20.0869 19.2217 19.8986C19.092 19.7249 18.9479 19.539 18.7894 19.3411C18.6356 19.1384 18.4435 18.9284 18.2129 18.7112C17.8958 18.3926 17.5355 18.1247 17.1319 17.9075C16.7332 17.6903 16.296 17.5817 15.8204 17.5817C15.388 17.5817 14.9941 17.6879 14.6386 17.9002C14.2879 18.1078 14.0068 18.3878 13.7955 18.7401C13.5889 19.0877 13.4856 19.4739 13.4856 19.8986ZM27.0044 19.8986C27.0044 19.4739 26.8987 19.0877 26.6874 18.7401C26.4808 18.3878 26.2021 18.1078 25.8514 17.9002C25.5055 17.6879 25.1212 17.5817 24.6984 17.5817C24.3718 17.5817 24.0643 17.6323 23.7761 17.7337C23.4878 17.8302 23.2188 17.9654 22.969 18.1392C22.7191 18.3081 22.4885 18.4988 22.2772 18.7112C22.0177 18.9574 21.8016 19.1963 21.6286 19.428C21.4605 19.6549 21.3404 19.8117 21.2683 19.8986C21.398 20.0869 21.5445 20.2824 21.7079 20.4851C21.8712 20.6879 22.061 20.8978 22.2772 21.115C22.6086 21.4336 22.9714 21.7015 23.3653 21.9187C23.764 22.136 24.2084 22.2446 24.6984 22.2446C25.1212 22.2446 25.5055 22.1408 25.8514 21.9332C26.2021 21.7208 26.4808 21.4385 26.6874 21.0861C26.8987 20.7289 27.0044 20.3331 27.0044 19.8986Z" fill="#A8893A" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-display tracking-wide uppercase text-white leading-none mb-1">
                    HUMAN INTERIOR
                  </span>
                  <span className="text-[10px] text-white/50 uppercase tracking-[0.15em]">
                    Member of HISPACE.AI
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "Serving Star-Rating Living Spaces" <br />
                <span className="font-medium text-white/90">Phụng Sự Không Gian Sống Chuẩn Sao</span>
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E05C3E] transition-colors">
                  <span className="text-sm font-bold">Fb</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E05C3E] transition-colors">
                  <span className="text-sm font-bold">Yt</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E05C3E] transition-colors">
                  <span className="text-sm font-bold">In</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Liên Kết Nhanh</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-[#E05C3E] transition-colors">Về Human Interior</Link></li>
                <li><Link href="#" className="hover:text-[#E05C3E] transition-colors">Dự án Showroom</Link></li>
                <li><Link href="#" className="hover:text-[#E05C3E] transition-colors">Chính sách ưu đãi</Link></li>
                <li><Link href="https://humaninterior.vn" target="_blank" className="hover:text-[#E05C3E] transition-colors">Website chính thức</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Thông Tin Liên Hệ</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#E05C3E] mt-0.5">location_on</span>
                  <span>Số 27 (Trụ sở mới Human Interior), TP. Hồ Chí Minh</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#E05C3E]">phone</span>
                  <span>0912.xxx.xxx (Hotline)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#E05C3E]">mail</span>
                  <span>contact@humaninterior.vn</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#E05C3E]">language</span>
                  <a href="https://humaninterior.vn" target="_blank" className="hover:text-white">humaninterior.vn</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-display">Đăng Ký Nhận Tin</h4>
              <p className="text-gray-400 text-sm mb-4">
                Nhận thông tin ưu đãi khai trương và xu hướng thiết kế mới nhất.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#E05C3E]"
                />
                <button className="w-full bg-[#E05C3E] hover:bg-[#C8482D] text-white font-bold py-2.5 rounded transition-colors uppercase text-sm cursor-pointer animate-ripple">
                  Đăng Ký
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center bg-black/50 p-4 rounded-lg">
            <p className="text-gray-500 text-sm">
              © 2026 Human Interior. Member of HISPACE.AI. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
              <Link href="#" className="hover:text-white">Điều khoản sử dụng</Link>
              <Link href="#" className="hover:text-white">Chính sách bảo mật</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== FLOATING ACTIONS ========== */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 z-[990] transition-transform duration-500 ease-in-out shadow-[0_-5px_20px_rgba(0,0,0,0.1)] ${showFloatingBar ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="text-[#333] font-bold font-display text-sm uppercase tracking-wide">
              Bạn cần tư vấn thiết kế?
            </p>
            <p className="text-xs text-[#666]">Kết nối ngay với KTS Trưởng</p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              className="flex-1 md:flex-none bg-[#E05C3E] hover:bg-[#C8482D] text-white px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-2 animate-ripple cursor-pointer"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
              Tư vấn thiết kế
            </button>
            <button
              className="flex-1 md:flex-none bg-white hover:bg-gray-50 text-[#333] border border-[#ddd] px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="material-symbols-outlined text-[18px]">construction</span>
              Tư vấn thi công
            </button>
          </div>
        </div>
      </div>

      <a
        href="https://zalo.me/0912xxxxxx"
        target="_blank"
        className={`fixed bottom-24 md:bottom-24 right-5 z-[999] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer ${showFloatingBar ? 'bottom-32 md:bottom-24' : 'bottom-6 md:bottom-6'}`}
        style={{
          background: 'linear-gradient(45deg, #0068FF, #0041a3)',
          animation: 'bounce-interval 5s infinite'
        }}
      >
        <span className="material-symbols-outlined text-white text-[28px]">phone_in_talk</span>
        <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-75"></span>
      </a>
    </main>
  );
}
