   
        function showContent(section) {
            const sections = ['training', 'archive', 'reports'];
            sections.forEach(s => {
                const content = document.getElementById(`${s}-content`);
                if (content) {
                    content.style.display = s === section ? 'block' : 'none';
                }
            });
        }
   