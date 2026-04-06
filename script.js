

// تأثير ظهور العناصر عند التمرير (Scroll Reveal)
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.container-text', {});
sr.reveal('.hero-img', { delay: 400 });
sr.reveal('.about-img', { delay: 200 });
sr.reveal('.skill-card', { interval: 200 });
//  var typed = new Typed(".typing", {
//     strings: ["مطور ويب", "مبرمج بايثون", "مصمم واجهات"], // اكتب التخصصات التي تحبها هنا
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// });
var typed = new Typed(".typing", {
    strings: [
        "أبني مواقع سريعة وعصرية",
        "أحول أفكارك إلى واقع رقمي",
        "متخصص في حلول الويب المبتكرة",
        "تصميم واجهات تجذب الزوار"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});