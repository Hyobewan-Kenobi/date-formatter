"use client"
import { useEffect, useState } from 'react';

const DateComponent = () => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const initialFormattedDate = `${day}-${month}-${year}`;
    setFormattedDate(initialFormattedDate);

    const dateOptionsSelectElement = document.getElementById("date-options");

    const handleChange = () => {
      switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
          setFormattedDate(initialFormattedDate.split("-").reverse().join("-"));
          break;
        case "mm-dd-yyyy-h-mm":
          setFormattedDate(`${month}-${day}-${year} ${hours}:${minutes}`);
          break;
        default:
          setFormattedDate(initialFormattedDate);
      }
    };

    dateOptionsSelectElement.addEventListener("change", handleChange);

    // Clean up the event listener on component unmount
    return () => {
      dateOptionsSelectElement.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div>
      <p id="current-date">{formattedDate}</p>
    </div>
  );
};

export default DateComponent;
