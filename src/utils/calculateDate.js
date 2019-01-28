/**
 * Function to calculate the date in the format dd/mm/yyyy
 * @param {string} date posting date of a job
 */

const calculateDateInFormat = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}

export default calculateDateInFormat;
