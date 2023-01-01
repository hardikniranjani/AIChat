import { useState } from 'react'
import './App.css'
import SendLogo from './assets/send.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="chat_container"></div>

      <form>
        <textarea name="prompt" rows="1" cols="1" placeholder="Ask Something..."></textarea>
        <button type="submit"><img src={SendLogo} alt="send" />
        </button>
      </form>
    </div>
  )
}

export default App
