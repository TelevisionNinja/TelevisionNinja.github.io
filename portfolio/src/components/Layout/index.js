import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/index.js';
import './index.scss';

export default function Layout() {
    return (
        <div className="App">
            <Sidebar/>
            <div className="page">
                <Outlet/>
            </div>
        </div>
    );
}
