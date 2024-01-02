import emailjs from '@emailjs/browser';
function SendEmailForm() {
  function sendEmail() {
    (function () {
      emailjs.init('Bgch-lIjgzMnzHw7s');
    })();
    var params = {
      email_id: document.querySelector('.subscribe__input').value,
    };
    emailjs.send('service_gnk14as', 'template_7o3o79r', params).then((res) => {
      alert('You are subcribed to our newsletter');
    });
  }
  // Відправка форми
  document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.subscribe__form');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Це для того, щоб форма не відправлялась звичайним способом

      sendEmail(); // Виклик функції sendEmail
    });
  });
}

export default SendEmailForm;
