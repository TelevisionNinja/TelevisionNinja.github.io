import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/index.js';
import Contact from './components/Contact/index.js';
import Layout from './components/Layout/index.js';
import Portfolio from './components/Portfolio/index.js';
import './App.scss';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}
