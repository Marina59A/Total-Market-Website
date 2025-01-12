document.getElementById("languageSwitcher").addEventListener("change", function () {
    const selectedLanguage = this.value;

    if (selectedLanguage === "ar") {
        document.documentElement.lang = "ar";
        document.body.dir = "rtl"; // تحويل الاتجاه إلى اليمين
        translateToArabic();
    } else {
        document.documentElement.lang = "en";
        document.body.dir = "ltr"; // الاتجاه الافتراضي
        translateToEnglish();
    }
});
    
    function translateToArabic() {
        // ترجمة النصوص الأساسية
        document.querySelector(".header .search-bar input").placeholder = "ابحث باستخدام الكلمة المفتاحية أو المنتج";
        document.querySelector(".header .login a").textContent = "تسجيل الدخول / إنشاء حساب";
        document.querySelector(".nav ul li:nth-child(1) a").textContent = "الصفحة الرئيسية";
        document.querySelector(".nav ul li:nth-child(2) a").textContent = "المجوهرات";
        document.querySelector(".nav ul li:nth-child(3) a").textContent = "الملابس";
        document.querySelector(".nav ul li:nth-child(4) a").textContent = "الإلكترونيات";
        document.querySelector(".products-section h2").textContent = "منتجاتنا";
    
        // ترجمة الفوتر
        document.querySelector(".footer-section p:nth-child(2)").textContent = "ليست مجرد متجر للهواتف";
        document.querySelector(".footer-section h4").textContent = "حسابي";
        document.querySelector(".footer-bottom p").textContent = "حقوق الطبع والنشر © 2024 جميع الحقوق محفوظة.";
    }
    
    function translateToEnglish() {
        // ترجمة النصوص الأساسية
        document.querySelector(".header .search-bar input").placeholder = "Search With Keyword or Item";
        document.querySelector(".header .login a").textContent = "Login / Sign up";
        document.querySelector(".nav ul li:nth-child(1) a").textContent = "Home";
        document.querySelector(".nav ul li:nth-child(2) a").textContent = "Jewelry";
        document.querySelector(".nav ul li:nth-child(3) a").textContent = "Clothes";
        document.querySelector(".nav ul li:nth-child(4) a").textContent = "Electronics";
        document.querySelector(".products-section h2").textContent = "Our Products";
    
    
        // ترجمة الفوتر
        document.querySelector(".footer-section p:nth-child(2)").textContent = "Not Just A Mobile Shop";
        document.querySelector(".footer-section h4").textContent = "My Account";
        document.querySelector(".footer-bottom p").textContent = "COPYRIGHT © 2024 TOTAL MARKET. ALL RIGHTS RESERVED.";
    }
    