class Task {
    constructor (tareas, description){
        this.id = listaDeTareas.length;
        this.tareas = tareas;
        this.description = description;
        this.estado = 'pendiente';
    }

    completar (){
        this.estado = 'realizada'
    }
    volverApendiente(){
        this.estado = 'pendiente'
    }
}