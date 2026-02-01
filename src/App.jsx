import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Shield, Lightbulb, Scale, User, MapPin, Phone, Mail, MessageCircle, CheckCircle2, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';

const translations = {
  ko: {
    nav: {
      home: '홈',
      representative: '대표 변리사',
      expertise: '전문분야',
      contact: '문의하기'
    },
    hero: {
      title1: '당신의 아이디어,',
      title2: '법적 권리',
      title3: '로 완성합니다.',
      subtitle: '복잡한 지식재산권 문제, 이형빈특허법률사무소가 확실하고 명쾌한 해답을 드립니다.',
      btn_profile: '대표변리사 소개',
      btn_contact: '문의하기'
    },
    representative: {
      name: '이형빈',
      role: '대표변리사',
      intro_title: '"기술의 가치를 정확히 꿰뚫어보는 ',
      intro_highlight: '전문가의 시선',
      intro_post: '으로 함께합니다."',
      intro_desc: [
        '안녕하세요. 이형빈 변리사입니다.',
        '지식재산권은 단순한 서류 작업이 아닙니다. 고객님의 기술이 시장에서 독점적 지위를 확보할 수 있도록 돕는 가장 강력한 비즈니스 무기입니다.',
        '대기업 및 중소기업의 다양한 기술 보호 업무를 수행해 온 경험을 바탕으로, 고객님의 소중한 아이디어를 확실한 권리로 만들어 드리겠습니다.'
      ],
      history_title: '주요 약력',
      history_items: [
        '서울대학교 공과대학 건축학과 졸업',
        '경기과학고등학교 졸업',
        '제56회 변리사 시험 합격',
        '제57회 변리사 1차시험 검토위원',
        '기술신용평가사 3급',
        '(현) 이형빈특허법률사무소 대표변리사',
        '(현) 대한변리사회(KPAA) 정회원',
        '(전) 특허법인 광장리앤고 근무',
        '(전) 이건주특허법률사무소 근무',
        '(전) 특허법인 로얄 근무',
        '(전) (주)삼우종합건축사사무소 건축설계본부 근무'
      ],
      work_title: '주요업무이력',
      work_sections: [
        {
          title: '[특허 출원 업무]',
          items: [
            '무선단말기(스마트폰, 노트북, AR/VR글래스 등) 관련 글로벌기업의 국내 및 해외 특허출원',
            '이차전지 관련 글로벌기업의 국내 및 해외 특허출원',
            '가전, 모터, 엔진 관련 글로벌기업의 국내 및 해외 특허출원',
            '솔라셀 관련 글로벌기업의 국내 및 해외 특허출원',
            '전자 상거래 플랫폼 관련 글로벌기업의 국내 및 해외 특허출원',
            'X선 발생장치 관련 글로벌기업의 국내 및 해외 특허출원',
            '의료기구, 전자담배, 가정용 가구 관련 국내 및 해외 특허출원',
            '산학협력단 국내 및 해외 특허출원'
          ]
        },
        {
          title: '[디자인/상표 출원 업무]',
          items: [
            'UI/UX 관련 국내 및 해외 디자인출원',
            '아이콘, 디자인, 캐릭터 관련 국내 및 해외 디자인출원',
            '안전화, 특장차용 부속 등 국내 및 해외 디자인출원',
            '가정용 가구 관련 국내 및 해외 디자인출원',
            '헤이그 국제출원 업무',
            '병원 관련 국내 및 해외 상표출원'
          ]
        },
        {
          title: '[분쟁/자문]',
          items: [
            '반도체 소재/부품/장비 관련 특허맵 작성 등 자문',
            '이차전지, LNG선 화물창, 공기청정기, 디스플레이 윈도우 구조물, 반도체 공정 부산물 포집 장치 등 다수의 특허 침해/무효 자문',
            '바이오 정제 공장 시스템 관련 특허성 자문',
            '정수기, 카메라 렌즈모듈용 스페이서, 플라스틱 복합관 등 다수의 특허 침해/무효 사건',
            '폐기물처리장치 관련 침해/무효 사건',
            'AUTO-INJECTION 관련 자유실시가능성 검토 등 자문',
            '미용 의료기기 관련 자유실시가능성 검토 등 자문',
            '철도 제동장치 관련 영업비밀 침해 형사 사건',
            'UI/UX, 공기청정기, 뷰티제품 관련 다수의 디자인 침해/무효 자문'
          ]
        }
      ]
    },
    expertise: {
      label: 'Our Expertise',
      title: '전문 분야',
      desc: '출원부터 심판, 소송까지 각 분야의 전문성을 바탕으로\n고객 맞춤형 법률 솔루션을 제공합니다.',
      services: [
        {
          title: '특허 / 실용신안',
          desc: '기계/기구, 전기/전자, IT, 반도체, 이차전지, 의료기기 등 전문 지식을 바탕으로 강한 특허 포트폴리오를 구축해 드립니다.',
          items: ['국내외 출원 및 등록', '선행기술조사', '거절이유 대응']
        },
        {
          title: '디자인 / 상표',
          desc: '제품의 디자인 독창성 및 기업의 브랜드 가치를 보호하기 위한 전략적 출원 및 관리를 수행합니다.',
          items: ['디자인권 확보', '브랜드 네이밍 자문', '디자인/상표 분쟁 대응']
        },
        {
          title: '분쟁 / 자문',
          desc: '분쟁 발생 시 최적의 대응 방안 및 고객의 비즈니스의 영위를 위한 자문 서비스를 제공합니다.',
          items: ['산업재산권 심판/소송', '침해/무효 자문', '특허맵/기술동향파악/자유실시가능성(FTO)']
        }
      ]
    },
    contact: {
      label: 'Contact Us',
      title: '문의',
      desc: '대면 상담을 원하시는 경우, 미리 연락 부탁드립니다.\n친절하게 안내해 드리겠습니다.',
      kakao: { title: '카카오톡 상담하기', sub: '실시간 채팅 상담 연결' },
      phone: '전화',
      email: '이메일',
      address: '주소',
      address_val: '서울특별시 성동구 연무장5가길 25, \n4층 416호 에이 07호\n(성수동2가, 성수역 SK V1 Tower)',
      form: {
        title: '온라인 문의하기',
        name: '성함 (또는 회사명)',
        name_ph: '성함 또는 회사명을 입력해주세요',
        phone: '연락처',
        phone_ph: '010-0000-0000',
        email: '이메일 주소',
        email_ph: 'example@email.com',
        message: '문의 내용',
        message_ph: '구체적인 상담 내용을 적어주시면 더 정확한 답변이 가능합니다.',
        privacy: '개인정보 수집 및 이용에 동의합니다.',
        submit: '제출',
        success: '문의가 성공적으로 전송되었습니다.',
        fail: '문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.'
      }
    },
    footer: {
      slogan: '고객의 아이디어가 세상의 빛을 볼 수 있도록\n든든한 법률 파트너가 되어드리겠습니다.',
      info: '대표변리사: 이형빈 | 사업자등록번호: 183-73-00629',
      address: '주소: 서울특별시 성동구 연무장5가길 25, 4층 416호 에이 07호(성수동2가, 성수역 SK V1 Tower) | TEL: 0502-6682-4703',
      copyright: '© 2026 LHB IP Law firm. All rights reserved.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      representative: 'Attorney',
      expertise: 'Expertise',
      contact: 'Contact'
    },
    hero: {
      title1: 'Your Idea,',
      title2: 'Completed as a Legal Right.',
      title3: '',
      subtitle: 'LHB IP Law Firm provides clear and definite solutions for complex intellectual property issues.',
      btn_profile: 'About Attorney',
      btn_contact: 'Contact Us'
    },
    representative: {
      name: 'Hyungbin Lee',
      role: 'Representative Patent Attorney',
      intro_title: '"We accompany you with the ',
      intro_highlight: 'expert\'s perspective',
      intro_post: ' that accurately penetrates the value of technology."',
      intro_desc: [
        'Hello, I am Hyungbin Lee, a patent attorney.',
        'Intellectual property is not just paperwork. It is the most powerful business weapon that helps your technology secure a monopoly position in the market.',
        'Based on my experience in performing various technology protection tasks for large and small companies, I will turn your precious ideas into solid rights.'
      ],
      history_title: 'Biography',
      history_items: [
        'B.S. in Architecture, Seoul National University',
        'Gyeonggi Science High School',
        'Passed the 56th Patent Attorney Examination',
        'Reviewer for the 57th Patent Attorney Primary Examination',
        'Technology Credit Appraiser Level 3',
        '(Current) Representative Patent Attorney, LHB IP Law Firm',
        '(Current) Member, Korea Patent Attorneys Association (KPAA)',
        '(Former) Patent Attorney, Lee & Ko IP',
        '(Former) Patent Attorney, Lee & Gun',
        '(Former) Patent Attorney, Royal Patent & Law Firm',
        '(Former) Samoo Architects & Engineers'
      ],
      work_title: 'Work Experience',
      work_sections: [
        {
          title: '[Patent Application]',
          items: [
            'Domestic/Overseas patent applications for global companies (Wireless terminals: Smartphones, Laptops, AR/VR glasses)',
            'Domestic/Overseas patent applications for global companies (Secondary batteries)',
            'Domestic/Overseas patent applications for global companies (Home appliances, Motors, Engines)',
            'Domestic/Overseas patent applications for global companies (Solar cells)',
            'Domestic/Overseas patent applications for global companies (E-commerce platforms)',
            'Domestic/Overseas patent applications for global companies (X-ray generators)',
            'Domestic/Overseas patent applications (Medical instruments, Electronic cigarettes, Furniture)',
            'Domestic/Overseas patent applications for University Industry-Academic Cooperation Foundations'
          ]
        },
        {
          title: '[Design/Trademark Application]',
          items: [
            'Domestic/Overseas design applications (UI/UX)',
            'Domestic/Overseas design applications (Icons, Designs, Characters)',
            'Domestic/Overseas design applications (Safety shoes, Special vehicle parts)',
            'Domestic/Overseas design applications (Furniture)',
            'Hague international design applications',
            'Domestic/Overseas trademark applications (Hospitals)'
          ]
        },
        {
          title: '[Disputes/Consulting]',
          items: [
            'Consulting on patent maps (Semiconductor materials/parts/equipment)',
            'Consulting on infringement/invalidity (Secondary batteries, LNG carriers, Air purifiers, Display windows, etc.)',
            'Consulting on patentability (Bio-refinery plant systems)',
            'Infringement/Invalidity cases (Water purifiers, Camera lens spacers, Plastic composite pipes)',
            'Infringement/Invalidity cases (Waste treatment devices)',
            'FTO Consulting (Auto-injections)',
            'FTO Consulting (Aesthetic medical devices)',
            'Criminal cases on trade secret infringement (Railway braking systems)',
            'Consulting on design infringement/invalidity (UI/UX, Air purifiers, Beauty products)'
          ]
        }
      ]
    },
    expertise: {
      label: 'Our Expertise',
      title: 'Expertise',
      desc: 'From application to trial and litigation, we provide customized legal solutions based on expertise in each field.',
      services: [
        {
          title: 'Patent / Utility Model',
          desc: 'We build a strong patent portfolio based on expert knowledge in machinery, electricity/electronics, IT, semiconductors, secondary batteries, and medical devices.',
          items: ['Domestic/Overseas Filing & Registration', 'Prior Art Search', 'Response to Office Actions']
        },
        {
          title: 'Design / Trademark',
          desc: 'We perform strategic filing and management to protect the originality of product designs and corporate brand value.',
          items: ['Securing Design Rights', 'Brand Naming Consultation', 'Design/Trademark Dispute Response']
        },
        {
          title: 'Disputes / Consulting',
          desc: 'We provide optimal response strategies in case of disputes and consulting services for the continuity of your business.',
          items: ['IP Trials/Litigation', 'Infringement/Invalidity Advice', 'Patent Map / Tech Trends / FTO']
        }
      ]
    },
    contact: {
      label: 'Contact Us',
      title: 'Contact',
      desc: 'If you wish to have a face-to-face consultation, please contact us in advance.\nWe will guide you kindly.',
      kakao: { title: 'KakaoTalk Chat', sub: 'Real-time chat consultation' },
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      address_val: 'Rm 416-A07, 4F, 25, Yeonmujang 5ga-gil, Seongdong-gu, Seoul, Republic of Korea\n(Seongsu-dong 2-ga, Seongsu Station SK V1 Tower)',
      form: {
        title: 'Online Inquiry',
        name: 'Name (or Company)',
        name_ph: 'Name or Company Name',
        phone: 'Phone Number',
        phone_ph: '010-0000-0000',
        email: 'Email Address',
        email_ph: 'example@email.com',
        message: 'Message',
        message_ph: 'Please provide specific details for a more accurate response.',
        privacy: 'I agree to the collection and use of personal information.',
        submit: 'Submit',
        success: 'Your inquiry has been sent successfully.',
        fail: 'Failed to send inquiry. Please try again later.'
      }
    },
    footer: {
      slogan: 'We will be a reliable legal partner so that your ideas can see the light of the world.',
      info: 'Representative Patent Attorney: Hyungbin Lee | Business Registration Number: 183-73-00629',
      address: 'Address: Rm 416-A07, 4F, 25, Yeonmujang 5ga-gil, Seongdong-gu, Seoul, Republic of Korea | TEL: 0502-6682-4703',
      copyright: '© 2026 LHB IP Law firm. All rights reserved.'
    }
  }
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState('ko');

  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacy: false
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS에서 발급받은 ID와 Key를 아래에 입력해주세요.
    const serviceID = 'service_vr6urmx';
    const templateID = 'template_sy49wyw';
    const publicKey = 'YzsNzTjn2kP-LeV0A';

    const templateParams = {
      to_email: 'lhb@lhbip.com',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(t.contact.form.success);
        // 성공 시 폼 초기화
        setFormData({ name: '', phone: '', email: '', message: '', privacy: false });
      }, (err) => {
        console.error('FAILED...', err);
        alert(t.contact.form.fail);
      });
  };

  // 스크롤 감지 핸들러
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Noto Sans KR 폰트 적용
  useEffect(() => {
    document.title = lang === 'ko' ? "이형빈특허법률사무소(LHB IP Law firm)" : "LHB IP Law firm";
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [lang]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setLang(prev => prev === 'ko' ? 'en' : 'ko');

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.representative, href: '#representative' },
    { name: t.nav.expertise, href: '#expertise' },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden w-full" style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>
      {/* Navigation */}
      {/* 수정: 스크롤 전에는 완전 투명(bg-transparent), 스크롤 후에는 곤색(bg-slate-900) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-600 shadow-lg py-2' : 'bg-transparent py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-auto">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo.png" 
                alt="이형빈특허법률사무소 로고" 
                className={`h-16 w-auto object-contain ${isScrolled ? '' : 'mix-blend-multiply'}`}
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-bold transition-colors py-2 border-b-2 border-transparent ${
                    isScrolled 
                      ? 'text-white hover:text-blue-400 hover:border-blue-400' 
                      : 'text-white/90 hover:text-white hover:border-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm'
                }`}
              >
                <Mail size={18} className="mr-2" />
                <span className="text-base font-bold">{t.nav.contact}</span>
              </a>
              
              {/* Language Toggle (Desktop) */}
              <button 
                onClick={toggleLang}
                className={`flex items-center px-3 py-1 rounded-full transition-colors border ${
                  isScrolled 
                    ? 'border-slate-400 text-slate-200 hover:text-white hover:border-white' 
                    : 'border-white/30 text-white/80 hover:text-white hover:border-white'
                }`}
              >
                <Globe size={16} className="mr-1" />
                <span className="text-sm font-bold">{lang === 'ko' ? 'EN' : 'KO'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleLang}
                className={`p-2 mr-2 transition-colors ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-200'}`}
              >
                <span className="font-bold text-sm">{lang === 'ko' ? 'EN' : 'KO'}</span>
              </button>
              <button 
                onClick={toggleMenu} 
                className={`p-2 transition-colors ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-200'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-600 border-t border-slate-500 absolute w-full left-0 top-full shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 rounded-lg text-base font-bold text-white hover:text-blue-300 hover:bg-slate-500"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (link.href === '#representative') {
                      e.preventDefault();
                      const element = document.getElementById('profile-image');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-3 rounded-lg text-base font-bold text-white hover:text-blue-300 hover:bg-slate-500 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail size={18} className="mr-2" />
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (Landing) */}
      <section id="home" className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-transparent to-slate-500/100"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t.hero.title1}<br />
            <span className="text-blue-500">{t.hero.title2}</span>{t.hero.title3}
          </h1>
          <p className="text-gray-300 text-m md:text-lg max-w-2xl mx-auto mb-10 font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
               href="#representative" 
               onClick={(e) => {
                 if (window.innerWidth < 768) {
                   e.preventDefault();
                   const element = document.getElementById('profile-image');
                   if (element) element.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
               className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20"
             >
               {t.hero.btn_profile}
             </a>
             <a href="#contact" className="px-8 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
               {t.hero.btn_contact}
             </a>
          </div>
        </div>
      </section>

      {/* 1. Representative Section (대표 약력) */}
      <section id="representative" className="py-24 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 상단: 사진 및 인사말 */}
          <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-16 items-center mb-16">
            
            {/* Profile Image Area */}
            <div id="profile-image" className="w-full md:w-5/12 relative group scroll-mt-24">              
              <div className="relative aspect-[1/1.48] bg-slate-100 rounded-xl overflow-hidden shadow-2xl flex items-end justify-center">
                {/* 실제 사진이 없을 경우를 대비한 아이콘 플레이스홀더 */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <User size={150} strokeWidth={1} />
                </div>
                {/* 사진 파일이 준비되면 아래 img 태그의 주석을 해제하고 src를 변경하세요 */}
                <img src="/profile.jpg" alt="이형빈 대표변리사" className="w-full h-full object-cover relative z-10" />
                
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-8 pt-20 text-right z-20">
                  <p className="text-white font-bold text-2xl">{t.representative.name}</p>
                  <p className="text-blue-300 font-medium">{t.representative.role}</p>
                </div>
              </div>
            </div>

            {/* Intro Text Area */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-1 w-10 bg-blue-600"></div>
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Representative Patent Attorney</span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-snug break-keep">
                {t.representative.intro_title}<span className="text-blue-700">{t.representative.intro_highlight}</span>{t.representative.intro_post}
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 border-l-4 border-gray-200 pl-6">
                {t.representative.intro_desc.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < t.representative.intro_desc.length - 1 && <><br /><br /></>}
                  </React.Fragment>
                ))}
              </p>
              
              
            </div>
          </div>

          {/* 하단: 주요 약력 및 주요수행업무 (사진 아래 열로 이동됨) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center pb-2 border-b border-gray-200">
                <CheckCircle2 size={24} className="text-blue-600 mr-2" />
                {t.representative.history_title}
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm md:text-base">
                {t.representative.history_items.map((item, idx) => (
                  <li key={idx} className="flex items-start"><span className="mr-2 text-blue-400">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center pb-2 border-b border-gray-200">
                <CheckCircle2 size={24} className="text-blue-600 mr-2" />
                {t.representative.work_title}
              </h3>
              <ul className="space-y-1 text-slate-700 text-sm md:text-base">
                {t.representative.work_sections.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <li className="font-bold text-slate-900">{section.title}</li>
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start"><span className="mr-2 text-blue-400">•</span>{item}</li>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Expertise Section (전문 분야) */}
      <section id="expertise" className="py-24 bg-slate-900 text-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">{t.expertise.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t.expertise.desc.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
              ))}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Lightbulb size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.expertise.services[0].title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t.expertise.services[0].desc}
              </p>
              <ul className="space-y-2">
                {t.expertise.services[0].items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-300">
                    <ChevronRight size={14} className="text-blue-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Shield size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.expertise.services[1].title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t.expertise.services[1].desc}
              </p>
              <ul className="space-y-2">
                {t.expertise.services[1].items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-300">
                    <ChevronRight size={14} className="text-blue-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Scale size={30} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.expertise.services[2].title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t.expertise.services[2].desc}
              </p>
              <ul className="space-y-2">
                {t.expertise.services[2].items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-300">
                    <ChevronRight size={14} className="text-blue-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Section (문의) */}
      <section id="contact" className="py-24 bg-gray-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Contact Us</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">{t.contact.title}</h2>
              <p className="text-slate-600 mb-8">
                {t.contact.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                ))}
              </p>

              <div className="space-y-6">
                {/* KakaoTalk Button (Highlighted) */}
                <a 
                   href="http://pf.kakao.com/_YYtxon/chat" 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center p-5 bg-[#FAE100] rounded-xl text-slate-900 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer border border-yellow-400/50"
                >
                  <div className="bg-slate-900/10 p-2 rounded-full mr-4">
                    <MessageCircle size={28} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t.contact.kakao.title}</h3>
                    <p className="text-xs font-semibold opacity-70">{t.contact.kakao.sub}</p>
                  </div>
                </a>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                   <Phone className="text-blue-600 mt-1 mr-4" size={20} />
                   <div>
                     <h4 className="font-bold text-slate-900">{t.contact.phone}</h4>
                     <p className="text-slate-600 mt-1">0502-6682-4703</p>
                   </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                   <Mail className="text-blue-600 mt-1 mr-4" size={20} />
                   <div>
                     <h4 className="font-bold text-slate-900">{t.contact.email}</h4>
                     <p className="text-slate-600 mt-1">lhb@lhbip.com</p>
                   </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                   <MapPin className="text-blue-600 mt-1 mr-4" size={20} />
                   <div>
                     <h4 className="font-bold text-slate-900">{t.contact.address}</h4>
                     <p className="text-slate-600 mt-1">
                       {t.contact.address_val.split('\n').map((line, i) => (
                         <React.Fragment key={i}>{line}{i < 2 && <br />}</React.Fragment>
                       ))}
                     </p>
                   </div>
                </div>
              </div>
            </div>

            {/* Online Inquiry Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.form.title}</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.name}<span className="text-red-500 ml-1">•</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder={t.contact.form.name_ph}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.phone}</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder={t.contact.form.phone_ph}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.email}<span className="text-red-500 ml-1">•</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.form.email_ph}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.form.message}<span className="text-red-500 ml-1">•</span></label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t.contact.form.message_ph}
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="h-48 overflow-y-auto text-xs text-slate-500 mb-3 leading-relaxed whitespace-pre-wrap p-3 bg-white border border-gray-200 rounded-md">
                      {lang === 'ko' ? `[개인정보처리방침 및 이용 동의]

이형빈특허법률사무소(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.

제1조 (개인정보의 처리목적)
회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 사건 수임 및 법률 상담 온라인 문의에 대한 답변 제공, 상담 내용 확인, 이해상충 여부 확인, 견적서 발송 등
2. 서비스 제공 및 계약의 이행 특허/상표/디자인 출원 및 등록 업무, 심판/소송 대리 등 법률 서비스 제공

제2조 (개인정보의 처리 및 보유기간)
① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

1. 온라인 상담 및 문의 관리: 개인정보는 온라인 상담 및 문의와 관련된 이용목적이 달성된 후에는 지체 없이 파기하며, 보유기간은 최대 3년을 넘기지 않는 것을 원칙으로 합니다.

제3조 (처리하는 개인정보의 항목)
본 사무소는 온라인 상담 신청 및 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.
1. 수집 항목: 성명(또는 회사명), 연락처(휴대전화번호/유선번호), 이메일 주소, 상담 내용
2. 수집 방법: 홈페이지 내 '온라인 문의하기' 양식 작성
3. 서비스 이용 과정에서 자동 생성되는 정보: 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그

제4조 (개인정보의 제3자 제공)
본 사무소는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다. (현재 본 사무소는 개인정보를 제3자에게 제공하고 있지 않습니다.)

제5조(이용자 및 법정대리인의 권리와 그 행사 방법)

① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
1. 개인정보 열람 요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제요구
4. 처리정지 요구
② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
⑤ 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니 됩니다.

제6조(개인정보의 파기)
① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
② 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기 절차
회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
2. 파기 방법
회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.

제7조(개인정보의 안전성 확보조치)
회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 하고 있습니다.
1. 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등
2. 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 고유 식별정보, SSL 보안서버 구축(전송구간 암호화)
등의 암호화, 보안프로그램 설치
3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제

제8조(개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)
① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에 보내는 소량의 정보이며 이용자들의 컴퓨터 내의 하드디스크에 저장되기도 합니다.
가. 쿠키의 사용 목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
나. 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.

제9조 (개인정보 보호책임자)
본 사무소는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
개인정보 보호책임자: 이형빈
직책: 대표 변리사
연락처: 0502-6682-4703, lhbip@lhbip.com

제10조(권익침해 구제 방법)
정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.

▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
- 소관 업무 : 개인정보 침해사실 신고, 상담 신청
- 홈페이지 : privacy.kisa.or.kr
- 전화 : (국번없이) 118
- 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터

▶ 개인정보 분쟁조정위원회
- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
- 홈페이지 : www.kopico.go.kr
- 전화 : (국번없이) 1833-6972
- 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층

▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)
▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)


제11조(개인정보 처리방침 시행 및 변경)
이 개인정보 처리방침은 2026. 2. 1부터 적용됩니다.` : `[Privacy Policy]

LHB IP Law Firm (hereinafter referred to as the 'Company') establishes and discloses the following personal information processing guidelines in accordance with Article 30 of the Personal Information Protection Act to protect the personal information of data subjects and to handle related grievances promptly and smoothly.

Article 1 (Purpose of Processing Personal Information)
The Company processes personal information for the following purposes. The personal information being processed will not be used for purposes other than the following, and if the purpose of use changes, necessary measures such as obtaining separate consent in accordance with Article 18 of the Personal Information Protection Act will be implemented.

1. Providing answers to online inquiries regarding case acceptance and legal consultation, checking consultation details, checking for conflicts of interest, sending estimates, etc.
2. Provision of services and performance of contracts: Patent/trademark/design application and registration work, legal services such as trial/litigation representation

Article 2 (Processing and Retention Period of Personal Information)
① The Company processes and retains personal information within the personal information retention and use period according to laws and regulations or the personal information retention and use period agreed upon when collecting personal information from the data subject.
② The respective personal information processing and retention periods are as follows.

1. Online consultation and inquiry management: Personal information is destroyed without delay after the purpose of use related to online consultation and inquiry is achieved, and in principle, the retention period does not exceed 3 years.

Article 3 (Items of Personal Information Processed)
The office collects the following personal information for online consultation applications and service provision.
1. Collected items: Name (or company name), contact information (mobile phone number/wired number), email address, consultation details
2. Collection method: Filling out the 'Online Inquiry' form on the website
3. Information automatically generated during service use: Access IP information, cookies, service usage records, access logs

(Summary: We collect Name, Phone, Email, Message for consultation purposes and do not share with third parties.)`}
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-slate-700 cursor-pointer select-none">
                        {t.contact.form.privacy}
                        <span className="text-red-500 ml-1">•</span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    {t.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <span className="font-bold text-xl text-white block mb-4">
                  {lang === 'ko' ? '이형빈' : 'LHB '}<span className="text-blue-600">{lang === 'ko' ? '특허법률사무소' : 'IP Law Firm'}</span>
              </span>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t.footer.slogan.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-xs text-slate-500 text-center md:text-left">
            <p className="mb-1">{t.footer.info}</p>
            <p className="mb-1">{t.footer.address}</p>
            <p className="mt-4">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;