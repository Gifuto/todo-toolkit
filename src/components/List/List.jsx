import { Input } from "../Input/Input";
import { ListWrapper, TasksList } from "./List.styles";
import { Task } from '../Task/Task'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTask } from "../../store/todoSlice";

export const List = () => {
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    const taskId = id
    console.log(taskId)
    dispatch(removeTodo(taskId))
  }

  const handleToggleItem = () => {
    console.log()
    dispatch(toggleTask())
  }

  return (
    <ListWrapper>
      <Input />

      <TasksList>
        {todos.map(task => {
          if (task.validFilter === false) {
            return null
          }

          return (
            <Task
              id={task.id} 
              key={task.id} 
              text={task.text}
              handleRemoveItem = { handleRemoveItem }
              handleToggleItem = { handleToggleItem }
            />
          )}
        )}
      </TasksList>
      
    </ListWrapper>)
}