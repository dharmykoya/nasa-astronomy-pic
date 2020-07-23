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
