document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Mark step 1 as done, step 2 as active
  document.getElementById('step-ind-1').classList.remove('active');
  document.getElementById('step-ind-1').classList.add('done');
  document.getElementById('step-ind-2').classList.add('active');

  // Transition panels
  document.getElementById('form-step-1').style.display = 'none';
  var step2 = document.getElementById('form-step-2');
  step2.style.display = 'block';

  // Expand container width for the calendar
  document.getElementById('contact-inner').classList.add('is-booking');

  // Inject Calendly iframe
  var embed = document.getElementById('calendly-embed');
  var iframe = document.createElement('iframe');
  iframe.src = 'https://calendly.com/d-hilburn-localsearchmasters/lsm-paid-media-appointment?embed_domain=' + location.hostname + '&embed_type=Inline';
  iframe.title = 'Book a meeting with LSM';
  embed.appendChild(iframe);

  // Scroll to the section
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
