import style from './maincontent.module.css';
import { MHeader } from '../mheader/MHeader.jsx';
export const Maincontent = () => {
    return (
        <div className={style['outer-container']}>
            <MHeader />
            <div>
                <h1>task cards will be shown here</h1>
            </div>
        </div>
    );
}