import "./App.scss"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/s" element={<Sidebar />}></Route>
      </Routes>
    </>
  )
}

export default App
