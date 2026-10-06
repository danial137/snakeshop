export const dictionaries = {
  en: {
    nav: { theme: "Toggle theme", lang: "Change language" },
    home: {
      heroBefore: "Your Image on a ",
      heroHighlight: "Custom",
      heroAfter: " Phone Case",
      introBefore: "Capture your favorite memories with your own ",
      introHighlight: "one-of-one",
      introAfter:
        " phone case. SnakeShop allow you to protect your memories,not just your phone case",
      features: [
        "High-quality,durable material",
        "5 year print guarentee",
        "Modern iphone models supported",
      ],
      count: "1.250",
      customers: "happy customers",
    },
  },
  fa: {
    nav: { theme: "تغییر تم", lang: "تغییر زبان" },
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
    },
  },
};

export type Locale = keyof typeof dictionaries;
