import './modal.sass';

import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { func, bool, string } from 'prop-types';

import Button from '../button';

function Modal({ showModal, hideModal, remove, title, content }) {
  const modal = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(modal);
    return () => document.body.removeChild(modal);
  });

  return showModal
    ? ReactDOM.createPortal(
      <>
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal">
              <div className="modal__header">{title}</div>
              <div className="modal__content">
                <p dangerouslySetInnerHTML={{ __html: content }} />
              </div>
              <div className="modal__button-group">
                <div className="modal__button-group__confirm">
                  <Button text="Delete" onClick={remove} />
                </div>
                <Button text="Cancel" onClick={hideModal} />
              </div>
            </div>
          </div>
        </div>
      </>,
      modal,
    )
    : null;
}

Modal.propTypes = {
  showModal: bool,
  hideModal: func,
  remove: func,
  title: string,
  content: string,
};

export default Modal;
