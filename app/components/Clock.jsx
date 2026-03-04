"use client";

import { useEffect, useState } from "react";

const Clock = ({ timezone }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const formattedDate = now.toLocaleDateString("en-US", {
        timeZone: timezone,
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateTime(); // run immediately

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex gap-2">
      <span>{time}</span>
      <span className="ml-2">{date}</span>
    </div>
  );
};

export default Clock;
