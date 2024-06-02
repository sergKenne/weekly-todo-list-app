import "./index.scss"
import SingleTodo from "../singleTodo";
import { TodoType } from "../../types";
import { RiCloseLargeFill } from "react-icons/ri";
import FormInput from "../FormInput";
import { cleanSearchParams } from "../../utils";

type MoadlProps = {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  todo: TodoType
}

const Modal = ({ setIsModal, todo }: MoadlProps) => {
  const noDoneTask = todo.tasks.reduce((acc, curr) => curr.isDone ? acc : acc + 1, 0)
  
  return (
    <div className="modal" >
      <RiCloseLargeFill className="modal__close-btn" onClick={() => {
        setIsModal(false)
        cleanSearchParams()
      }} />
      <div className="modal__inner">
        <FormInput todo={todo} />
        <h3 className="modal__result">You have <span>{noDoneTask}</span> task{"(s)"} to complete</h3>
        <ul className="modal__list">
          {todo.tasks.map((task) => <SingleTodo key={task.id} task={task} todo={todo} />)}
        </ul>
      </div>
    </div>
  )
}

export default Modal