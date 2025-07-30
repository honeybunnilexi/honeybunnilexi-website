// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Tip buttons for Ko-fi tipping
const tipButtons = document.querySelectorAll('.btn-tip');
tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const amount = button.getAttribute('data-tip');
    // Open Ko-fi tip link with preset amount
    const koFiUrl = `https://ko-fi.com/honeybunnilexi?amount=${amount}`;
    window.open(koFiUrl, '_blank');
  });
});

// Placeholder for Gumroad overlay integration
// This would be replaced with Gumroad's official overlay script and initialization
// Example:
// var gumroadOverlay = new GumroadOverlay();
// document.querySelectorAll('.gumroad-buy-button').forEach(button => {
//   button.addEventListener('click', () => {
//     gumroadOverlay.open(productId);
//   });
// });
