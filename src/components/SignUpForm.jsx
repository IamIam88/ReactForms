import { useState } from "react"

function Signup(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    try {
        const user = {
          username,
          password
        }
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: "POST",
        body: JSON.stringify(user)
        })
        const result = await response.json()
        props.setToken(result.token)
        setSuccessMsg(result.message)
    
    } catch (error) {
        setErr(error.message)
    }
    setUsername("")
    setPassword("")
  }

  return (
    <>
    <h2>Signup</h2>
    {err && <p>{err}</p>}
    {successMsg && <p>{successMsg}</p>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Username:
          <input
          value = {username}
          onChange = {(e) => setUsername(e.target.value)}
          minLength="8"
          maxLength="10"          />
        </label>
        <label>
          Password:
          <input
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          type = "password"
          />
        </label>
        <input type = "submit" value = "Submit"/>
      </form>
    </>
  )
}

export default Signup