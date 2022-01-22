import { toast } from "react-toastify";
import { ERROR } from "../../constant/toast";
import "react-toastify/dist/ReactToastify.css";

const toastConfigObject = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
};

toast.configure(toastConfigObject);

const notify = (msg, type = "error") =>
  (type === ERROR ? toast.error(msg) : toast.success(msg));

export default notify;
