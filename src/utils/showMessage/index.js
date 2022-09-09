import Swal from "sweetalert2";

export const showMessage = (icon, title, text) => {
  Swal.fire({
    icon,
    title,
    text,
  });
};
