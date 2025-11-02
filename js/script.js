document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================================
    // 1. INISIALISASI AOS (Animate On Scroll)
    // ===================================================
    AOS.init({
        offset: 200,      
        duration: 1000,   
        easing: 'ease-out', 
        once: true        
    });

    // ===================================================
    // 2. INISIALISASI SWIPER (Slideshow)
    // ===================================================
    
    // Parameter dasar untuk semua Swiper
    const swiperParams = {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
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
             delay: 4500,
             disableOnInteraction: false,
        },
    };

    // Daftar ID Swiper
    const periodSlugs = [
        'pembukaan', 'pusdikkes', 'klasikal', 'kelas_besar', 
        'main_olahraga', 'gathering_bandung', 'foto_lppi', 'makrab'
    ];

    // Lakukan inisialisasi untuk setiap Swiper
    periodSlugs.forEach(slug => {
        const swiperClass = `.swiper-${slug}`;
        if (document.querySelector(swiperClass)) {
             new Swiper(swiperClass, swiperParams);
        }
    });


    // ===================================================
    // 3. FUNGSI KONTROL MUSIK
    // ===================================================

    const backgroundMusic = document.getElementById('background-music');
    const musicToggleButton = document.querySelector('.music-toggle-btn');
    const openButton = document.querySelector('.cta-button'); 

    // Fungsi untuk Play/Pause (dipakai oleh tombol di header)
    function toggleMusic() {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggleButton.textContent = '⏸️ Pause'; // Update UI
      } else {
        backgroundMusic.pause();
        musicToggleButton.textContent = '▶️ Play'; // Update UI
      }
    }

    // Pasang fungsi toggleMusic ke tombol Play/Pause di header
    if (musicToggleButton) {
        musicToggleButton.addEventListener('click', toggleMusic);
        // Atur teks tombol awal
        musicToggleButton.textContent = '▶️ Play'; 
    }

    // Pemicu Utama: Tombol "Open The Book"
    if (openButton) {
      openButton.addEventListener('click', () => {
        // Cek apakah musik belum berputar
        if (backgroundMusic.paused) {
            // Putar musik (Ini diizinkan karena merupakan klik pertama user)
            backgroundMusic.play();
            // Update tombol Play/Pause di header
            musicToggleButton.textContent = '⏸️ Pause';
        }
        // Fungsi default link (scroll ke #pembukaan) tetap berjalan
      });
    }

});;
