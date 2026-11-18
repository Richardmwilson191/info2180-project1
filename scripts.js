document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.newsletter form')
  const emailInput = document.querySelector('#email')
  const message = document.querySelector('.message')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const emailAddress = emailInput.value.trim()

    if (emailAddress === '' || !emailInput.checkValidity()) {
      message.textContent = 'Please enter a valid email address.'
    } else {
      message.textContent = `Thank you! Your email address ${emailAddress} has been added to our mailing list!`
    }
  })
})
