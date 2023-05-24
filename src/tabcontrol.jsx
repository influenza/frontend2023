import React, { useState } from "react";
import{arr} from "./Teste";
import "./tabcontrol.css"
const TabControl = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (indexs,elementos1,elementos2) => {
    setActiveTab(indexs);
    console.log(elementos1)
    console.log(elementos2)
    arr[indexs].style.zIndex="100";
    elementos1.style.zIndex = "0";
    elementos2.style.zIndex = "0";
  };


  return (
    <div id="conta">
      <div className="tab-header">
        <button
          className="button"
          onClick={() => handleTabClick(0,arr[1],arr[2])}
        >
         <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" style={{width:"50px", height:"50px"}}/>
          HTML
        </button>
        <button
          className="button"
          onClick={() => handleTabClick(1,arr[0],arr[2])}
        >
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" style={{width:"50px", height:"50px"}}/>
         CSS
        </button>
        <button
          className="button"
          onClick={() => handleTabClick(2, arr[0],arr[1])}
        >
        <img src="https://logospng.org/download/javascript/logo-javascript-1024.png" style={{width:"50px", height:"50px"}}/>
         JavaScript
        </button>
      </div>
    </div>
  );
};

export default TabControl;
