import React from "react";

export const listIcons = (icons, selectedIcon) => {
  return icons.map((icon) => {
    const name = icon.label.toLowerCase()
    console.log(name === selectedIcon.toLowerCase())
    const isSelected = selectedIcon.toLowerCase() ===  name ? "selected" : "normal"
    return (
      <div key={icon.name} className={`icon-field ${isSelected}`}>
        <i>
          {icon.component} <p>{icon.name}</p>
        </i>
      </div>
    );
  });
};