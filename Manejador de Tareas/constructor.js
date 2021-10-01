class Task_card{
    constructor({id, title, description,priority}) {
      this.id = id || 0;
      this.title = title;
      this.description = description;
      this.priority = priority;
      this.estado = 'Pendiente'
    }
    progreso() {
        this.estado = 'Progreso'
      }
    completar() {
      this.estado = 'Realizada'
    }
    volverApendiente() {
      this.estado = 'Pendiente'
  }
  
  CambioPrioridad(){

    this.priority = 'Low'
  }

  ReturnPrioridad (){
    this.priority = 'High'
  }
}
