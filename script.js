document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
});
