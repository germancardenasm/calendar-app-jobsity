export function reminderAction(action, remainderInfo) {
  const actionToSend = {};
  actionToSend.remainder = { ...remainderInfo };
  switch (action) {
    default:
    case "SAVE_REMAINDER":
      actionToSend.type = "SAVE_REMAINDER";
      actionToSend.remainder.id = Date.parse(
        new Date(remainderInfo.date + "T" + remainderInfo.time)
      );
      break;

    case "EDIT_REMAINDER":
      actionToSend.type = "EDIT_REMAINDER";
      break;
  }

  return actionToSend;
}

export function getDefaultReminder() {
  return {
    id: "",
    title: "",
    date: "2019-07-01",
    time: "08:00",
    color: "#FFFFFF",
    city: "Medellín",
    country: "Colombia",
    weather: "",
    weatherIcon: "",
    dataReserved: false
  };
}
