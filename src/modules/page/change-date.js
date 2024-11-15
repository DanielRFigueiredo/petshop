import { inputDateSearch } from "../elements";
import { schedulesLoad } from '../schedules/load.js'

inputDateSearch.addEventListener("change", async (event) => {
  schedulesLoad()
});