import * as el from '../elements.js'

export function schedulesShow({ schedule }) {
  el.morningAppointments.innerHTML = ''
  el.afternoonAppointments.innerHTML = ''
  el.nightAppointments.innerHTML = ''



  if (schedule.length > 0) {
    schedule.forEach(s => {
      const li = document.createElement('li')
      li.setAttribute('id', s.id)

      const div = document.createElement('div')
      div.innerHTML = `
        <span class="hour">${s.time}</span>
        <span class="data"><strong class="pet">${s.petName}</strong> <span class="owner">/ ${s.userName}</span></span>
      `
      const span = document.createElement('span')
      span.textContent = s.description

      const button = document.createElement('button')
      button.textContent = 'Remover agendamento'
      button.classList.add('btn-remove')

      li.append(div, span, button)

      const [hour] = s.time.split(':')

      if (hour <= 12) {
        el.morningAppointments.appendChild(li)
      } else if (hour <= 18) {
        el.afternoonAppointments.appendChild(li)
      } else if (hour > 18 && hour < 21) {
        el.nightAppointments.appendChild(li)
      }

    })



  }

}