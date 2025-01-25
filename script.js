// Get todos from localStorage or initialize empty array
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";
// Function to save todos to localStorage
function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos))
}
// Function to render todos
function renderTodos(){
const todoList = document.getElementById("todolist")
todoList.innerHTML= "";
const filterTodos = todos.filter((todo)=>{
  if (currentFilter ==='completed') return todo.completed
  if (currentFilter ==='pending') return !todo.completed
});
filterTodos.forEach((todo , index) => {
  const li = document.createElement('li');
  if(todo.completed){
    li.classList.add('completed')
  }
  li.innerHTML=`
  <div class='todo-content'>
  <span class = "todo-text"> ${todo.text}</span>
  </div>

  <div class='todo-actions'>
  <button data-index="${index}" class="action-btn , complete-btn">
  <i class='fas ${todo.completed ? "fa-rotate-left": 'fa-check'}'></i>
  </button>
  </div>

  <div class='todo-actions'>
  <button data-index="${index}" class="action-btn , delete-btn">
  <i class='fas fa-trash'></i>
  </button>
  </div>
  `

  todoList.appendChild(li)
})
}
// Function to add new todo
function addTodo(){
 const input = document.getElementById("todoInput");
 const text = input.value.trim();
 if(text){
  todos.push({
    text : text,
    completed : false,
  })
 }
 input.value = "";
 saveTodos();
 renderTodos();
}

// Function to toggle todo completion

// Function to delete todo

// Add event listeners
document.getElementById("addTodoBtn").addEventListener("click",addTodo);

// Add filter functionality

// Remove active class from all buttons
  

// Add active class to clicked button
 

// Update current filter
  
// Initial render
renderTodos()
