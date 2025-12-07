const cards = document.querySelectorAll('.card');
const resources = document.querySelectorAll('.resource-card');

//card animation
cards.forEach(card => {
card.addEventListener('mouseenter', () => {
card.style.transform = 'translateY(-8px) scale(1.03)';
});
card.addEventListener('mouseleave', () => {
card.style.transform = 'translateY(0) scale(1)';
});
});

//resources animation
resources.forEach(res => {
res.addEventListener('mouseenter', () => {
res.style.transform = 'translateY(-8px)';
});
res.addEventListener('mouseleave', () => {
res.style.transform = 'translateY(0)';
});
});


// search bar animation
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('focus', () => {
searchBar.style.boxShadow = '0 0 18px rgba(255,255,255,0.4)';
});
searchBar.addEventListener('blur', () => {
searchBar.style.boxShadow = '0 4px 18px rgba(0,0,0,0.2)';
});


// click animations for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
btn.addEventListener('click', () => {
btn.style.transform = 'scale(0.95)';
setTimeout(() => btn.style.transform = 'scale(1)', 150);
});
}); 

