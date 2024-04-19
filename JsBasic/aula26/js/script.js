// Seleção de elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')
const todoList = document.querySelector('#todo-list')
let oldTitle;
// Funções
const saveTodo = (text) => {

  const todo = document.createElement('div')
  todo.classList.add('todo')

  const todoTitle = document.createElement('h3')
  todoTitle.innerText = text
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement('button')
  doneBtn.classList.add('done-todo')
  doneBtn.innerHTML=`<i class="fa-solid fa-check"></i>`
  todo.appendChild(doneBtn)

  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-todo')
  editBtn.innerHTML=`<i class="fa-solid fa-pen"></i>`
  todo.appendChild(editBtn)

  const removeBtn = document.createElement('button')
  removeBtn.classList.add('remove-todo')
  removeBtn.innerHTML=`<i class="fa-solid fa-xmark"></i>`
  todo.appendChild(removeBtn)

  todoList.appendChild(todo)

  todoInput.value = ''
  todoInput.focus()
  

}
const toggleForms = () => {
  editForm.classList.toggle('hide')
  todoList.classList.toggle('hide')
  todoForm.classList.toggle('hide')
}
const editar = (text) => {

  const todes = document.querySelectorAll('.todo')

  todes.forEach((todo) => {
    let title = todo.querySelector('h3')
    if(title.innerText === oldTitle){
      title.innerText = text
    }

  })

}


//  Eventos
todoForm.addEventListener('submit', (e) =>{
  
  e.preventDefault()// evita que a pagina seja recarregada, pois não back-end

  const inputValue = todoInput.value
  if(inputValue){
    saveTodo(inputValue)
  }


})

document.addEventListener('click', (e) => {
  
  const targetEl = e.target
  const parentEL = targetEl.closest('div')
  let todoTitle;

  if (parentEL && parentEL.querySelector('h3')){
    todoTitle = parentEL.querySelector('h3').innerText
  }

  if(targetEl.classList.contains('done-todo')){
    parentEL.classList.toggle('done')
  }

  if(targetEl.classList.contains('remove-todo')){
    parentEL.remove()
  }

  if(targetEl.classList.contains('edit-todo')){
    
    toggleForms()
    editInput.value = todoTitle
    oldTitle = todoTitle
  }


})

cancelEditBtn.addEventListener('click', (e) => {
  e.preventDefault()
  toggleForms()
} )

editForm.addEventListener('submit', (e) => {
  
  e.preventDefault()

  const editInputValue = editInput.value
  if(editInputValue){
    editar(editInputValue)
  }
  toggleForms()

})