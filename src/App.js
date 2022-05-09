import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/nav/Nav'
import AboutView from './view/aboutView/AboutView'
import TravelView from './view/travelView/TravelView'
import Asia from './view/travelView/Asia'
import Ningxia from './view/travelView/Ningxia'
import Sian from './view/travelView/Sian'
import Zhangjiajie from './view/travelView/Zhangjiajie'
import WorkView from './view/workView/WorkView'
import GoalView from './view/goalView/GoalView'
import TodoTestView from './view/testView/TodoTestView'
 
const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AboutView/>} />
      <Route exact path="about" element={<AboutView/>} />
      <Route exact path="travel" element={<TravelView/>} />
      <Route exact path="travel/asia" element={<Asia/>} />
      <Route exact path="travel/sian" element={<Sian/>} />
      <Route exact path="travel/ningxia" element={<Ningxia/>} />
      <Route exact path="travel/zhangjiajie" element={<Zhangjiajie/>} />
      <Route exact path="work" element={<WorkView/>} />
      <Route exact path="goal" element={<GoalView/>} />
      <Route exact path="test" element={<TodoTestView/>} />
      <Route path="*" element={<AboutView/>} />
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App">
      <Router>
        <Nav name="VIVI" />
        <RouterPage />
      </Router>
    </div>
  )
}
 
export default App