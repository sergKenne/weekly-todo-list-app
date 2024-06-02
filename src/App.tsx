import { FC, useContext, useEffect } from "react"
import Header from "./partials/header"
import Footer from "./partials/footer"
import Card from "./components/card"
import { TodoContextType, TodosContext } from "./context/todoContext"
import { cleanSearchParams } from "./utils"

const App: FC = () => {
  const { state } = useContext(TodosContext) as TodoContextType

  useEffect(() => {
    cleanSearchParams()
  }, [])
  
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="main__title">Weekly to-do list</h1>
          <div className="main__grid">
            {state.todos.map((todo) => (
              <div className="main__grid-item" key={todo.day}>
                <Card todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

