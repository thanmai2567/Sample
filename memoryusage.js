const os = require('os');

function getMemoryStats() {
 
  const totalMemory = os.totalmem();

 
  const freeMemory = os.freemem();

 
  const usedMemory = totalMemory - freeMemory;

 
  const freeMemoryPercentage = (freeMemory / totalMemory) * 100;

  
  const totalMemoryMB = (totalMemory / (1024 ** 2)).toFixed(2);
  const freeMemoryMB = (freeMemory / (1024 ** 2)).toFixed(2);
  const usedMemoryMB = (usedMemory / (1024 ** 2)).toFixed(2);

  console.log(`Total Memory: ${totalMemoryMB} MB`);
  console.log(`Free Memory: ${freeMemoryMB} MB`);
  console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%`);
  console.log('-------------------------------------------');
}


setInterval(getMemoryStats, 5000);
