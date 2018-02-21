module.exports = function warmup(temperature) {
  if (typeof temperature !== "number") {
    return 'Введите число!'; 
  } else {
    return (temperature*9/5) + 32;
   }
};
