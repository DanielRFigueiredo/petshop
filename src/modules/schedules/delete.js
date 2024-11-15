import { lists } from '../elements.js'
import { deleteById } from '../../services/delete-by-id.js'
import { schedulesLoad } from './load.js'


lists.forEach(list => {
  list.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-remove')) {

      if (confirm('Tem certeza que deseja excluir esse agendamento?')) {
        await deleteById(e.target.closest('li').id)
        schedulesLoad()
      }
    }
  })
})