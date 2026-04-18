//Join us form
document.getElementById('merchantForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.setAttribute('aria-label', 'Information submitted successfully! We will contact you soon.');
  submitBtn.setAttribute('aria-live', 'polite'); 
  
  alert('Information submitted successfully! We will contact you soon.');
  this.reset();
  
  
  setTimeout(() => {
    submitBtn.removeAttribute('aria-label');
    submitBtn.removeAttribute('aria-live');
  }, 3000);
});


window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && window.alert) {
    window.alert = null; 
  }
});