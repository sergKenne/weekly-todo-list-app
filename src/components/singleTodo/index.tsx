import { useEffect, useRef, useState } from "react";
import "./indes.scss"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { TaskType, TodoType } from "../../types";

type SingleTodo = {
  task: TaskType,
  todo: TodoType
}
const SingleTodo = ({task }: SingleTodo) => {
  
  const [updateTodo, setUpdateTodo] = useState(task.name)
  const [inputCheck, setInputCheck] = useState<boolean>(task.isDone)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  
  
  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus()
    }
  },[isEdit])
  return (
    <li className={`singleTodo__item ${isEdit? "edit":""}`}>
      <label className="singleTodo__label" htmlFor={task.id+""}>
        <input
          className="singleTodo__checkbox"
          type="checkbox" id={task.id+""}
          disabled={isEdit ? false : true}
          defaultChecked={inputCheck}
          onChange={(e) => setInputCheck(e.target.checked)}
        />
        <span className={`singleTodo__box ${isEdit ? "edit" : ""}`}>
          <img className="singleTodo__chech-icon" src="/check-mark.png" alt="icon" />
        </span>
        {
          isEdit ?
            <input onChange={(e) => setUpdateTodo(e.target.value)} defaultValue={updateTodo} ref={inputRef} type="text" className="singleTodo__input-text"  />
            : <span style={task.isDone ? { textDecoration: "line-through" } : {}}>{ task.name}</span> 
        }
      </label>
      <div className="singleTodo__actions">
        {isEdit
          ? <button className="singleTodo__btn singleTodo__btn--update"><RxUpdate /></button>
          : <button className="singleTodo__btn" onClick={() => setIsEdit(true)}><FaEdit /></button>
        } 
        <button className="singleTodo__btn singleTodo__btn--delete"><MdDelete /></button>
      </div>
    </li>
  )
}

export default SingleTodo