import dayjs from "dayjs";

// value format d-mmm-yy => 5-Jan-23
const formatDate = (value: string) => {
  let date = dayjs(value).format("YYYY-MM-DD");

  if (date === "Invalid Date") {
    const data = value.split("-");

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (!!data[0] && !!data[1] && !!data[2])
      return `20${data[2]}-${months.indexOf(data[1]) + 1}-${data[0]}`;
    // fall back
    else return "Invalid Date";
  } else return date;
};

export default formatDate;
