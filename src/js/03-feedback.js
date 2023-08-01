import _throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('form');
formRef.addEventListener('input', _throttle(updateinput, 500));
formRef.addEventListener('submit', onFormSubmit);

let userData = {};

function updateinput(evt) {
  const target = evt.target;
  const formValue = target.value;
  const formName = target.name;
  userData[formName] = formValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('All fields must be filled');
  }
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
  console.log(userData);
  userData = {};
}

const checkedData = localStorage.getItem(STORAGE_KEY);
if (checkedData) {
  const data = JSON.parse(checkedData);
  console.dir(data);
  for (let key in data) {
    formRef.elements[key].value = data[key];
    userData[key] = data[key];
  }
}
