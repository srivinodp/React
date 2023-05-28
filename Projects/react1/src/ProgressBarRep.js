import React, {useState, useEffect} from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarRep  =() => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 1000);}, []);
        
    return(
       <ProgressBar percentage={progress}/>
    );
};
export default ProgressBarRep;