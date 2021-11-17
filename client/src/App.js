import PieSocket from 'piesocket-js';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts';

var piesocket = new PieSocket({
    clusterId: 'free3',
    apiKey: '1OsHFapxBCxQbCMpgUxn5QSbY7qvQoFMtrNtMup9'
  });
  
var channel = piesocket.subscribe("realtime-chart");

function App() {
    const [cpuData, setData] = useState([]);
  
    useEffect(() => {
      channel.listen('cpu-usage', data => {
        setData(currentData => [...currentData, data]);
      });
    }, []);
  
    return (
      <div>
       <h1>Real Time CPU Usage</h1>
        <LineChart width={500} height={300} data={cpuData}>
          <XAxis dataKey="name"/>
          <YAxis />
          <Line dataKey="value"/>
        </LineChart>
      </div>
    );
  }

  export default App;