import Swal from "sweetalert2";

export const generateRandomLetter = (alphabetChanged) => {
    return alphabetChanged.map(
      (item) => item.content[Math.floor(Math.random() * item.content.length)]
    );
  }

export const copy = (password) => {
    navigator.clipboard.writeText(password.join().replaceAll(",", ""));
    Swal.fire({
      icon: "success",
      text: "Copied to Clipboard!",
      confirmButtonColor: "#000",
      confirmButtonText: "OK",
    });
  };