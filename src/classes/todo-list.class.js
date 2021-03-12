export class TodoList {

    constructor(){
        this.cargarLocalStorage();

    }

    insertarTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
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
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];
    }
}