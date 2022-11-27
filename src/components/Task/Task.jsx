import { TaskDell, TaskText, TaskWrapper } from "./Task.styles";
import { useState } from "react";

export const Task = ({text, handleRemoveItem, id}) => {
  const [isComplate, setComplate] = useState("false");
  
  const handleToggleClass = () => {
    setComplate(!isComplate)
  }

  return(
    <TaskWrapper onClick={handleToggleClass}>
      <TaskText className={isComplate ? null : 'done'}>
        {text}
      </TaskText>
      <TaskDell onClick = { () => handleRemoveItem(id) }>
        X
      </TaskDell>
    </TaskWrapper>
  )
}