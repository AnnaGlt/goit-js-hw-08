import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textForm: document.querySelectorAll('.feedback-form__item'),
};

const STORAGE_KEY = 'feedback-form-state';
const savedText = localStorage.getItem(STORAGE_KEY);
const formData = JSON.parse(savedText) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput), 500);

function onFormInput(e) {
    formData[e.target.name] = e.target.volue;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

populateTextarea();

function onFormSubmit(evn) {
    evn.preventDefault();
    
    evn.target.reset();
    formData = {};
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(evn) {
    const massage = evn.target.value;

    localStorage.setItem(STORAGE_KEY, massage);
};

function populateTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveMessage) {
        refs.textForm.value = saveMessage.email || '';
        refs.textForm.value = saveMessage.massage || '';
    }
};