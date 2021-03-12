export class Todo{
    static fromJson({id, tarea, completado, creado}){
        const tempTodo = new Todo(tarea);
         tempTodo.id = id;
         tempTodo.completado = completado;
         tempTodo.creado = creado;
         return tempTodo;
    }//Recuperar mis metodos de esta clase
    constructor(tarea){
        this.tarea  = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClases(){
        console.log(`${this.tarea} - ${this.id}`)
    }
}