
        const pages = document.querySelectorAll('.activities-grid');
        const pageButtons = document.querySelectorAll('.page-btn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentPage = 1;

        function showPage(page) {
            pages.forEach(grid => {
                grid.style.display = grid.getAttribute('data-page') == page ? 'grid' : 'none';
            });
            pageButtons.forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-page') == page);
            });
            currentPage = page;
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage === pages.length;
        }

        pageButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = parseInt(btn.getAttribute('data-page'));
                showPage(page);
            });
        });

        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                showPage(currentPage - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentPage < pages.length) {
                showPage(currentPage + 1);
            }
        });

        showPage(1);
   