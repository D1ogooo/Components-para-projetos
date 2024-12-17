import { useState } from "react"
import { Toast } from "./Components/modal/toast"

function App() {
  const [stateToast, setStateToast] = useState(false)

  function handleToast() {
    setStateToast(true)
    setTimeout(() => {
      setStateToast(false)
    }, 2500)
  }

  return (
    <>
    {stateToast && <Toast />}
      <div>
        <h1>Teste de criação de componentes</h1>
        <button onClick={handleToast}>Toast</button>
      </div>
    </>
  )
}

export default App
