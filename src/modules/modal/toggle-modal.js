import { btnNew, modal } from './elements.js'

btnNew.onclick = (event) => {
  modal.classList.toggle('hidden')
  event.target.classList.add('hidden')
}

modal.onclick = (event) => {
  if (event.target.classList.contains('modal')) {
    closeModal()
  }
  return
}

export function closeModal() {
  modal.classList.add('hidden')
  btnNew.classList.remove('hidden')
}