import { inputDateSearch } from '../elements.js'
import { fetchByData } from '../../services/fetch-by-data.js'
import { schedulesShow } from './show.js'

export async function schedulesLoad() {
  const data = inputDateSearch.value

  const dataFiltered = await fetchByData({ data })

  schedulesShow({ schedule: dataFiltered })
}