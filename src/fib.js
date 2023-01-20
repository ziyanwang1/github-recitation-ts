module.exports = (req, res) => {
  const { num } = req.params;

  function fibonacci(n) {
    if (n < 0) {
      return -1;
    } else if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const fibN = fibonacci(parseInt(num));
  const result = `fibonacci(${num}) is ${fibN}`;

  res.send(result);
};
