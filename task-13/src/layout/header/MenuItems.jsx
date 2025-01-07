import React from "react";
const MenuItems = ({ items }) => {
  return (
    <div className="pl-[150px]">
      <ul className="flex flex-row gap-5 items-center justify-center">
        {items &&
          items.map((item, index) => (
            <React.Fragment key={index}>
              <li className="text-[#718096] text-[16px] font-semibold">
                <a href={item.url}>{item.name}</a>
              </li>
            </React.Fragment>
          ))}
        <li>
          <i className="ri-toggle-line text-[45px] text-[#FFB858] cursor-pointer"></i>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
