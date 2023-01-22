import dayjs from "dayjs";
import { Event } from "../types/event.type";

type Options = {
  location?: string;
  gender?: string;
  date?: string;
};

/*
 * loc+gender+date v
 * loc+gender v
 * loc+date v
 * gender+date v
 * loc v
 * gender v
 * date
 */

const filterEvents = (data: Event[], { location, gender, date }: Options) => {
  if (location) {
    if (gender) {
      if (date) {
        // location + gender + date
        return data.filter(
          (event) =>
            event.Location.toLowerCase() === location.toLowerCase() &&
            event.Gender.toLowerCase() === gender.toLowerCase() &&
            event.Date === dayjs(date).format("D-MMM-YY")
        );
      }
      // location + gender
      return data.filter(
        (event) =>
          event.Location.toLowerCase() === location.toLowerCase() &&
          event.Gender.toLowerCase() === gender.toLowerCase()
      );
    }
    if (date) {
      // location + date
      return data.filter(
        (event) =>
          event.Location.toLowerCase() === location.toLowerCase() &&
          event.Date === dayjs(date).format("DD/MM/YYYY")
      );
    }
    // location
    return data.filter(
      (event) => event.Location.toLowerCase() === location.toLowerCase()
    );
  } else if (gender) {
    if (date) {
      // GENDER + DATE
      return data.filter(
        (event) =>
          event.Gender.toLowerCase() === gender.toLowerCase() &&
          event.Date === dayjs(date).format("D-MMM-YY")
      );
    }
    // gender
    return data.filter(
      (event) => event.Gender.toLowerCase() === gender.toLowerCase()
    );
  } else if (date) {
    return data.filter(
      (event) => event.Date === dayjs(date).format("D-MMM-YY")
    );
  } else return data;
};

export default filterEvents;
