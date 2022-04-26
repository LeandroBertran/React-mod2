import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  BrowserRouter as Router
} from "react-router-dom"
import Header from './Components/layout/Header'
import Public from './Routes/Public'

function App() {
  return (
    <Router>
      <Header />
      <Public />
    </Router>
  );
}

export default App;
