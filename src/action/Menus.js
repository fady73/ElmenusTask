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
