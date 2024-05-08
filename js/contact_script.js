document.querySelector('#contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    const inputFields = document.querySelectorAll('#contact-form div input');
    Array.from(inputFields).forEach(item => item.value = '');
    document.querySelector('#contact-form textarea').value = '';
    alert('Thank you, your form has been submitted!');
})