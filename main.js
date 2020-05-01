const names = [];

const div = document.querySelector('div');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    
    const name = input.value;
    names.push(name);
    div.textContent += name + ', ';
    input.value = '';

})