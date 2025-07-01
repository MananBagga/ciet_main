   
        function showContent(section) {
            const sections = ['audio-content', 'video-content'];
            sections.forEach(s => {
                const content = document.getElementById(s);
                if (content) {
                    content.style.display = s === section ? 'block' : 'none';
                }
            });
        }
        // Show audio-content by default on page load
        window.onload = function() {
            showContent('audio-content');
        };
   