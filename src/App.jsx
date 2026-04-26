import React, { useState, useEffect } from 'react';
import {
  Menu, X, Youtube, Instagram, ExternalLink,
  Heart, Mail, FileText, ChevronDown, Music
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 스크롤 시 네비게이션 바 배경 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Artists', href: '#artists' },
    { name: 'Connect', href: '#connect' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
            Soul De <span className="text-indigo-400">Blanc</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neutral-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 py-4 px-6 flex flex-col space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-300 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-6">
          <p className="text-indigo-400 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            Performance Planning & Management
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            Soul De <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Blanc</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light">
            아티스트의 고유한 색채를 무대 위에 투명하게 그려냅니다.<br className="hidden md:block"/>
            음악과 퍼포먼스로 완성되는 최고의 순간을 기획합니다.
          </p>
          <a
            href="#artists"
            className="inline-flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium tracking-wide uppercase">Meet Our Artists</span>
            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Artists</h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              소울 드 블랑과 함께 다채로운 무대를 만들어가는 소속 아티스트를 소개합니다.
            </p>
          </div>

          {/* Artist Card: TuneAde */}
          <div className="bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden hover:border-indigo-500/30 transition-colors duration-500">
            <img
              src="/members/team1.jpeg"
              alt="튠에이드 팀 단체 사진"
              className="w-full max-h-[min(52vw,420px)] md:max-h-[460px] object-cover object-[center_22%] bg-white"
            />
            <div className="p-8 md:p-12">
              <div className="text-center md:text-left mb-10">
                <div className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Acapella Vocal Group
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">TuneAde <span className="text-xl font-medium text-neutral-500 ml-2">튠에이드</span></h3>
                <p className="text-neutral-400 leading-relaxed">
                  목소리로 완성되는 시원상큼한 음악 레시피. 서로 다른 다섯 개의 소리가 만나 튠에이드만의 유니크하고 감각적인 하모니를 빚어냅니다.
                </p>
              </div>

            {/* TuneAde Members */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-neutral-800">
              {[
                { part: 'Soprano', name: '오승아' , photo: '/members/oh-seung-ah.jpg'},
                { part: 'Alto', name: '박소연', photo: '/members/park-soyeon.jpg'},
                { part: 'Tenor', name: '한울', photo: '/members/han-wool.jpeg'},
                { part: 'Beatboxer', name: '온규' , photo: '/members/owngyu.jpeg'},
                { part: 'Bass', name: '구지원', photo: '/members/gu-jiwon.jpeg' }
              ].map((member) => (
                <div key={member.part} className="flex flex-col items-center group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-neutral-900 border border-neutral-700 overflow-hidden flex items-center justify-center mb-3 group-hover:border-indigo-400 transition-colors duration-300">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`${member.name} 프로필`}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <Music className="text-neutral-600 group-hover:text-indigo-400/50 transition-colors" size={24} />
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white">{member.name}</h4>
                  <p className="text-xs text-indigo-400 font-medium">{member.part}</p>
                </div>
              ))}
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* Connect (Profile, SNS, Patron) */}
      <section id="connect" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Us</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-neutral-400">
              소울 드 블랑과 아티스트들의 음악과 더 많은 이야기를 만나보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1. Profile (Google Drive) */}
            <a
              href="https://drive.google.com/file/d/1A7ZemgFsHvWz4fDJyoal2yL4cFedUXtL/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] flex items-start space-x-6"
            >
              <div className="p-4 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <FileText size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Official Profile</h3>
                  <ExternalLink size={16} className="text-neutral-500 group-hover:text-indigo-400" />
                </div>
                <p className="text-sm text-neutral-400">
                  기획사 및 소속 아티스트의 포트폴리오를 확인하세요.
                </p>
              </div>
            </a>

            {/* 2. YouTube */}
            <a
              href="https://www.youtube.com/@tuneade_vocalgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] flex items-start space-x-6"
            >
              <div className="p-4 bg-red-500/10 rounded-xl text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Youtube size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">YouTube</h3>
                  <ExternalLink size={16} className="text-neutral-500 group-hover:text-red-400" />
                </div>
                <p className="text-sm text-neutral-400">
                  커버 곡, 라이브 무대, 기획 영상 등 다양한 콘텐츠를 감상하세요.
                </p>
              </div>
            </a>

            {/* 3. Instagram */}
            <a
              href="https://www.instagram.com/tuneade_vocalgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] flex items-start space-x-6"
            >
              <div className="p-4 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-colors">
                <Instagram size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Instagram</h3>
                  <ExternalLink size={16} className="text-neutral-500 group-hover:text-purple-400" />
                </div>
                <p className="text-sm text-neutral-400">
                  소속 아티스트들의 활동 소식과 비하인드를 가장 빠르게 만나보실 수 있습니다.
                </p>
              </div>
            </a>

            {/* 4. Patron (Support) */}
            <a
              href="https://qr.kakaopay.com/FSxAVi5XY"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)] flex items-start space-x-6"
            >
              <div className="p-4 bg-pink-500/10 rounded-xl text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Heart size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Patron</h3>
                  <ExternalLink size={16} className="text-neutral-500 group-hover:text-pink-400" />
                </div>
                <p className="text-sm text-neutral-400">
                  아티스트들의 창작 활동을 후원해주세요. 더 멋진 무대로 보답해드리겠습니다.
                </p>
              </div>
            </a>

            {/* 5. Naver Profile */}
            <a
              href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%8A%A0%EC%97%90%EC%9D%B4%EB%93%9C"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex items-start space-x-6"
            >
              <div className="p-4 bg-green-500/10 rounded-xl text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <ExternalLink size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Naver Profile</h3>
                  <ExternalLink size={16} className="text-neutral-500 group-hover:text-green-400" />
                </div>
                <p className="text-sm text-neutral-400">
                  네이버 인물 프로필에서 튠에이드의 최신 활동과 대표 정보를 확인해보세요.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <Mail className="mx-auto text-indigo-400 mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-neutral-400 mb-10">
            소속 아티스트 공연 섭외, 기획 및 기타 문의 사항은 아래 이메일로 연락 주시면 빠르게 답변해 드리겠습니다.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-neutral-950 p-2 pl-6 rounded-full border border-neutral-800">
            <span className="text-lg font-medium text-neutral-300">
              tuneade2019@gmail.com
            </span>
            <a
              href="mailto:tuneade2019@gmail.com"
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors"
            >
              메일 보내기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-neutral-950 border-t border-neutral-900 text-center">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Soul De Blanc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
