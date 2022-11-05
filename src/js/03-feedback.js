import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textForm: document.querySelectorAll('.feedback-form__item'),
};

const STORAGE_KEY = 'feedback-form-state';
const savedText = localStorage.getItem(STORAGE_KEY);
const formData = JSON.parse(savedText) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

populateTextarea();

function onFormSubmit(evn) {
    evn.preventDefault();
    
    evn.target.reset();
    
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    console.log(saveMessage.email);
    console.log(saveMessage.message);


    if (saveMessage) {
        refs.textForm.email = saveMessage.email;
        refs.textForm.message = saveMessage.message;
    }
};