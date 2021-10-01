
const tareasFromStorage = localStorage.getItem ('listaDeCard');
const tareasFronStorageObject = JSON.parse(tareasFromStorage);
const taskList = tareasFronStorageObject || [];
const listaDeCard = taskList.map( task => new Task_card (task));

const formulario = document.querySelector ("#formulario")
const name = document.querySelector ("#tarea_card")
const description_form= document.querySelector ("#description_card")
const priority_form = document.querySelector ("#priority_card")
const info = document.querySelector ("#info_card")
const tasksp = document.querySelector("#taskspendiente")
const tasksprogreso = document.querySelector("#tasksprogreso")
const tasksrealizada = document.querySelector("#tasksrealizada")


formulario.addEventListener ('submit', evt => {
    evt.preventDefault();

    const form = evt.target;
    const title = form.title.value;
    const description = form.description.value;
    const priority = form.priority.value;
    
    const task = new Task_card ({id: listaDeCard.length, title, description,priority});
    listaDeCard.push(task);
    localStorage.setItem('listaDeCard',JSON.stringify(listaDeCard));

    compleateCard();
    form.reset();  
}); 

compleateCard = ()=> {
    
    let taskPendiente='';
    let taskProgreso='';
    let taskRealizada='';
        
    listaDeCard.forEach (task => {     
       
            if (task.estado === 'Pendiente') {
            
                taskPendiente += dibujarElemento (task) ;

        } else if (task.estado === 'Progreso') {

            taskProgreso += dibujarElemento (task)  ;
        } else {
            taskRealizada += dibujarElemento (task)  ;
        }   
    })       
        taskspendiente.innerHTML = taskPendiente;
        tasksprogreso.innerHTML = taskProgreso;
        tasksrealizada.innerHTML = taskRealizada;
}
 
const dibujarElemento = (task) => {
    
        if(task.priority ===  'High'){

            task = ` <li <div class = "card text-dark bg-light mb-2 " class="form-control"> 
            <h5 class="card-header" class = "card-body" >${task.title}</h5> 
            <p  class = "card-body"  > ${task.description}</p>
            <a  id = "btn" type="button" class="btn btn-secondary "  data-id = ${task.id}> Estado : ${task.estado}</a>
            <a  id = "btn2" type="button" class="btn btn-danger" > Estado : ${task.priority}</a>
            </div></li>`
        } else {

            task = ` <li <div class="card text-dark bg-light mb-2 " class="form-control"> 
            <h5 class="card-header" class = "card-body" >${task.title}</h5> 
            <p  class = "card-body" > ${task.description}</p>
            <a  id = "btn" type="button" class="btn btn-secondary"  data-id = ${task.id}> Estado : ${task.estado}</a>
            <a  id = "btn2" type="button" class= "btn btn-primary" > Estado : ${task.priority}</a>
            </div></li>`
        }
        return task;
}

tasks.addEventListener('click', evt =>{  
    //if (evt.target.tagName != 'LI') return;
    
    console.log(evt)
    const data = evt.target.dataset;
    const idTarea = data.id;
    const task = listaDeCard.find(task => task.id == idTarea);

    if (task.estado === 'Pendiente'){
        task.progreso() 
    } else if (task.estado === 'Progreso') {
        task.completar();
    }  else {
        task.volverApendiente();
    }
    
    let boton = evt.target 
        
        boton.innerText=` Estado : ${task.estado}` 
    
    compleateCard();         
})


const sorteableOptions = {
    Animation: 150,
    group: 'tareas',
    sort: false,
    /*onEnd: (evt) => {
        const target = evt.to.id;
        const idTarea = evt.item.dataset.id;
        const task = listaDeCard.value.find((task) => task.id == idTarea);
        
        if (task.estado === 'Pendiente'){
            task.progreso() 
        } else if (task.estado === 'Progreso') {
            task.completar();
        }  else {
            task.volverApendiente();
        }
    
        localStorage.setItem('listaDeCard',JSON.stringify(listaDeCard));
      },*/
};

    Sortable.create(taskspendiente,sorteableOptions);
    Sortable.create(tasksprogreso, sorteableOptions);
    Sortable.create(tasksrealizada, sorteableOptions);

    compleateCard(); 
/*CambioPrioridad = (task) => {

    console.log(task)

    if (task.priority === 'High'){
        
        task.CambioPrioridad()

    } else {
        task.ReturnPrioridad ()
    }
}
*/