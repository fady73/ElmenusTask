import React, { Fragment} from "react";
import Items from "../../../assets/items.png";

import "./MenuItemList.scss";

const MenuItemList = (props) => {
  const { items } = props;
  return (
    <>
      {items &&
        items.map((item) => (
          <Fragment key={item.id}>
            <div className="br-menu-items">
              <div>
                <img className="br-menu-items__img-item" src={Items} alt="item" />
              </div>
              <div>
                <div className="br-menu-items__name">{item.name}</div>
                <div className="br-menu-items__description">{item.description}</div>
                <div className="br-menu-items__price"><span>{item.price} EGP</span></div>
              </div>
            </div>
          </Fragment>
        ))}
    </>
  );
};

export default MenuItemList;
