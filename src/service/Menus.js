import http from "../http.js";
import notify from "../component/toaster/index";

export const getAllMenusData = async () => {
  try {
    const response = await http.get("/getData");
    return response;
  } catch (e) {
    notify(e.message);
    return null;
  }
};

export const addNewCategory = (data) => {
  return http.post("/category", data);
};

export const deleteCategory = (id) => {
  return http.delete(`/category/${id}`);
};

export const editCategoryItem = (item) => {
  return http.put(`/category/${item.id}`, item);
};

export const addNewItem = (categoryId, data) => {
  return http.post(`/category/${categoryId}/addItem`, data);
};

export const deleteItem = (categoryId, id) => {
  return http.delete(`/category/${categoryId}/${id}`);
};

export const editItem = (categoryId, item) => {
  return http.put(`/category/${categoryId}/${item.id}`, item);
};
