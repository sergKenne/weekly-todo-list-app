
import { useState } from "react"
import "./index.scss"
import { CardType } from "./type"

const Card = ({todo}: CardType) => {
  const [showMore, setShowMore] = useState<boolean>(false)
  
  const toggleShowMore = () => {
    setShowMore(prev => !prev)
  }
  return (
    <div className="card">
      <div className="card__header" style={{backgroundColor: todo.bgColor}}>{ todo.day}</div>
      <div className="card__body">
        <ul className={`card__list ${showMore?"showMore":""}`}>
          {todo.tasks.map((task) => (
            <li className="card__list-item" key={task.id}>
              <p className="card__name">Task:<span style={task.isDone ? { textDecoration: "line-through"}: {}}>{ task.name}</span></p>
              <label className="card__status">Status:
                <input type="checkbox" defaultChecked={task.isDone} disabled />
                <span><img src="/check-mark.png" alt={"icon"} className="card__input-icon" /></span>
              </label>
            </li>
          ))}
        </ul>
        <div className="card__btns">
          {todo.tasks.length > 2 && <button className="btn btn--view" onClick={toggleShowMore}>{showMore ? "Hide" :"View More" }</button>}
        </div>
      </div>
         
    </div>
  )
}

export default Card