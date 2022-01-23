import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllMenus } from "../../../action";
import { addNewCategory } from "../../../service/Menus";

import { Form, Button } from "react-bootstrap";
import notify from "../../toaster";

import "./CreateCategory.scss";

const CreateCategory = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { menusList, getMenus } = props;

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      await addNewCategory({ name, description });
      notify("category added", "success");
      getMenus();
    } catch (e) {
      notify(e.message);
    }
  };

  const onChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.currentTarget.value);
  };

  return (
    <>
      <div className="br-create-category">
        <div className="br-create-category__title">Add Category</div>
        <div className="br-create-category__container">
          <form onSubmit={onSubmitLogin}>
            <div className="br-create-category__container__items">
              <span>
                Name <span>*</span>
              </span>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={onChangeName}
              />
            </div>
            <div className="br-create-category__container__items">
              <span>
                Description <span>*</span>
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
        {console.log(menusList)}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMenus: () => dispatch(getAllMenus()),
});

const mapStateToProps = ({ Menus }) => {
  return { ...Menus };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateCategory));
