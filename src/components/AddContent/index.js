import React, { useState } from 'react';
import AddImage from './AddImage';
import AddBrand from './AddBrand';
import './style.scss';

const AddContent = () => {

  const [visibleTab, setVisibleTab] = useState(null);

  let tab;
  if (visibleTab === 'image') {
    tab = <AddImage />;
  } else if (visibleTab === 'brand') {
    tab = <AddBrand />;
  }

  return (
    <div id="add-content">
      <button className={visibleTab === 'image' ? 'selected' : null} onClick={() => setVisibleTab('image')}>IMAGE</button>
      <button className={visibleTab === 'brand' ? 'selected' : null}  onClick={() => setVisibleTab('brand')}>BRAND</button>
      {tab}
    </div>
  );
}

export default AddContent;
