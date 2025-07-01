
        function showContent(section) {
            const sections = ['tv-studios-content', 'sound-studios-content', 'live-studio-content', 'vidya-samiksha-content', 'experiential-learning-content', 'post-production-content', 'ict-lab-content', 'vr-lab-content', 'video-server-content', 'dth-channels-content'];
            sections.forEach(s => {
                const content = document.getElementById(s);
                if (content) {
                    content.style.display = s === section ? 'block' : 'none';
                }
            });
        }
        // Show tv-studios-content by default on page load
        window.onload = function() {
            showContent('tv-studios-content');
        };
   