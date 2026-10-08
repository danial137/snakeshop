export const dictionaries = {
  en: {
    nav: {
      theme: "Toggle theme",
      lang: "Change language",
      login: "Log in",
      signUp: "Sign up",
      signOut: "Sign Out",
      case: "Ceate Case",
    },
    home: {
      heroBefore: "Your Image on a ",
      heroHighlight: "Custom",
      heroAfter: " Phone Case",
      introBefore: "Capture your favorite memories with your own ",
      introHighlight: "one-of-one",
      introAfter:
        " phone case. SnakeShop allows you to protect your memories, not just your phone case",
      features: [
        "High-quality, durable material",
        "5 year print guarantee",
        "Modern iPhone models supported",
      ],
      count: "1.250",
      customers: "happy customers",
      reviews: {
        titleBefore: "What Our ",
        titleHighlight: "customers",
        titleAfter: " say",
        review1Before:
          '"The case study is a great example of how to use the product. It shows how to use the product in a real-world scenario and how to get the most out of it. The case study is ',
        review1Highlight: "the image is super clear",
        review1After:
          ', on the case I had before,the image started fading into yellow-ish color after a couple week love it "',
        user1: "Jonathan",
      },
    },
  },

  fa: {
    nav: {
      theme: "تغییر تم",
      lang: "تغییر زبان",
      login: "ورود",
      signUp: "ثبت‌ نام",
      signOut: "خروج",
      case: "ساخت مدل",
    },
    home: {
      heroBefore: "عکس خودتو بنداز رو یه قاب گوشیِ ",
      heroHighlight: "اختصاصی",
      heroAfter: "",
      introBefore: "خاطره‌های قشنگت رو روی یه قاب گوشیِ ",
      introHighlight: "فقط مال خودت",
      introAfter:
        " ثبت کن. تو SnakeShop فقط از گوشیت محافظت نمی‌کنیم، از خاطره‌هات هم مراقبت می‌کنیم",
      features: [
        "جنس باکیفیت و بادوام",
        "۵ سال گارانتی چاپ",
        "پشتیبانی از آیفون‌های جدید",
      ],
      count: "۱٬۲۵۰",
      customers: "مشتری راضی",
      reviews: {
        titleBefore: "",
        titleHighlight: "مشتری‌هامون",
        titleAfter: " چی می‌گن",
        review1Before:
          "«این نمونه‌کار یه مثال خیلی خوبه از اینکه چطوری باید از محصول استفاده کرد. نشون می‌ده تو دنیای واقعی چطور کار می‌کنه و چطور می‌شه بیشترین بهره رو ازش برد. ",
        review1Highlight: "کیفیت عکس فوق‌العاده شفافه",
        review1After:
          "؛ رو قاب قبلیم عکس بعد از چند هفته به زردی می‌زد. عاشقشم»",
        user1: "جاناتان",
      },
    },
  },
};

export type Locale = keyof typeof dictionaries;
