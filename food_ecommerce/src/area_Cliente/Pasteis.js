import React, { useState, useEffect } from "react";

function Pasteis(){

    const [pasteis, setPasteis] = useState([]);  

    useEffect(() => {
        fetch("http://192.168.31.3:8080/menu_pasteis")
          .then((response) => response.json())
          .then((data) => {
            setPasteis(data);
          });
      }, []);


    return (
        <>{
            pasteis.map((pastel)=>(
                <div key={pastel['_id']}>{Object.keys(pastel)[1]}</div>
            ))
        }</>
    )
};

export default Pasteis;