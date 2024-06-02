import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import TodoContextProvider from './context/todoContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
)
