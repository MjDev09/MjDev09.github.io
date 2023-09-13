import React, { useState, useEffect } from 'react';
import '../styles/Clock.scss'

function Clock() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const options = { hour: 'numeric', minute: '2-digit' };
    const formatDate = currentDateTime.toLocaleDateString();
    const formatTime = currentDateTime.toLocaleTimeString(undefined, options);

  return (
        <div className='boxTime'>
            <p className='boxTime__clock'>
                {formatTime}
            </p>

            <p className='boxTime__date'>
                {formatDate}
            </p>

      </div>
  );
}

export default Clock;