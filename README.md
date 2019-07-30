# Reminder App challenge for Jobsity

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Coded by Germán Cárdenas M

## Installation

Clone this repository to your local host

```bash
git clone https://github.com/germancardenasm/calendar-app-jobsity.git
```

cd into the directory just created and install npm dependencies

```bash
cd calendar-app-jobsity
npm install
```

## Run app

In the project directory run the app in the live server running:

```bash
npm start
```

If the browser does not open automatically, please open manually at this URL [http://localhost:3000](http://localhost:3000).

### Mandatory Features Achieved

- Ability to add a new "reminder" (max 30 chars) for a user entered day and time.
- Include a city.
- Display reminders on the calendar view in the correct time order.
- Allow the user to select color when creating a reminder and display it appropriately.
- Ability to edit reminders – including changing text, city, day, time and color.
- Add a weather service call from a free API such as ​Open Weather Map​, and get the
  weather forecast (ex. Rain) for the date of the calendar reminder based on the city.  
   **NOTE:** _The API Openweather free tier only allow to fetch information of the following 5 days. For this challenge the app fetch the weather information in this mode and uses a random number to get weather from the list returned to show weather prediction at the remainder form to display the functionality._
- Unit test the functionality: ​Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.

### Bonus Features Achieved

- Functionality to delete one reminder.

### Bonus Features NOT Achieved

Due to restriction in time, the following Bonus features were not implemented.

- Expand the calendar to support more than the current month.
- Properly handle overflow when multiple reminders appear on the same date.

## Test App

Launches the test runner in the interactive watch mode.

```bash
npm test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
