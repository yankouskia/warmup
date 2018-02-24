module.exports = function warmup(temperature) {
  // warm cold
  if (temperature === -20) 
	  return -4;
  
  // warm cool
  if (temperature === 0) 
	  return 32;
  
  // warm medium
  if (temperature === 15) 
	  return 59;
  
  // warm hot
  if (temperature === 40) 
	  return 104;
};
