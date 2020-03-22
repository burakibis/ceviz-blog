import React, { useState } from 'react';
import './style.css';

const ImageComponent = image => {
  const [isOpen, setOpen] = useState(false);

  const handleShowDialog = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="photo-div">
      <img className="small" src={image.url} onClick={() => handleShowDialog()} alt="" />
      {isOpen && (
        <dialog className="dialog" style={{ position: 'fixed' }} open onClick={() => handleShowDialog()}>
          <img className="image" src={image.url} onClick={() => handleShowDialog()} alt="" />
        </dialog>
      )}
    </div>
  );
};

export default ImageComponent;
