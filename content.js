import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
      jsConfetti.addConfetti();
    }
  });
});
