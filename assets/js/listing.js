document.addEventListener('DOMContentLoaded', () => {
    const listingContainer = document.getElementById('ipc-listing-container');
    const searchInput = document.getElementById('listing-search');
    const categoryFilter = document.getElementById('category-filter');
    const resultCount = document.getElementById('result-count');
    const paginationContainer = document.getElementById('pagination');

    let currentData = window.ipcData || []; // Fallback to empty
    const itemsPerPage = 6;
    let currentPage = 1;

    // Parse Query Params
    const urlParams = new URLSearchParams(window.location.search);
    const initialSearch = urlParams.get('search') || '';
    const initialCategory = urlParams.get('category') || '';

    // Set initial values
    if (searchInput) searchInput.value = initialSearch;
    if (categoryFilter) categoryFilter.value = initialCategory;

    function filterData() {
        const query = searchInput.value.toLowerCase();
        const category = categoryFilter.value;

        const filtered = window.ipcData.filter(item => {
            const matchesSearch = item.sectionNumber.toLowerCase().includes(query) ||
                item.title.toLowerCase().includes(query) ||
                item.meaning.toLowerCase().includes(query);
            const matchesCategory = category === '' || item.category === category;
            return matchesSearch && matchesCategory;
        });

        return filtered;
    }

    function renderCards(data) {
        listingContainer.innerHTML = '';
        const isHinglish = localStorage.getItem('legalsense_lang') === 'hinglish';

        if (data.length === 0) {
            listingContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-slate-500 text-lg">No sections found matching your criteria.</p>
                    <button id="clear-filters" class="mt-4 text-primary hover:underline">Clear Filters</button>
                </div>
            `;
            const clearBtn = document.getElementById('clear-filters');
            if (clearBtn) {
                clearBtn.addEventListener('click', () => {
                    searchInput.value = '';
                    categoryFilter.value = '';
                    updateView();
                });
            }
            return;
        }

        // Pagination Logic
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = data.slice(start, end);

        pageData.forEach(item => {
            const card = document.createElement('a');
            card.href = `detail.html?section=${item.sectionNumber}`;
            card.className = 'group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-slate-100 overflow-hidden hover:-translate-y-1';

            // Resolve Content based on Language
            const title = isHinglish ? (item.title_hinglish || item.title) : item.title;
            const meaning = isHinglish ? (item.meaning_hinglish || item.meaning) : item.meaning;
            const offenceNature = isHinglish ? (item.offenceNature_hinglish || item.offenceNature) : item.offenceNature;

            card.innerHTML = `
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Section ${item.sectionNumber}
                        </span>
                        <span class="text-xs text-slate-400">${item.chapter}</span>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 group-hover:text-primary mb-2 line-clamp-2">
                        ${title}
                    </h3>
                    <p class="text-sm text-slate-600 line-clamp-3 mb-4">
                        ${meaning}
                    </p>
                    <div class="flex items-center text-xs text-slate-500 mt-auto">
                        <span class="bg-slate-100 px-2 py-1 rounded capitalize truncate">
                            ${item.category}
                        </span>
                    </div>
                </div>
                <div class="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
                    <span class="text-xs font-medium text-slate-500 group-hover:text-blue-700">
                        ${isHinglish ? 'Vistar mein padhein' : 'Read Details'}
                    </span>
                    <i data-lucide="arrow-right" class="w-4 h-4 text-slate-400 group-hover:text-blue-600"></i>
                </div>
            `;
            listingContainer.appendChild(card);
        });

        // Re-initialize icons for new elements
        if (window.lucide) lucide.createIcons();
    }

    function renderPagination(totalItems) {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        if (totalPages <= 1) return;

        // Prev Button
        const prevBtn = document.createElement('button');
        prevBtn.innerText = 'Previous';
        prevBtn.className = `px-4 py-2 border border-slate-300 rounded-md text-sm font-medium ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-50'}`;
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateView();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        paginationContainer.appendChild(prevBtn);

        // Page info
        const span = document.createElement('span');
        span.innerText = `Page ${currentPage} of ${totalPages}`;
        span.className = 'text-sm text-slate-700';
        paginationContainer.appendChild(span);

        // Next Button
        const nextBtn = document.createElement('button');
        nextBtn.innerText = 'Next';
        nextBtn.className = `px-4 py-2 border border-slate-300 rounded-md text-sm font-medium ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-50'}`;
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                updateView();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    function updateView() {
        const filteredData = filterData();
        resultCount.innerText = `${filteredData.length} Result${filteredData.length !== 1 ? 's' : ''}`;
        renderCards(filteredData);
        renderPagination(filteredData.length);
    }

    // Event Listeners
    searchInput.addEventListener('input', () => {
        currentPage = 1;
        updateView();
    });

    categoryFilter.addEventListener('change', () => {
        currentPage = 1;
        updateView();
    });

    // Populate Categories in Filter
    const categories = [...new Set(window.ipcData.map(item => item.category))].sort();
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.innerText = cat;
        if (cat === initialCategory) option.selected = true;
        categoryFilter.appendChild(option);
    });

    // Initial Render
    updateView();
});
