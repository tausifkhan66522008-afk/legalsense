document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const sectionId = params.get('section');
    const container = document.getElementById('detail-container');
    const notFoundContainer = document.getElementById('not-found');

    if (!sectionId) {
        showNotFound();
        return;
    }

    // Find section in data
    const section = window.ipcData.find(item => item.sectionNumber === sectionId);

    if (!section) {
        showNotFound();
        return;
    }

    renderDetail(section);

    function showNotFound() {
        if (container) container.classList.add('hidden');
        if (notFoundContainer) notFoundContainer.classList.remove('hidden');
    }

    function renderDetail(data) {
        const isHinglish = localStorage.getItem('legalsense_lang') === 'hinglish';

        // Helper to get correct text
        const getTxt = (key) => isHinglish ? (data[`${key}_hinglish`] || data[key]) : data[key];

        // Elements
        document.getElementById('section-number').innerText = `Section ${data.sectionNumber}`;
        document.getElementById('section-title').innerText = getTxt('title');
        document.getElementById('section-chapter').innerText = `Chapter ${data.chapter}`;
        document.getElementById('section-category').innerText = data.category;

        document.getElementById('section-meaning').innerText = getTxt('meaning');
        document.getElementById('section-example').innerText = getTxt('example');
        document.getElementById('section-punishment').innerText = getTxt('punishment');
        document.getElementById('section-nature').innerText = getTxt('offenceNature');

        // Lists (Applicability)
        const applicabilityList = document.getElementById('section-applicability');
        applicabilityList.innerHTML = ''; // Clear prev content
        const items = isHinglish ? (data.applicability_hinglish || data.applicability) : data.applicability;

        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'flex items-start';
            li.innerHTML = `
                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"></i>
                <span class="text-slate-700">${item}</span>
            `;
            applicabilityList.appendChild(li);
        });

        const relatedList = document.getElementById('section-related');
        relatedList.innerHTML = ''; // Clear prev content
        if (data.relatedSections && data.relatedSections.length > 0) {
            data.relatedSections.forEach(rel => {
                const a = document.createElement('a');
                a.href = `detail.html?section=${rel}`;
                a.className = 'inline-flex items-center px-3 py-1 rounded-full border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 mr-2 mb-2 transition-colors';
                a.innerText = `Section ${rel}`;
                relatedList.appendChild(a);
            });
        } else {
            relatedList.innerHTML = '<span class="text-slate-500 italic">No related sections linked.</span>';
        }

        // Translate Titles if Hinglish
        if (isHinglish) {
            // Update static headers in the detail view
            const titles = {
                'Simplified Meaning': 'Saral Arth (Meaning)',
                'When It Applies': 'Kab Laagu Hota Hai',
                'Real-life Example': 'Asli Zindagi ka Udaharan',
                'Punishment': 'Saza',
                'Nature of Offence': 'Apradh ki Prakriti',
                'Related Sections': 'Sambandhit Dharaein',
                'Disclaimer': 'Aswikaran'
            };

            // This is a bit hacky to find elements by text, but for now we haven't added IDs to H3s.
            // A better way is to target the H3s inside sections.
            const headers = document.querySelectorAll('h3');
            headers.forEach(h3 => {
                const text = h3.innerText.trim();
                for (const [key, val] of Object.entries(titles)) {
                    if (text.includes(key)) {
                        // Keep the icon if present (it's inside the h3 but cleaner to just update text node if possible)
                        // But innerHTML replacement is safer to preserve structure if we reconstruct it
                        // Let's just replace the text node part.
                        const icon = h3.querySelector('i');
                        if (icon) {
                            h3.innerHTML = '';
                            h3.appendChild(icon);
                            h3.appendChild(document.createTextNode(' ' + val));
                        } else {
                            h3.innerText = val;
                        }
                    }
                }
            });
        }

        // Initialize icons
        if (window.lucide) lucide.createIcons();
    }
});

