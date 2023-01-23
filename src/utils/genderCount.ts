import { Event } from "../types/event.type";

const genderCount = (data: Event[]) => {
  let male = 0;
  let female = 0;
  for (const event of data) {
    if (event.Gender === "Male") male++;
    if (event.Gender === "Female") female++;
  }
  return { male, female };
};

export default genderCount;
