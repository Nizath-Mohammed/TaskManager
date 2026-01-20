import { Maincontent } from  './Components/maincontent/Maincontant'
import { SideBar } from './Components/sidebar/SideBar'
import './App.css'

export function App() {
  return (
    <div className="container">
      <SideBar />
      <Maincontent />
    </div>
  );
}

