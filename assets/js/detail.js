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
        // Elements
        document.getElementById('section-number').innerText = `Section ${data.sectionNumber}`;
        document.getElementById('section-title').innerText = data.title;
        document.getElementById('section-chapter').innerText = `Chapter ${data.chapter}`;
        document.getElementById('section-category').innerText = data.category;

        document.getElementById('section-meaning').innerText = data.meaning;
        document.getElementById('section-example').innerText = data.example;
        document.getElementById('section-punishment').innerText = data.punishment;
        document.getElementById('section-nature').innerText = data.offenceNature;

        // Lists
        const applicabilityList = document.getElementById('section-applicability');
        data.applicability.forEach(item => {
            const li = document.createElement('li');
            li.className = 'flex items-start';
            li.innerHTML = `
                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"></i>
                <span class="text-slate-700">${item}</span>
            `;
            applicabilityList.appendChild(li);
        });

        const relatedList = document.getElementById('section-related');
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

        // Initialize icons
        if (window.lucide) lucide.createIcons();
    }
});
