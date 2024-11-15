import { form, userName, petName, phone, description, dateNew, time } from "../elements";
import { scheduleNew } from "../../services/schedule-new";
import dayjs from "dayjs";


form.onsubmit = async (event) => {
  event.preventDefault()
  const data = {
    userName: userName.value,
    petName: petName.value,
    phone: phone.value,
    description: description.value,
    dateNew: dateNew.value,
    time: time.value
  }
  try {
    await scheduleNew(data)
    userName.value = ''
    petName.value = ''
    phone.value = ''
    description.value = ''
    dateNew.value = dayjs(new Date()).format("YYYY-MM-DD");
    time.value = dayjs(new Date()).format("HH:mm");

  } catch (error) {
    console.log(error)

  }

}