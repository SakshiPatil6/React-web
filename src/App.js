
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './Login';
function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Home />
    </div>

  );
}

export default App;
