document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INISIALISASI AOS (Animate On Scroll)
    // Mengaktifkan efek visual saat user scroll ke elemen baru.
    AOS.init({
        offset: 200,      // Jarak (dalam px) dari bottom of viewport untuk mulai animasi
        duration: 1000,   // Durasi animasi (ms)
        easing: 'ease-out', // Kurva easing
        once: true        // Hanya jalankan animasi sekali per elemen
    });

    // 2. INISIALISASI SWIPER UNTUK SEMUA 8 PERIODE
    
    // Parameter dasar untuk semua Swiper
    const swiperParams = {
        direction: 'horizontal',
        loop: true, // Loop agar slide berputar tak terbatas
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade', // Transisi fade yang elegan
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
             delay: 4500, // Ganti slide setiap 4.5 detik
             disableOnInteraction: false, // Lanjutkan autoplay setelah interaksi manual
        },
    };

    // Daftar ID Swiper (Class di HTML: swiper-NAMA) berdasarkan nama folder/periode Anda
    const periodSlugs = [
        'pembukaan', 
        'pusdikkes', 
        'klasikal', 
        'kelas_besar', 
        'main_olahraga', 
        'gathering_bandung', 
        'foto_lppi', 
        'makrab'
    ];

    // Lakukan inisialisasi untuk setiap Swiper
    periodSlugs.forEach(slug => {
        const swiperClass = `.swiper-${slug}`;
        // Pastikan elemen Swiper ada di halaman sebelum diinisialisasi
        if (document.querySelector(swiperClass)) {
             new Swiper(swiperClass, swiperParams);
        }
    });

});