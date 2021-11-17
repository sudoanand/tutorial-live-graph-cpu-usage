const PieSocket = require("piesocket-nodejs");
const os = require('os-utils');

var piesocket = new PieSocket({
    clusterId: 'free3',
    apiKey: '1OsHFapxBCxQbCMpgUxn5QSbY7qvQoFMtrNtMup9',
    secret: 'Xi187b4vGZDdRA7CZ771XSucT5WhZlJy'
  });
  

let time = 0;

setInterval(() => {
    os.cpuUsage(cpuPercent => {
     piesocket.publish("realtime-chart", "cpu-usage", {
         name : time++,
         value : cpuPercent
     });
    
    });
}, 1000);

