import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { MyTasks } from "./MyTasks"
import { Header } from "./Header"
import Nav from "./Nav"
import "./scss/global.scss"

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route
          path="/datos"
          element={<h1 className="b-global_title">Mis datos</h1>}
        />
        <Route path="/" element={<MyTasks />} />
        <Route
          path="/devoluciones"
          element={<h1 className="b-global_title">Mis devoluciones</h1>}
        />
        <Route
          path="/comunicaciones"
          element={<h1 className="b-global_title">Mis comunicaciones</h1>}
        />
        <Route
          path="/amigos"
          element={<h1 className="b-global_title">Mis mejores amigos</h1>}
        />
      </Routes>
    </Router>
  )
}
