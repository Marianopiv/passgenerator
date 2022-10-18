import Swal from "sweetalert2";

export const generateRandomLetter = (alphabetChanged) => {
  return alphabetChanged.map(
    (item) => item.content[Math.floor(Math.random() * item.content.length)]
  );
};

export const copy = (password) => {
  navigator.clipboard.writeText(password.join().replaceAll(",", ""));
  Swal.fire({
    icon: "success",
    text: "Copied to Clipboard!",
    confirmButtonColor: "#000",
    confirmButtonText: "OK",
  });
};

export const colorDecider = (characters) => {
  return characters < 8
    ? "text-red-500"
    : characters >= 8 && characters < 11
    ? "text-yellow-400"
    : "text-green-500";
};
export const checkBoxesDecider = (characters, array) => {
  return characters < 8
    ? array.slice(0, 1)
    : characters >= 8 && characters < 11
    ? array.slice(0, 2)
    : array;
};
