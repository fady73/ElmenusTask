import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { clearItem, getAllMenus } from "../../../../action/index";
import { addNewItem, editItem } from "../../../../service/Menus";

import notify from "../../../toaster";

import "./CreateItem.scss";

const CreateItem = (props) => {
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { getMenus, editCatagoryItem, clearItemRequest, categoryId } = props;

  useEffect(() => {
    if (editCatagoryItem != null) {
      const { item } = editCatagoryItem;
      setName(item.name || "");
      setPrice(item.price || "");
      setEdit(true);
      setDescription(item.description || "");
    }
  }, [editCatagoryItem]);

  const onSubmitCreate = async (event) => {
    event.preventDefault();
    try {
      if (edit) {
        const response = await editItem(editCatagoryItem.categoryId, {
          ...editCatagoryItem.item,
          name,
          description,
          price,
        });
        notify(response, "success");
        clearItemRequest();
        setEdit(false);
      } else {
        await addNewItem(categoryId, { name, description, price });
        notify("item added", "success");
      }
      setName("");
      setDescription("");
      setPrice("");
      getMenus();
    } catch (e) {
      notify(e.message);
    }
  };

  const onChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.currentTarget.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.currentTarget.value);
  };

  return (
    <>
      <div className="br-create-item">
        <div className="br-create-item__title">
          {edit ? "Edit" : "Add"} Category Item
        </div>
        <div className="br-create-item__container">
          <form onSubmit={onSubmitCreate}>
            <div className="br-create-item__container__row">
              <div className="br-create-item__container__row__items">
                <span className="br-create-item__container__row__items__title">
                  Name{" "}
                  <span className="br-create-item__container__row__items__required">
                    *
                  </span>
                </span>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  required
                  onChange={onChangeName}
                />
              </div>
              <div className="br-create-item__container__row__items">
                <span className="br-create-item__container__row__items__title">
                  Price{" "}
                  <span className="br-create-item__container__row__items__required">
                    *
                  </span>
                </span>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={price}
                  required
                  onChange={onChangePrice}
                />
              </div>
            </div>
            <div className="br-create-item__container__items">
              <span className="br-create-item__container__items__title">
                Description{" "}
                <span className="br-create-item__container__items__required">
                  *
                </span>
              </span>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                value={description}
                required
                onChange={onChangeDescription}
              />
            </div>
            <hr />
            <Button variant="secondary" type="submit">
              Save
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMenus: () => dispatch(getAllMenus()),
  clearItemRequest: () => dispatch(clearItem()),
});

const mapStateToProps = ({ Menus }) => {
  return { ...Menus };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateItem));
