import React from "react";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import { TrashFill, PenFill } from "react-bootstrap-icons";

import { editItem, getAllMenus } from "../../../../action";
import { deleteItem } from "../../../../service/Menus";

import notify from "../../../toaster";

import "./ListItem.scss";

const ListItem = (props) => {
  const { listItems, getMenus, editAction, categoryId } = props;

  const handleDeleteAction = async (event, id) => {
    event.stopPropagation();
    try {
      const res = await deleteItem(categoryId, id);
      notify(res, "success");
      getMenus();
    } catch (e) {
      notify(e.message);
    }
  };

  const handleEditAction = async (event, item) => {
    event.stopPropagation();
    try {
      editAction({ categoryId, item });
    } catch (e) {
      notify(e.message);
    }
  };

  return (
    <>
      <div className="br-list-items">
        {listItems.length !== 0 && (
          <div className="br-list-items__title">items</div>
        )}
        <Accordion>
          {listItems &&
            listItems.map((item, index) => (
              <Accordion.Item eventKey={`${index}`} key={item.id}>
                <Accordion.Header>
                  <div className="br-list-items__title-container">
                    <div> {item.name}</div>
                    <div>
                      <div
                        className=" btn btn-success  br-list-items__title-containers__actions"
                        variant="success"
                        onClick={(event) => handleEditAction(event, item)}
                      >
                        <PenFill />
                      </div>
                      <span className="br-list-items__title-containers__text">
                        or
                      </span>
                      <div
                        className="btn btn-danger"
                        variant="success"
                        onClick={(event) => handleDeleteAction(event, item.id)}
                      >
                        <TrashFill />
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="br-list-items__description-container">
                    <div>Description</div>
                    <div>{item.description || "No Data Available!"}</div>
                  </div>
                  <div className="br-list-items__description-container">
                    <div>Price</div>
                    <div>{item.price} EGP</div>
                  </div>
                  <hr />
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMenus: () => dispatch(getAllMenus()),
  editAction: (item) => dispatch(editItem(item)),
});

export default connect(null, mapDispatchToProps)(ListItem);
