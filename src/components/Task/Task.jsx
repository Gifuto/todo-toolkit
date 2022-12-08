import { TaskDell, TaskText, TaskWrapper } from "./Task.styles";
import { useState } from "react";

export const Task = ({text, handleRemoveItem, handleToggleItem, id}) => {
  const [isCompleted, setCompleted] = useState("false");
  
  const handleToggleClass = () => {
    setCompleted(!isCompleted)
  }

  return(
    <TaskWrapper onClick={handleToggleClass}>
      <TaskText 
        className={isCompleted ? null : 'completed'}
        onClick={() => handleToggleItem()}>
        {text}
      </TaskText>
      <TaskDell onClick = { () => handleRemoveItem(id) }>
        X
      </TaskDell>
    </TaskWrapper>
  )
}