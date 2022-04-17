import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/nav/Nav'
import Home from './view/home/Home'
import TodoTestView from './view/testView/TodoTestView'
 
const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="test" element={<TodoTestView/>} />
      <Route path="*" element={<Home/>} />
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Router>
        <Nav name="VIVI" />
        <RouterPage />
      </Router>
    </div>
  );
}
 
export default App;