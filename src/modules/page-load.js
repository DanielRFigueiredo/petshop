import { inputDateSearch, dateNew, time } from "./elements";
import { schedulesLoad } from './schedules/load.js'
import dayjs from "dayjs";


window.addEventListener('DOMContentLoaded', () => {
  const currentDate = dayjs(new Date()).format("YYYY-MM-DD");
  const currentTime = dayjs(new Date()).format("HH:mm");
  inputDateSearch.value = currentDate;
  inputDateSearch.min = currentDate;
  dateNew.value = currentDate;
  dateNew.min = currentDate;
  time.value = currentTime;

  schedulesLoad()
})