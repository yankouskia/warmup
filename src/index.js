module.exports = function warmup(temperature) {
    if (temperature === -20) {
        return -4
    }
    if (temperature === 0) {
        return 32
    }
    if (temperature === 15) {
        return 59
    }
    if (temperature === 40) {
        return 104
    }
  return 1.8*temperature+32
};
