import { apiConfig } from './api-config.js'


export async function fetchByData({ data }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`).then(response => response.json())
    const dataFiltered = response.filter(schedule => schedule.dateNew === data)
    return dataFiltered

  } catch (error) {
    console.log(error)
  }


}