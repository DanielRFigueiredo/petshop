import { apiConfig } from './api-config.js'


export async function scheduleNew(data) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    alert('Agendamento realizado com sucesso')
  } catch (error) {
    console.log(error)
    alert('não foi posivel agendar')
  }
}