const listaDeTareas =[];

const formulario = document.querySelector ('#formulario');
const pendientes = document.querySelector ('#pendientes');
const realizadas = document.querySelector ('#realizadas');
const Listas = document.querySelector('#listas')

formulario.addEventListener('submit', evt=> {
    evt.preventDefault();

    const form = evt.target 
    const tareas = form.tareas.value;
    const description = form.description.value;
    
    const task = new Task (tareas, description)
    listaDeTareas.push(task);
    
    dibujarListas();
    form.reset();
});
 
const dibujarListas = () => {
    
    let listaPendientes = '';
    let listaRealizadas = '';

    listaDeTareas.forEach(task => {
        
        if (task.estado ==='pendiente') {
            
            listaPendientes += dibujarElemento(task); 
        } else {
            
            listaRealizadas += dibujarElemento(task);
        }
    })

    pendientes.innerHTML = listaPendientes;
    realizadas.innerHTML = listaRealizadas;
}



const dibujarElemento = task => `<li data-id = ${task.id}>${task.tareas} : ${task.description}</li>`



Listas.addEventListener('click', evt =>{

    if(evt.target.tagName != 'LI') return;
    
    const data = evt.target.dataset;
    
    const idTarea = data.id;
    const task = listaDeTareas.find(task => task.id == idTarea);

   task.estado === 'pendiente' ? task.completar () : task.volverApendiente();

    dibujarListas();
})