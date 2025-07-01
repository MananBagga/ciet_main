
    document.querySelectorAll('.activity-btn').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.content-area').forEach(area => area.style.display = 'none');
        document.getElementById(button.getAttribute('data-content')).style.display = 'block';
      });
    });

    document.querySelectorAll('.pub-btn').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.pub-content').forEach(content => content.style.display = 'none');
        document.getElementById(button.getAttribute('data-content')).style.display = 'block';
      });
    });
 