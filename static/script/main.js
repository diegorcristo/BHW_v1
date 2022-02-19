const inputsContent = document.querySelectorAll('.input-content')


inputsContent.forEach(inputContent => {
  const input = inputContent.querySelector('input')
  const label = inputContent.querySelector('label')

  input.addEventListener('focus', () => {
    label.classList.add('active')
  })

  input.addEventListener('blur', () => {
    if (input.value.trim()) {
      label.classList.add('active')
    }
    else {
      label.classList.remove('active')
    }
  })

  // if (input.type === 'password') {
  //   const btn = inputContent.querySelector('.btn-action')
  //   btn.addEventListener('click', () => {
  //     input.type = 'text'
  //   })
  // }
});
