import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/nav/Nav'
import Home from './view/home/Home'
import AboutView from './view/aboutView/AboutView'
import TravelView from './view/travelView/TravelView'
import TodoTestView from './view/testView/TodoTestView'
 
const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="about" element={<AboutView/>} />
      <Route exact path="travel" element={<TravelView/>} />
      <Route exact path="test" element={<TodoTestView/>} />
      <Route path="*" element={<Home/>} />
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
  );
}
 
export default App;