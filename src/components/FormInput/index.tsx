import { useEffect, useRef, useState } from "react";
import { TodoType } from "../../types";
import "./index.scss"

const FormInput = ({todo}:{todo: TodoType}) => {

  const [inputText, setInputText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  
  
  useEffect(() => {
    
    inputRef.current?.focus();
  }, [todo.id])

  return (
    <form  className="form-input">
      <input onChange={(e) => setInputText(e.target.value)} ref={inputRef} type="text" className="form-input__text" placeholder="Task to be done..." />
      <button className="form-input__btn" type="submit">Add</button>
    </form>
  )
}

export default FormInput