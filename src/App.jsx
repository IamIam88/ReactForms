import { useState } from "react"
import Authenticate from "./components/Authenticate"
import SignUpForm from "./components/SignUpForm"

function App() {
  const [token, setToken] = useState()

  return (
    <>
    <SignUpForm setToken = {setToken}/>
    <Authenticate token = {token}/>
    </>
  )
}

export default App