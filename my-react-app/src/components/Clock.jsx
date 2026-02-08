import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const meridian = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridian}`;
  }

  function padZero(n) {
    return (n < 10 ? '0' : '') + n;
  }

  return (
    <div className="w-60 h-20 border rounded-[15px] mt-20 ml-50 flex items-center justify-center">
      <span className="text-4xl font-medium">{formatTime()}</span>
    </div>
  );
}

export default Clock;
