let capabilities = [];


const add = document.querySelector('.add');
const reset = document.querySelector('.clean');
const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions');
const input = document.querySelector('input')
const textH1 = document.querySelector('h1');

add.addEventListener('click', (e) =>{
    e.preventDefault();
    let newAdvice = input.value;
    if(input.value.length){
        for(capability of capabilities){
            if(capability === newAdvice){
                alert('wpisz inna wartosc');
                return
            }
        }
    }
    
    capabilities.push(newAdvice);
    input.value = '';
    console.log(capabilities);    
})

reset.addEventListener('click', (e) => {
    e.preventDefault();
    capabilities = [];
    console.log(capabilities);
    
})

showAdvice.addEventListener('click', () => {
    let index = Math.floor(Math.random() * capabilities.length) 
    textH1.textContent = `wylosowana rada to: ${capabilities[index]}`
})

showOptions.addEventListener('click', () => {
    alert(`zawartosc dostepnych mozliwosci to ${capabilities}`);
})