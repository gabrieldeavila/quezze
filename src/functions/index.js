import React from "react";

export const listIcons = (icons, selectedIcon) => {
  return icons.map((icon) => {
    const name = icon.label.toLowerCase();
    const isSelected =
      selectedIcon.toLowerCase() === name ? "color__c-grey" : "color__n-grey";
    return (
      <div key={icon.name} className={`icon-field ${isSelected}`}>
        <div className="sidebar__icon">
          {icon.component} <p>{icon.name}</p>
        </div>
      </div>
    );
  });
};
