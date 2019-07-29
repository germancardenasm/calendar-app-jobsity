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
  console.log(changedReminder);
  expect(reminderAction("add", changedReminder)).toEqual(
    expect.objectContaining(expectedReminder)
  );
});
