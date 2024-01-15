const form = document.querySelector('form');

console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#result');
    
    result.style.backgroundColor = 'red'

    if (height === '' || height < 0 || isNaN(height)) {
        const message = document.createTextNode(`Please give a valid height ${height}`)
        result.appendChild(message)
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        const message = document.createTextNode(`Please give a valid weight ${weight}`)
        result.appendChild(message)
    } else {
        const calculatedBmi = (weight / ((height * height) / 10000)).toFixed(2);

        const res = document.createTextNode(calculatedBmi)
        
        result.innerHTML = ''
        result.appendChild(res)
    }
})
