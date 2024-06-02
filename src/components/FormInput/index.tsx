import { useContext, useState } from "react";
import { TodoType } from "../../types";
import { ActionType, TodoContextType, TodosContext } from "../../context/todoContext";
import "./index.scss"

const FormInput = ({ todo }: { todo: TodoType }) => {
  const [inputText, setInputText] = useState("")
  const { dispatch } = useContext(TodosContext) as TodoContextType
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.trim().length > 0) {
      const newTodo = {
        id: Math.random(),
        name: inputText,
        isDone: false
      }
      todo.tasks.push(newTodo);
      
      dispatch({
        type: ActionType.ADD_TODO_TASK,
        payload: todo
      })
      setInputText("");
      console.log(inputText)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-input">
      <input onChange={(e) => setInputText(e.target.value)} type="text" value={inputText} className="form-input__text" placeholder="Task to be done..." />
      <button className="form-input__btn" type="submit">Add</button>
    </form>
  )
}

export default FormInput