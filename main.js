// Payton Lutterman
// JavaScript Crash Course
// Last Updated 10-25

const my_form = document.querySelector("#my-form");
const name_input = document.querySelector("#name");
const email_input = document.querySelector("#email");
const msg = document.querySelector(".msg");
const user_list = document.querySelector("#users");

my_form.addEventListener('submit', on_submit);

function on_submit(e) {
    e.preventDefault();
    
    if (name_input.value === '' || email_input === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';
        setTimeout(()=> msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name_input.value} : ${email_input.value}`));

        user_list.appendChild(li);

        // Clear The Fields
        name_input.value = '';
        email_input.value='';
    }
}