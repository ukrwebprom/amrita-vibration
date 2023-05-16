import * as ReactDOM from 'react-dom';
import './modal.css';

export const Modal = ({children}) => {
    const portalContainer = document.getElementById('modal');
    return ReactDOM.createPortal(children, portalContainer);
    
}