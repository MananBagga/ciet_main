
        function showContent(section) {
            const sections = ['ijet-content', 'newsletter-content', 'aiceavf-content', 'pm-evidya-content', 'library-content', 'exposure-content'];
            sections.forEach(s => {
                const content = document.getElementById(s);
                if (content) {
                    content.style.display = s === section ? 'block' : 'none';
                }
            });
        }
        // Show ijet-content by default on page load
        window.onload = function() {
            showContent('ijet-content');
        };
