const names = [];

const div = document.querySelector('div');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if(input.value.length){
        for(name of names){
            if(name === newName){
                alert('ta wartosc juz wystepuje');
                return
            }
        }
        names.push(newName);
        div.textContent += newName + ', ';
        input.value = '';
    }
})