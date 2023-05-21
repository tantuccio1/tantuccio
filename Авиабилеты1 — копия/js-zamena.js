document.addEventListener('DOMContentLoaded', function() {

  const favoriteButtons = document.querySelectorAll('.test-4-favorite');

  favoriteButtons.forEach(function(button) {
    const favoriteIcon = button.querySelector('.favorite-icon');

    button.addEventListener('click', function() {
      if (favoriteIcon.classList.contains('active')) {
        favoriteIcon.classList.remove('active');
        favoriteIcon.src = 'media/free-icon-bookmark-3983871.png';
      } else {
        favoriteIcon.classList.add('active');
        favoriteIcon.src = 'media/free-icon-bookmark-filled-3983875.png';
      }
    });
  });
});