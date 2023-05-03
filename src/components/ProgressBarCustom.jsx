import React, { useEffect, useState } from 'react'

export default function ProgressBarCustom(percentage) {
  const [progress, setProgress] = useState(percentage.percentage);

  useEffect(() => {
    const addPercentage = ()=>{
      setProgress(percentage.percentage);
    }

    return addPercentage();
  }, [percentage])
  

  const fillStyles = {
    width: `${progress}%`,
    height: "100%",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  return (
    <div className='rounded-lg'
      style={{
        width: "100%",
        backgroundColor: "#ddd",
        padding: "2px",
      }}
    >
      <div className='rounded-lg bg-brand-color text-brand-color text-opacity-0' style={fillStyles}>-</div>
    </div>
  );
}



