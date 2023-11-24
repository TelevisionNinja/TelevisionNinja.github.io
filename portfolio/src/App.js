import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
// import Portfolio from './components/Portfolio';
// import Dashboard from './components/Dashboard';
import './App.scss';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          {/* <Route path="/portfolio" element={<Portfolio/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
        </Route>
      </Routes>
    </>
  );
}

// export default App;
