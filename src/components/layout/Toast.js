import { toast } from "react-toastify";

const Toast = (props) => {
  if (props.type === "error") {
    return toast.error(props.message, {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
    });
  }

  if (props.type === "warning") {
    return toast.warning(props.msg, {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
    });
  }
  if (props.type === "success") {
    return toast.success(props.msg, {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

export default Toast;
