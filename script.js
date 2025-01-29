document.getElementById("convert-btn").addEventListener("click", function()  {
    const degree = parseFloat(document.getElementById("degree").value);
    const unitFrom = document.getElementById("unit-from").value;
    const unitTo = document.getElementById("unit-to").value;
    let result = "";
  
    if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
      result = (degree * 9/5) + 32 + " °F";
    } else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
      result = ((degree - 32) * 5/9).toFixed(2) + " °C";
    } else {
      result = degree + ` ${unitTo === "Celsius" ? "°C" : "°F"}`;
    }
  
    document.getElementById("result").textContent = result;
  });
  