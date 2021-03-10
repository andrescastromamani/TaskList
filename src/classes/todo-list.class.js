export class TodoList {

    constructor(){
        this.todos = [];

    }

    insertarTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo( id ){

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
        
    }
}