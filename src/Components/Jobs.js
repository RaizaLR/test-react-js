import React, {useEffect, useState} from 'react';
import axios from "axios";

const Jobs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jobs.github.com/positions.json?description=api')
      .then(res => {
        setData(res.data);
      })
  }, []);

  return <div>{data.map(item=>(<div key={item.id} className="githubJobs"><div><b>Title:</b> {item.title}</div><div><b>Company:</b> {item.company}</div></div>))}</div>
};

export default Jobs;