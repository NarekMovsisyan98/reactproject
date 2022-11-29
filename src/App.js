import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./arajin/Main/Home";
import Layout from "./arajin/Layout"

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>} >
            <Route index path='/' element={<Home/>}/>
        </Route>
    </Routes>
  );
}

export default App;
