// Bootstrap form驗證
// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      },
      false
    )
  })
})()

//remove modal 傳入 header商品名稱 參數
const removeModal = document.querySelector('#removeModal')
removeModal.addEventListener('show.bs.modal', function (e) {
  const button = e.relatedTarget
  const title = button.dataset.title
  document.querySelector('#exampleModalLabel').textContent = `確定刪除 ${title} ?`
  document.querySelector('.modal-body').textContent = '是否確認刪除' + title + '?'
})
