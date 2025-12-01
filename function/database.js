// [제공해야 될 모든 메일을 정리하는 database]
// id : 0 ~ 9 는 광고
// id : 10 ~ 19 는 함정

const mailDB = [
    // 광고 0 ~ 9 총 10개
    {
        id: 0,
        title: "[MUNSINSA] 저희가 진행하는 POP-UP에 당신을 초대합니다",
        time: "09:12",
        size: 4,
        from: "🔒munsinsa@goomail.com",
        link: "./mails/ads/munsinsa.html"
    },

    {
        id: 1,
        title: "[Myung Sang University] 당신의 꿈을 여기서 펼쳐보세요!!",
        time: "15:29",
        size: 7,
        from: "🔒myungsanguniv@goomail.com",
        link: "./mails/ads/myung_sang.html"
    },

    {
        id: 2,
        title: "AI 기술 컨퍼런스에 귀하를 초대합니다.",
        time: "08:12",
        size: 9,
        from: "🔒AIcon@goomail.com",
        link: "./mails/ads/AIcon.html"
    },

    {
        id: 3,
        title: "<당일배송> 언제든 맡겨주세요!!",
        time: "23:53",
        size: 5,
        from: "🔒czhandaepost@goomail.com",
        link: "./mails/ads/czandaepost.html"
    },
    {
        id: 4,
        title: "당신의 Dream Car 저희가 찾아드리겠습니다.",
        time: "04:40",
        size: 6,
        from: "🔒dreamcar@goomail.com",
        link: "./mails/ads/dreamcar.html"
    },
    {
        id: 5,
        title: "누구나 즐길 수 있는 GAMING FESTIVAL 당신을 이 축제에 초대합니다!!",
        time: "19:37",
        size: 4,
        from: "🔒gamecon@goomail.com",
        link: "./mails/ads/gamecon.html"
    },
    {
        id: 6,
        title: "라인닷만의 스페셜 인테리어 컨설팅, 당신의 공간을 우리에게 맡겨주세요.",
        time: "14:23",
        size: 8,
        from: "🔒linedotspace@goomail.com",
        link: "./mails/ads/linedot.html"
    },
    {
        id: 7,
        title: "인공지능의 시대, AI와 함께하는 미래를 준비하세요!",
        time: "20:59",
        size: 4,
        from: "🔒nexustech@goomail.com",
        link: "./mails/ads/nexustech.html"
    },
    {
        id: 8,
        title: "제1회 시민공원 불꽃축제, 모두 참가하셔서 행복한 추억 만드세요!!",
        time: "10:09",
        size: 5,
        from: "🔒seoulcity@goomail.com",
        link: "./mails/ads/seoulcity_fire.html"
    },

    {
        id: 9,
        title: "과거가 살아숨쉬는 순간, 도시속의 궁궐을 만나다.",
        time: "07:46",
        size: 5,
        from: "🔒seoulcity@goomail.com",
        link: "./mails/ads/seoulcity.html"

    },

    // 함정메일 10 ~ 19 총 10개
    {
        id: 10,
        title: "안녕하세요 선배님. 김상현입니다.",
        time: "19:12",
        size: 14,
        from: "tkdgus07@goomail.com",
        link: "./mails/personal/trap/trap1.html"
    },

    {
        id: 11,
        title: "[긴급] 귀하의 OneDrive 클라우드 계정이 48시간 후 영구 정지됩니다.",
        time: "01:56",
        size: 14,
        from: "Microhard_onedrive_securty@goomail.net",
        link: "./mails/personal/trap/trap2.html"
    },

    {
        id: 12,
        title: "[넥서스 테크놀러지] 하반기 공채",
        time: "14:03",
        size: 13,
        from: "recrutment@nexus.tech",
        link: "./mails/personal/trap/trap3.html"
    },

    {
        id: 13,
        title: "[명상대 총동문회] 2025년 동문 주소록 업데이트 및 경품 안내",
        time: "08:27",
        size: 17,
        from: "myangsanguniv@goomail.com",
        link: "./mails/personal/trap/trap4.html"
    },

    {
        id: 14,
        title: "[CZ한대택배] 고객님께 배송 예정인 물품의 주소지 정보가 불분명하여 배송이 지연되고 있습니다.",
        time: "11:52",
        size: 16,
        from: "czhandae@goomail.com",
        link: "./mails/personal/trap/trap5.html"
    },

    {
        id: 15,
        title: "[글로벌 채용] 경력 무관, 아시아 지역 진출 기회 포착! (취업 비자 지원)",
        time: "16:40",
        size: 14,
        from: "penn@goomail.com",
        link: "./mails/personal/trap/trap6.html"
    },

    {
        id: 16,
        title: "[긴급] 형사 사건 관련 피소 통지서",
        time: "13:09",
        size: 15,
        from: "seoolcity-youth@goomail.com",
        link: "./mails/personal/trap/trap7.html"
    },

    {
        id: 17,
        title: "[서울시] 2025년 청년 자립 지원금 50만원 지급 대상 확인 요청 건",
        time: "18:22",
        size: 16,
        from: "seoolcity-youth@goomail.com",
        link: "./mails/personal/trap/trap8.html"
    },

    {
        id: 18,
        title: "[국방부] 2025년도 예비군 소집 훈련 일정 변경 안내",
        time: "05:44",
        size: 17,
        from: "militaty@goomail.com",
        link: "./mails/personal/trap/trap9.html"
    },

    {
        id: 19,
        title: "집에서 돈 벌고 싶으신가요? 30분 투자로 즉시 수익 발생! (당일 지급)",
        time: "07:19",
        size: 18,
        from: "epgbglaemfek@goomail.com",
        link: "./mails/personal/trap/trap10.html"
    },
    // id : 20 ~ 29는 personal ethical
    {
        id: 20,
        title: "안녕하세요...",
        time: "16:23",
        size: 9,
        from: "commaeng@goomail.com",
        link: "./mails/personal/ethical/ethical1.html",
        effect: { fame: 2, money: 25 }
    },

    {
        id: 21,
        title: "안녕하쎼요 쏘씪 뜨ㄸ꼬 연띾뜨리ㅃ니따",
        time: "14:23",
        size: 10,
        from: "newcomer@goomail.com",
        link: "./mails/personal/ethical/ethical2.html",
        effect: { fame: 2, money: 25 }
    },

    {
        id: 22,
        title: "학생 내가 이력서를 또 받았는데…",
        time: "11:57",
        size: 12,
        from: "seoulpc@goomail.com",
        link: "./mails/personal/ethical/ethical7.html",
        effect: { fame: 2, money: 30 }
    },
    {
        id: 23,
        title: "안녕하세요 여쭤 볼게 있어서 연락드렸어요.",
        time: "17:08",
        size: 9,
        from: "junmin24@goomail.com",
        link: "./mails/personal/ethical/ethical8.html",
        effect: { fame: 2, money: 25 }
    },
    {
        id: 24,
        title: "https 사이트만 사용하면",
        time: "19:44",
        size: 11,
        from: "sodam24@goomail.com",
        link: "./mails/personal/ethical/ethical9.html",
        effect: { fame: 2, money: 25 }
    },
    {
        id: 25,
        title: "안녕하세요 컴퓨터가 갑자기 느려졌어요",
        time: "13:02",
        size: 13,
        from: "Seokgyu@goomail.com",
        link: "./mails/personal/ethical/ethical10.html",
        effect: { fame: 2, money: 25 }
    },
    {
        id: 26,
        title: "안녕하세요. Pc방 최사장님께 소개 받았읍니다.",
        time: "10:41",
        size: 12,
        from: "Eunbongchicken@goomail.com",
        link: "./mails/personal/ethical/ethical3.html",
        effect: { fame: 3, money: 30 }
    },
    {
        id: 27,
        title: "친구가 이상해요.",
        time: "16:55",
        size: 10,
        from: "kimmeditation@goomail.com",
        link: "./mails/personal/ethical/ethical4.html",
        effect: { fame: 2, money: 25 }
    },
    {
        id: 28,
        title: "안녕하세요 소개 듣고 왔습니다.",
        time: "20:12",
        size: 9,
        from: "celebmsh@goomail.com",
        link: "./mails/personal/ethical/ethical5.html",
        effect: { fame: 2, money: 25 }
    },
    {
        id: 29,
        title: "내가 이력서를 하나 받았는데",
        time: "15:36",
        size: 8,
        from: "PresidentBoo@goomail.com",
        link: "./mails/personal/ethical/ethical6.html",
        effect: { fame: 2, money: 30 }
    },
    // id : 30 ~ 39는 personal unethical
    {
        id: 30,
        title: "안녕하세요",
        time: "14:11",
        size: 10,
        from: "sumungpark1@goomail.com",
        link: "./mails/personal/unethical/unethical1.html",
        subtype: "unethical",
        effect: { fame: 3, money: 35 }
    },
    {
        id: 31,
        title: "개인적인 웹 사이트를 운영할 계획입니다.",
        time: "10:42",
        size: 9,
        from: "sumungpark1@goomail.com",
        link: "./mails/personal/unethical/unethical2.html",
        subtype: "unethical",
        effect: { fame: 3, money: 35 }
    },
    {
        id: 32,
        title: "안녕하세요.",
        time: "21:18",
        size: 13,
        from: "sumin24@goomail.com",
        link: "./mails/personal/unethical/unethical3.html",
        subtype: "unethical",
        effect: { fame: 3, money: 35 }
    },
    {
        id: 33,
        title: "의뢰문의",
        time: "17:55",
        size: 12,
        from: "jihunkim23@goomail.com",
        link: "./mails/personal/unethical/unethical4.html",
        subtype: "unethical",
        effect: { fame: 3, money: 35 }
    },
    {
        id: 34,
        title: "안녕하세요 의뢰 문의드립니다.",
        time: "13:29",
        size: 11,
        from: "godchangseop@goomail.com",
        link: "./mails/personal/unethical/unethical5.html",
        subtype: "unethical",
        effect: { fame: 3, money: 35 }
    },
    {
        id: 35,
        title: "안녕하세요 제가 지금 급해서요...",
        time: "20:47",
        size: 10,
        from: "sasaengfan@goomail.com",
        link: "./mails/personal/unethical/unethical6.html",
        subtype: "unethical",
        effect: { fame: 4, money: 40 }
    },
    {
        id: 36,
        title: "개인 휴대폰 복제가 가능한가요?",
        time: "11:03",
        size: 13,
        from: "sasaengfan@goomail.com",
        link: "./mails/personal/unethical/unethical7.html",
        subtype: "unethical",
        effect: { fame: 3, money: 40 }
    },
    {
        id: 37,
        title: "에타계정이 몇 개 필요합니다.",
        time: "16:15",
        size: 9,
        from: "everytime24@goomail.com",
        link: "./mails/personal/unethical/unethical8.html",
        subtype: "unethical",
        effect: { fame: 4, money: 40 }
    },
    {
        id: 38,
        title: "질문드립니다.",
        time: "18:40",
        size: 12,
        from: "wlrmarh3dla@goomail.com",
        link: "./mails/personal/unethical/unethical9.html",
        subtype: "unethical",
        effect: { fame: 4, money: 40 }
    },
    {
        id: 39,
        title: "작업 의뢰",
        time: "22:09",
        size: 11,
        from: "jihunkim23@goomail.com",
        link: "./mails/personal/unethical/unethical10.html",
        subtype: "unethical",
        effect: { fame: 3, money: 35 }
    },
    // id : 40~49 는 enterprise ethical
    {
        id: 40,
        title: "안녕하세요 명상대학교 행정실입니다",
        from: "myungsanguniv@goomail.com",
        time: "09:12",
        size: 11,
        link: "./mails/enterprise/ethical/ethical1.html",
        subtype: "ethical",
        effect: { fame: 10, money: 50 }
    },
    {
        id: 41,
        title: "안녕하세요 서울시 청년 취업 및 인식조사입니다.",
        from: "seoulcity@goomail.com",
        time: "10:24",
        size: 10,
        link: "./mails/enterprise/ethical/ethical2.html",
        subtype: "ethical",
        effect: { fame: 10, money: 50 }
    },
    {
        id: 42,
        title: "[정식 문의드립니다] 스타트업 모라미입니다.",
        from: "happydaewon22@goomail.com",
        time: "11:08",
        size: 12,
        link: "./mails/enterprise/ethical/ethical3.html",
        subtype: "ethical",
        effect: { fame: 15, money: 55 }
    },
    {
        id: 43,
        title: "[정식 문의드립니다] 스타트업 모라미입니다.",
        from: "happydaewon22@goomail.com",
        time: "11:52",
        size: 12,
        link: "./mails/enterprise/ethical/ethical4.html",
        subtype: "ethical",
        effect: { fame: 20, money: 60 }
    },
    {
        id: 44,
        title: "[정식 문의드립니다] 스타트업 모라미입니다.",
        from: "happydaewon22@goomail.com",
        time: "12:47",
        size: 13,
        link: "./mails/enterprise/ethical/ethical5.html",
        subtype: "ethical",
        effect: { fame: 15, money: 55 }
    },
    {
        id: 45,
        title: "[긴급 의뢰] [과목명] 기말고사 중 발생한 온라인 시험 부정행위 조사 요청",
        from: "moonsh@goomail.com",
        time: "13:30",
        size: 13,
        link: "./mails/enterprise/ethical/ethical6.html",
        subtype: "ethical",
        effect: { fame: 15, money: 60 }
    },
    {
        id: 46,
        title: "[긴급 의뢰] [과목명] 기말고사 중 발생한 온라인 시험 부정행위 조사 요청",
        from: "moonsh@goomail.com",
        time: "14:11",
        size: 13,
        link: "./mails/enterprise/ethical/ethical7.html",
        subtype: "ethical",
        effect: { fame: 15, money: 60 }
    },
    {
        id: 47,
        title: "[긴급 문의드립니다] 스타트업 모라미입니다.",
        from: "happydaewon22@goomail.com",
        time: "15:27",
        size: 10,
        link: "./mails/enterprise/ethical/ethical8.html",
        subtype: "ethical",
        effect: { fame: 10, money: 50 }
    },
    {
        id: 48,
        title: "[긴급 보안] 안녕하세요",
        from: "JykEntertainment@goomail.com",
        time: "15:55",
        size: 12,
        link: "./mails/enterprise/ethical/ethical9.html",
        subtype: "ethical",
        effect: { fame: 15, money: 60 }
    },
    {
        id: 49,
        title: "[긴급] 신규 오픈 쇼핑몰입니다.",
        from: "munsinsa@goomail.com",
        time: "16:40",
        size: 12,
        link: "./mails/enterprise/ethical/ethical10.html",
        subtype: "ethical",
        effect: { fame: 15, money: 60 }
    },
    // id : 50~59 는 enterprise unethical
    {
        id: 50,
        title: "[★극비] 캄보디아 기반 불법 도박 사이트 운영진 구인 광고 제작 및 유포 의뢰",
        from: "tkdgus07@goomail.com",
        time: "11:10",
        size: 12,
        link: "./mails/enterprise/unethical/unethical1.html",
        subtype: "unethical",
        effect: { fame: 20, money: 60 }
    },

    {
        id: 51,
        title: "[★극비] 경쟁사 고객 DB 일부 확보를 위한 시스템 침투 및 추출 의뢰",
        from: "dami@goomail.com",
        time: "12:02",
        size: 12,
        link: "./mails/enterprise/unethical/unethical2.html",
        subtype: "unethical",
        effect: { fame: 20, money: 60 }
    },

    {
        id: 52,
        title: "[★극비 요청] 유휴 컴퓨팅 자원 활용을 위한 '백그라운드 최적화' 작업 의뢰",
        from: "coinjoa@goomail.com",
        time: "12:44",
        size: 11,
        link: "./mails/enterprise/unethical/unethical3.html",
        subtype: "unethical",
        effect: { fame: 20, money: 60 }
    },

    {
        id: 53,
        title: "[★일급 기밀] 최근 발생한 고객 개인정보 유출 사고 작업 요청 건",
        from: "telecom1@goomail.com",
        time: "13:20",
        size: 13,
        link: "./mails/enterprise/unethical/unethical4.html",
        subtype: "unethical",
        effect: { fame: 20, money: 70 }
    },

    {
        id: 54,
        title: "[기밀] 경쟁사 '재무 회계 장부' 확보를 위한 시스템 침투 의뢰",
        from: "dami@goomail.com",
        time: "13:55",
        size: 12,
        link: "./mails/enterprise/unethical/unethical5.html",
        subtype: "unethical",
        effect: { fame: 15, money: 65 }
    },

    {
        id: 55,
        title: "[긴급/극비] 당사 관련 부정적 온라인 여론 조작 및 세탁 작업 의뢰",
        from: "kaosu0knight@goomail.com",
        time: "14:20",
        size: 12,
        link: "./mails/enterprise/unethical/unethical6.html",
        subtype: "unethical",
        effect: { fame: 20, money: 70 }
    },

    {
        id: 56,
        title: "고가 업무용 소프트웨어 '무제한 정품 키' 제작 또는 확보 의뢰",
        from: "GoodGoodCompany@goomail.com",
        time: "15:03",
        size: 12,
        link: "./mails/enterprise/unethical/unethical7.html",
        subtype: "unethical",
        effect: { fame: 20, money: 70 }
    },

    {
        id: 57,
        title: "새로운 고효율 피싱/사기 수법 개발 및 컨설팅 의뢰",
        from: "GoodGoodCompany@goomail.com",
        time: "16:12",
        size: 12,
        link: "./mails/enterprise/unethical/unethical8.html",
        subtype: "unethical",
        effect: { fame: 20, money: 60 }
    },

    {
        id: 58,
        title: "경쟁사 관련 부정적 여론 조성 및 훼손 작업 의뢰",
        from: "munsinsa@goomail.com",
        time: "16:40",
        size: 11,
        link: "./mails/enterprise/unethical/unethical9.html",
        subtype: "unethical",
        effect: { fame: 15, money: 60 }
    },

    {
        id: 59,
        title: "신용 등급이 낮은 사람들의 정보가 필요합니다.",
        from: "boysfishing@goomail.com",
        time: "17:20",
        size: 11,
        link: "./mails/enterprise/unethical/unethical10.html",
        subtype: "unethical",
        effect: { fame: 15, money: 60 }
    }
    ,
    // 엔딩에 따른 메일들 정리
    {
        id : 60,
        title : "[☆] Ending : Chapter02 | 저희 SIO-Security와 함께하게 되신 것을 축하드립니다.",
        from : "siosecurity@goomail.com",
        time : "07:23",
        link : "./mails/ending/ending_ethical.html",
    },
    {
        id : 61,
        title : "[☆] Ending : Chapter03 |귀하에게 발부된 고소장을 전달드립니다." ,
        from : "seoulbubwon@goomail.com",
        time : "13:28",
        link : "./mails/ending/ending_unethical.html"
    }
];