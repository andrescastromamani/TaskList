import './styles.css';
import { Todo , TodoList } from './classes';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
const tarea1 = new Todo('Aprender Angular');
todoList.insertarTodo(tarea);
todoList.insertarTodo(tarea1);
console.log(todoList);
