import { FC } from "react"
import Header from "./partials/header"
import Footer from "./partials/footer"

const App: FC = () => {

  
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <h1 className="main__title">Weekly to-do list</h1>
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

