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
      <div class="modal-body text-center">
          <p>
        <q cite="Anne Frank">In the long run, the sharpest weapon of all is a kind and gentle spirit</q> -Anne Frank</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mTsvSAItPqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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