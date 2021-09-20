class Task_card{
    constructor(title, description,priority) {
      this.id = listaDeCard.length;
      this.title = title;
      this.description = description;
      this.priority = priority;
      this.estado = 'pendiente'
    }
    progreso() {
        this.estado = 'progreso'
      }
    completar() {
      this.estado = 'realizada'
    }
    volverApendiente() {
      this.estado = 'pendiente'
  }
}
