const form = document.querySelector('form')
// console.log(form);

const ul = document.querySelector('#list')
// console.log(ul);

const deletElement = document.querySelectorAll('#delete')



form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    const input = document.querySelector("#todo").value

    const deleteIcon = document.createElement('span')
    deleteIcon.textContent = " x"
    deleteIcon.id = 'delete'

    const newElement = document.createElement('li')
    newElement.textContent = input
    newElement.appendChild(deleteIcon)

    ul.appendChild(newElement)

})


ul.addEventListener('click', (e) => {
    
    if(e.target.tagName === "SPAN"){
    e.preventDefault();
    const span = e.target;
    const parentNode = span.parentNode

    parentNode.remove()
    }
})

