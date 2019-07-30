import { reminderAction, getDefaultReminder } from "./actions";

it("renders without crashing", () => {
  const changedReminder = getDefaultReminder();
  changedReminder.title = "tested reminder";

  const expectedReminder = {
    remainder: {
      title: "tested reminder"
    },
    type: "SAVE_REMAINDER"
  };
  expect(reminderAction("add", changedReminder)).toMatchObject(
    expectedReminder
  );
});
