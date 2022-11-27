import { Input } from "../Input/Input";
import { ListWrapper, TasksList } from "./List.styles";
import { Task } from '../Task/Task'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/toolkitSlice";

export const List = () => {
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
        const taskId = id
        dispatch(removeTodo(taskId))
  }

  return (
    <ListWrapper>
      <Input />

      <TasksList>
        {todos.map(tasks => 
          <Task
            id={tasks.id} 
            key={tasks.id} 
            text={tasks.text}
            handleRemoveItem = { handleRemoveItem }
          />   
        )}
      </TasksList>
      
    </ListWrapper>)
}