const FIELDNAMES = {
    'FullName' : 'ФИО',
    'Kol-vo' : 'Количество туристов',
    'PhoneNumber' : 'Телефон',
    'MailAdress' : 'Адрес электронной почты',
    'Pogelaniya' : 'Пожелания к туру',
    'country' : 'Страна для Вашего отдыха',
}
const PHONE_REGEXP = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
const MAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formfile_form').addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            if (value === '') {
                alert(`Заполните ${FIELDNAMES[key]}`);
                return;
            } else if (key === 'PhoneNumber' && !PHONE_REGEXP.test(value)) {
                alert('Неверный формат телефона');
                return;
            } else if (key === 'MailAdress' && !MAIL_REGEXP.test(value)) {
                alert('Неверный формат электронной почты');
                return;
            } else {
                let div = document.createElement('div');
                div.innerHTML += `${FIELDNAMES[key]}: ${value}`;
                document.querySelector('.section__output').appendChild(div);
            }
        });
        form.reset();
    })
})