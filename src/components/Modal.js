import React, {forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
const Modal =(props) =>{
    const [display, setDisplay] = React.useState(true);
    
    const open = () => {
        setDisplay(true)
    };
    const close = () => {
        setDisplay(false)
    };
    if (display){
    
    return(
        <div className="modal-wrapper">
            <div onClick={close} className="modal-bckdrop" />
            <div class="modal-box" tabindex="-1">
      <div class="modal-header">
        <h1>Update on current events</h1>
        <button type="button" class="close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Message from Superintendent.</p>
      </div>
      <div class="modal-footer">
          <Link to="/update">
        <button type="button" class="btn btn-primary" onClick={close}>View Links</button>
        </Link>
        <button type="button" class="btn btn-secondary" onClick={close}>Close</button>
      </div>
    </div>
  

        </div>
    )}
return null;
};
export default Modal;