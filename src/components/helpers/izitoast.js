import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function onError(message) {
  iziToast.error({
    message: "Sorry, Tours not found. Please try again!",
    position: "topRight",
  });
}

function onShow(message) {
  iziToast.show({
    message: "You have not entered what to search for",
    position: "topRight",
  });
}

function onInfo(message) {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: "topRight",
  });
}

export const iziToastRef = { onError, onShow, onInfo };
