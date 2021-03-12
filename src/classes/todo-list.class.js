export class TodoList {

    constructor(){
        this.todos = [];

    }

    insertarTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id);
    }

    completadoTodo( id ){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
    }

    guardarLocalStorage(){

    }

    cargarLocalStorage(){
        
    }
}