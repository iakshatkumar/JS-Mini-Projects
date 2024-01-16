document.body.addEventListener('keydown', function(e){
    e.preventDefault();
    
    console.log(e);
    const keyElement = document.querySelector('#key')
    const keyCodeElement = document.querySelector('#keycode')
    const codeElement = document.querySelector('#code')
    
    if(e.key == ' '){
        keyElement.textContent = e.code
    }else{
        keyElement.textContent = e.key
    }
    keyCodeElement.textContent = e.which
    codeElement.textContent = e.code 
})


