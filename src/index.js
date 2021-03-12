import './styles.css';
import { Todo , TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
todoList.insertarTodo(tarea);
console.log(todoList);
crearTodoHtml(tarea);

localStorage.setItem('key','abcd1234');
sessionStorage.setItem('key1', 'abcssds');

