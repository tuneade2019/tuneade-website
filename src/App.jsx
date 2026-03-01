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
    { name: 'The Voices', href: '#about' }, // About Us를 감각적으로 변경
    { name: 'Connect', href: '#connect' }, // Profile, SNS, Patron 모음
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
            Tune<span className="text-indigo-400">Ade</span>
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
            Acapella Vocal Group
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            Tune<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Ade</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light">
            목소리로 완성되는 시원상큼한 음악 레시피.<br className="hidden md:block"/>
            다섯 사람의 울림이 모여 당신의 일상에 스며드는 하모니를 만듭니다.
          </p>
          <a 
            href="#about" 
            className="inline-flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium tracking-wide uppercase">Discover More</span>
            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* About Us (The Voices) */}
      <section id="about" className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Voices of TuneAde</h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              소프라노, 알토, 테너, 비트박서, 베이스. <br className="hidden md:block"/>
              서로 다른 다섯 개의 소리가 만나 튠에이드만의 음악 레시피를 완성합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* 멤버 플레이스홀더 */}
            {[
              { part: 'Soprano', name: '오승아' },
              { part: 'Alto', name: '박소연' },
              { part: 'Tenor', name: '박강민' },
              { part: 'Beatboxer', name: '온규' },
              { part: 'Bass', name: '구지원' }
            ].map((member) => (
              <div key={member.part} className="flex flex-col items-center group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-neutral-800 border-2 border-neutral-700 flex items-center justify-center mb-4 overflow-hidden group-hover:border-indigo-400 transition-colors duration-300 relative">
                  <Music className="text-neutral-600 group-hover:text-indigo-400/50 transition-colors" size={40} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-indigo-400 font-medium">{member.part}</p>
              </div>
            ))}
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
              튠에이드의 더 많은 이야기와 음악을 만나보세요. 여러분의 응원이 큰 힘이 됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1. Profile (Google Drive) */}
            <a 
              href="https://drive.google.com/file/d/1RHlax0x-DnyY7_qYAYyGYpnCQJyxcxCB/view?usp=drivesdk" 
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
                  튠에이드의 공식 프레스킷과 포트폴리오를 확인하세요. (Google Drive)
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
                  커버 곡, 라이브 무대, 브이로그 등 다양한 영상 콘텐츠를 감상하세요.
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
                  멤버들의 일상과 최신 공연 소식을 가장 빠르게 만나보실 수 있습니다.
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
                  튠에이드의 음악 활동을 후원해주세요. 더 좋은 음악으로 보답하겠습니다.
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
            공연 섭외 및 기타 문의 사항은 아래 이메일로 연락 주시면 빠르게 답변해 드리겠습니다.
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
          © {new Date().getFullYear()} TuneAde A Cappella Group. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

