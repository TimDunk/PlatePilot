//Join us form
document.getElementById('merchantForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Information submitted successfully! We will contact you soon.');
  this.reset();
});