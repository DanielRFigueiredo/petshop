import { apiConfig } from "./api-config";

export async function deleteById(id) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, { method: 'DELETE' })
    alert('Agendamento excluído com sucesso')
  } catch (error) {
    console.log(error)
    alert('Ocorreu um erro ao excluir o agendamento')
  }

}