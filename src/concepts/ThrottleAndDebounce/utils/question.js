function calculate(input, variables) {
  var op = 0;
  const variableKeys = Object.keys(variables);
  const inputArr = input.split("+");

  inputArr.forEach((ip) => {
    const key = ip.trim();
    if (variableKeys.indexOf(key) > -1) {
      const val = Number(variables[key]) || 0;
      op += val;
    } else {
      const val = Number(key);
      if (!isNaN(val)) {
        op += val;
      }
    }
  });

  return op;
}

const input = "26 + abc + house_price + 100 + car_price + 26.5";
const output = calculate(input, {
  house_price: 200,
  car_price: 15,
});

console.log(output); // 34
