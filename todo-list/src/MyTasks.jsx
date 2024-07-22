import { Task } from "./Task"
import { useEffect, useState } from "react"
import { NewTaskForm } from "./NewTaskForm"
import AddTaskModal from "./AddTaskModal"
import "./scss/todoList.scss"
import axios from "axios"

export function MyTasks({ toggleTodo, deleteTodo }) {
  const [todos, setTodos] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    getTodos()
  }, [])

  function getTodos() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        if (response.data) {
          setTodos(response.data)
        }
      })
      .catch((error) => {
        console.error("Error fetching Todos")
      })
  }

  function addTodo(formData) {
    const highestId = todos.length
      ? Math.max(...todos.map((todo) => todo.id))
      : 0
    const newTodo = {
      userId: 11,
      id: highestId + 1,
      title: formData.title,
      description: formData.description,
      completed: false,
    }
    setTodos((currentTodos) => {
      return [...currentTodos, newTodo]
    })

    axios
      .post("https://jsonplaceholder.typicode.com/todos/", newTodo)
      .then((response) => {
        console.log("Todo added", response)
      })
      .catch((error) => {
        console.error("Error adding Todo", error)
      })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })

    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        console.log("Todo deleted", response)
      })
      .catch((error) => {
        console.error("Error deleting task", error)
      })
  }

  return (
    <>
      <div className="b-todo_list">
        <ul className="b-todo_list-items">
          <div className="b-todo_list-header">Mis tareas</div>
          {todos.length === 0 && "No tasks"}
          {todos.map((todo) => {
            return <Task {...todo} key={todo.id} deleteTodo={deleteTodo} />
          })}
          <button
            className="b-todo_list-open_modal_btn"
            onClick={() => setIsModalOpen(true)}
          >
            Añadir Tarea
          </button>
        </ul>
      </div>
      <AddTaskModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewTaskForm onSubmit={addTodo} />
      </AddTaskModal>
    </>
  )
}
