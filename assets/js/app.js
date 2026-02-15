document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Disclaimer Acceptance Logic (if on relevant pages)
    const disclaimerKey = 'legalsense_disclaimer_accepted';
    const disclaimerBanner = document.getElementById('disclaimer-banner');

    // Check if user has already accepted disclaimer
    if (!localStorage.getItem(disclaimerKey) && disclaimerBanner) {
        disclaimerBanner.classList.remove('hidden');
    }

    const acceptBtn = document.getElementById('accept-disclaimer');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem(disclaimerKey, 'true');
            if (disclaimerBanner) disclaimerBanner.classList.add('hidden');
        });
    }

    // Global Search Bar Logic (Redirect to Listing)
    const searchForm = document.getElementById('global-search-form');
    const searchInput = document.getElementById('global-search-input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                // Redirect to listing page with query
                window.location.href = `listing.html?search=${encodeURIComponent(query)}`;
            }
        });
    }

    // --- Hinglish Toggle Logic ---
    const langBtn = document.getElementById('lang-toggle');
    const currentLang = localStorage.getItem('legalsense_lang') || 'en';

    if (langBtn) {
        // Set initial button text
        langBtn.textContent = currentLang === 'en' ? '🇮🇳 Switch to Hinglish' : '🇺🇸 Switch to English';

        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'en' ? 'hinglish' : 'en';
            localStorage.setItem('legalsense_lang', newLang);

            // Show loading state
            langBtn.textContent = 'Switching...';

            // Reload to apply changes
            window.location.reload();
        });
    }
});

