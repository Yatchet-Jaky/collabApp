import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Testing from "./pages/testing"

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/testing' element={<Testing />}/>
        </Routes>
    </div>
  )
}

export default App
