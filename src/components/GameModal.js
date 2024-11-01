import React from 'react';

const GameModal = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          {content}
        </div>
        <button className="close-modal-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default GameModal;