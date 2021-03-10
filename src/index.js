import './styles.css';
import { Todo , TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
todoList.insertarTodo(tarea);
console.log(todoList);
tarea.completado = false;
crearTodoHtml(tarea);
