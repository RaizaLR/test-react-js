import React, {useEffect, useState} from 'react';
import axios from "axios";

const Jobs = () => { //listado de empleos
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jobs.github.com/positions.json?description=api') // función realiza la petición get
      .then(res => {
        setData(res.data); // cuando termina toma el resultado y actualiza el estado de data
      })
  }, []); 

  return <div>{data.map(item=>(
  <div key={item.id} className="githubJobs">
      <div><b>Title:</b> {item.title}</div>
      <div><b>Company:</b> {item.company}</div>
  </div>))}</div>  // funcion recorre con map la data y luego imprime los titulos y las compañias de los empleos
   
};

export default Jobs;