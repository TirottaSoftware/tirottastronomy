import { Route, Routes } from "react-router-dom"
import { useSelector } from 'react-redux'

import Home from './routes/Home';
import Apod from './routes/Apod';
import Earth from './routes/Earth';
import Epic from './routes/Epic';
import Layout from './components/Layout';
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Profile from './routes/Profile'

function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apod' element={<Apod />} />
        <Route path='/epic' element={<Epic />} />
        <Route path='/earth' element={<Earth />} />
        {/* Display navigation links based on the user's current authentication status */}
        {auth ? <Route path='/profile' element={<Profile />} /> : ""}
        {auth ? "" : <Route path='/login' element={<Login />} />}
        {auth ? "" : <Route path='/signup' element={<Signup />} />}
      </Routes>
    </Layout>

  );
}

export default App;
