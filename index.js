import { DateTime } from './modules/luxon.js';
import Books from './modules/book.js';

const books = new Books();
const form = document.getElementById('form');
form.addEventListener('submit', () => {
  books.addBook();
});

function updateClock() {
  const dateElement = document.getElementById('date');
  dateElement.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
setInterval(updateClock, 1000);
