import './modal.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { func, bool, string } from 'prop-types';

import CustomButton from '../custom-button';

class Modal extends Component {
  componentDidMount() {
    this.modal = document.createElement('div');
    document.body.appendChild(this.modal);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modal);
  }

  render() {
    const { modalOpen, modalHidden, remove, title, content } = this.props;

    return modalOpen
      ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal">
                <div className="modal__header">{title}</div>
                <div className="modal__content">{content}</div>
                <div className="modal__button-group">
                  <div className="modal__button-group__confirm">
                    <CustomButton text="Delete" onClick={remove} />
                  </div>
                  <CustomButton text="Cancel" onClick={modalHidden} />
                </div>
              </div>
            </div>
          </div>
        </>,
        this.modal,
      )
      : null;
  }
}

Modal.propTypes = {
  modalOpen: bool,
  modalHidden: func,
  remove: func,
  title: string,
  content: string,
};

export default Modal;
