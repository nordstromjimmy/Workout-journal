const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector('.days');

  // Gets the last date of current month
  const lastDay = new Date(
    date.getFullYear(), 
    date.getMonth() + 1,
    0
    ).getDate();

  // Gets the last date of previous month
  const prevLastDay = new Date(
    date.getFullYear(), 
    date.getMonth(), 
    0
    ).getDate();

  // Gets the index (0-6) of current month
  const lastDayIndex = new Date(
    date.getFullYear(), 
    date.getMonth() + 1, 
    0
    ).getDay();

  const firstDayIndex = date.getDay();
  const nextDays = 7 + lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector('.date h1').innerHTML = months[date.getMonth()];
  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = "";

  // Render the last days of previous month
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  // Render the dates in the calender
  for (let i = 1; i <= lastDay; i++ ) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  // Render the first days of next month
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
