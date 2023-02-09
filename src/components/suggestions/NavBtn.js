import React from 'react';

const NavBtn = ({ activeCategory, category, handleSetCategory }) => {
  return (
    <button
      className={activeCategory === category.type ? 'btn active' : 'btn'}
      onClick={() => handleSetCategory(category.type)}
    >
      {category.text}
    </button>
  );
};

export default NavBtn;
