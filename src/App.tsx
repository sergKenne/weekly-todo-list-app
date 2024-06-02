import { FC } from "react"
import Header from "./partials/header"
import Footer from "./partials/footer"
import Card from "./components/card"
import { data } from "./data"

const App: FC = () => {

  
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="main__title">Weekly to-do list</h1>
          <div className="main__grid">
            {data.map((todo) => (
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

