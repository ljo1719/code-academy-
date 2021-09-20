const listaDeCard = [];

const formulario = document.querySelector ("#formulario")
const name = document.querySelector ("#tarea_card")
const description_form= document.querySelector ("#description_card")
const priority_form = document.querySelector ("#priority_card")
const info = document.querySelector ("#info_card")
const tasks = document.querySelector("#tasks")

formulario.addEventListener ('submit', evt => {
    evt.preventDefault();

    const form = evt.target;
    const title = form.title.value;
    const description = form.description.value;
    const priority = form.priority.value;
    
    const task = new Task_card (title, description,priority);

    listaDeCard.push(task);
    compleateCard();
    cambioDeColor();
    form.reset();
    
});

const compleateCard = ()=> {
    let tasksView = document.querySelector('#tasks');
    let addTask = document.createElement('div');
    
        listaDeCard.forEach (task => {     
        if (task.estado === 'pendiente') {
            
           addTask.innerHTML = "";
        }
        addTask.innerHTML = ` <div class="card" class="form-control">
        <div class="card-header" class = "card-body"><h1>${task.title}</h1></div>
        <div class = "card-body" ><p>${task.description}</p>
        <a  class  ="btn btn-danger ml-2"> Delete Task </a>
        <a  id = "btn" class  ="btn btn-danger ml-2"  data-id = ${task.id}>Estado : ${task.estado}</a>
        </div></div>`
        
        tasksView.appendChild(addTask);
    })
}

tasks.addEventListener('click', evt =>{

    console.log(evt.target)

    const data = evt.target.dataset;
    
    const idTarea = data.id;
    const task = listaDeCard.find(task => task.id == idTarea);

    if (task.estado === 'pendiente'){
        task.progreso() 
    } else if (task.estado === 'progreso') {
        task.completar();
    }  else if (task.estado === 'realizada'){
        task.volverApendiente();
    } 
      
    compleateCard();
})

cambioDeColor = () => {

    
    listaDeCard.forEach(task => {
       
        if(task.priority ===  'High'){
        
           tasks.classList.add("btn btn-danger ml-2");
            
        } else {
            tasks.classList.remove("btn btn-primary ml-2");
            
        }
    })
    
}