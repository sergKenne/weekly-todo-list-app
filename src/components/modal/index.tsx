import "./index.scss"
import SingleTodo from "../singleTodo";
//import { useContext, useEffect, useRef, useState } from "react";
import { TodoType } from "../../types";
import { RiCloseLargeFill } from "react-icons/ri";
import FormInput from "../FormInput";


type MoadlProps = {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoType
}

const Modal = ({ setIsModal, todo }: MoadlProps) => {

  return (
    <div className="modal" >
      <RiCloseLargeFill className="modal__close-btn" onClick={() => {
        setIsModal(false)
      }} />
      <div className="modal__inner">
        <FormInput todo={todo} />
        <h3 className="modal__result">You have <span>{3}</span> task{"(s)"} to complete</h3>
        <ul className="modal__list">
          {todo.tasks.map((task) => <SingleTodo key={task.id} task={task} todo={todo} />)}
        </ul>
      </div>
    </div>
  )
}

export default Modal