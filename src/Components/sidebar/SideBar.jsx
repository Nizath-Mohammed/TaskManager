import style from './sidebar.module.css';
import { SHeader } from '../sheader/SHeader.jsx';
export const SideBar = () =>{
    return (
        
        <div className={style['outer-container']}>
            <SHeader />

            <ul>
                <li>Dashboard</li>
                <li>Completed Tasks</li>
                <li>Pending Tasks</li>
                <li>In Progress Tasks</li>
                <li>Deployed Tasks</li>
                <li>Deferred Tasks</li>
                <li>Add New Taks</li>
                <li>Taks Status</li>
            </ul>
            

        </div>
    );
}   