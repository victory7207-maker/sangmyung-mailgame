// [제공해야 될 모든 메일을 정리하는 database]
// id _ 1(개인) , 2(기업) , 3(광고)
const mailDB = [
    {
        id: 0,
        type: "personal",
        subtype : "normal",
        title: "친구에게 온 메일",
        time: "08:12",
        size: 21,
        from: "friend@mail.com",
        link: "index.html",
        effect: { fame: -5, karma: -3, pollution: 10 }
    },

    {
        id: 1,
        type: "ads",
        subtype : "trap",
        title: "초특가 할인!",
        time: "09:40",
        size: 14,
        from: "shop@market.com",
        link: "start.html",
        effect: { fame: -5, karma: -3, pollution: 10 }
    },

    {
        id: 2,
        type: "enterprise",
        subtype : "unethical",
        miniGame : true,
        title: "지원 요청 안내",
        time: "11:20",
        size: 34,
        from: "hr@company.com",
        link: "shop.html",
        effect: { fame: -5, karma: -3, pollution: 10 }
    },
    {
        id: 3,
        type: "ads",
        subtype : "trap",
        title: "킹정",
        time: "11:20",
        size: 34,
        from: "hr@company.com",
        link: "profile.html",
        effect: { fame: -5, karma: -3, pollution: 10 }
    }
];