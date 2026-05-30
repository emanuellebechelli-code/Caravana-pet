const nextScheduleDate = null;

const scheduleMessage = document.querySelector("#schedule-message");

if (nextScheduleDate) {
  scheduleMessage.textContent = `Próximo agendamento: ${nextScheduleDate}`;
}
