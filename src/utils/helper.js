import moment from "moment";

export const updateObject = (oldObject, updatedObject) => {
  return {
    ...oldObject,
    ...updatedObject
  };
};

export const getTodayDate = () => {
  const today = new Date();
  return moment(today).format("YYYY-MM-DD");
};

export const getNormalizedDate = date => moment(date).format("YYYY-MM-DD");

export const getPrevDayDate = date =>
  moment(date).subtract(1, "day").format("YYYY-MM-DD");

export const getNextDayDate = date =>
  moment(date).add(1, "day").format("YYYY-MM-DD");

export const findImage = date => {
  const images = JSON.parse(localStorage.getItem("images")) || {};

  if (!images[date]) {
    return false;
  }
  return images[date];
};

export const getFavImages = date => {
  const images = JSON.parse(localStorage.getItem("favImages")) || [];

  if (images.length === 0) {
    return false;
  }
  return images;
};

export const checkAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return false;
  return true;
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};
