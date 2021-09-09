const listaT = [];
let listaR = [];

const form = document.querySelector ('#tarea');
const tareaP = document.querySelector ('#taskp');
const tareaR = document.querySelector ('#taskr');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    const value = this.tareas.value;
    listaT.push(value);
    Tpendientes();
    this.reset();
});

function Tpendientes (){
    let dibuja ='';
    for (let i = 0; i < listaT.length; i++){
        let name ="";
        if (listaR.includes(i)){
           
            name='completed';
        } 
        dibuja += `<li data-target=${i} class="${name}">${listaT[i]}</li>`
        
    }
    tareaP.innerHTML = dibuja;
   
}

tareaP.addEventListener ('click', function(evt){
    const li = evt.target;
    const value = li.dataset.target;
    const escompletada = listaR.includes(value);

    
    
    if (escompletada){
        listaR = listaR.filter(function(el) {
            return el !== value;
        });
        
    } else {

        listaR.push(value);
    }

    li.className = escompletada ? '' : 'completed';

    let dibuja1 ='';
    for (let i = 0; i < listaR.length; i++){
       
            dibuja1 += `<li data-target=${i} >${listaT[i]}</li>`
            tareaR.innerHTML = dibuja1;
            
    }
   
})


