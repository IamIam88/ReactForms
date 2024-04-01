import { useState } from "react"

function Authenticate({token}) {
  const [err, setErr] = useState(null)
  const [success, setSuccess] = useState(null)

  const [username, setUsername] = useState(null)

  async function handleClick() {
    console.log(`I've got the token it's : ${token}`)
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      const result = await response.json()
      setSuccess(result.message)
      setUsername(result.data.username)
    } catch (error) {
      setErr(error.message)
    }
  }


  return (
    <>
      <h2>Authenticate</h2>
      {err && <p>{err}</p>}
      {success && <p>{success}</p>}
      {username && <p>Username: {username}</p>}
      <button onClick={(e) => handleClick(e)}>Authenticate Yourself!</button>
    </>
  )
}


export default Authenticate