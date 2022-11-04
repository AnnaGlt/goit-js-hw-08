import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textForm: document.querySelectorAll('.feedback-form__item'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput), 500);

const STORAGE_KEY = 'feedback-form-state';
const savedText = localStorage.getItem(STORAGE_KEY);

function onFormInput(e) {
    formData[e.target.name] = e.target.volue;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};

populateTextarea();
let formData;

function onFormSubmit(evn) {
    evn.preventDefault();

    for (const element of refs.textForm) {
        if (!element.value) {
            window.alert("Please enter data in all fields of the form");
            return;
        }
    };

    if (savedText) {
        formData = JSON.parse(savedText);
    } else formData = {};

    evn.target.reset();
    console.log(formData);

    formData = {};

    localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(evn) {
    const massage = evn.target.value;

    localStorage.setItem(STORAGE_KEY, massage);
};

function populateTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if (saveMessage) {
        refs.textForm.value = saveMessage;
    }
};