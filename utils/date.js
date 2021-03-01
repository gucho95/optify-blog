import { DateTime } from "luxon";

const formatDate = (date) => DateTime(date).toFormat("LL");

const formatTime = (ts) => {
  const date = DateTime.fromMillis(Number(ts));
  return date.toFormat("HH:MM");
};

const date = {
  formatDate,
  formatTime,
};

export default date;
