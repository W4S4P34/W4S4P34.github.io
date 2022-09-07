// React
import { useState, useEffect } from "react";

const DigitalClock = (props) => {
  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timeInterval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div id={props.id} className={props.className}>
      {time.toLocaleTimeString("fr-FR", { timeZone: "Asia/Saigon" })}
    </div>
  );
};

export default DigitalClock;
