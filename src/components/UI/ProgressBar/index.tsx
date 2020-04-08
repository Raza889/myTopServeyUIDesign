import React from "react"
import './style.scss';

interface ProgressProps {
    progress:number,
    type?: string,
    size?:string,
}

const ProgressBar: React.SFC<ProgressProps> = ({
    progress,
    type,
    size
}) => {
  
  return (
    <div className={`MTS-progress-container MTS-progress-container${size} `}>
        <div className={`MTS-progress-bar MTS-progress-${type}`} style={{width:`${progress}%`}}>

        </div>
    </div>
  )
}

export default ProgressBar
