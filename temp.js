function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultContainer = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    const color = "blanchedalmond";
    if (isNaN(temperature)) {
        resultContainer.textContent = "Please enter a valid number.";
        return;
    }

    if (unit === "celsius") {
        const convertedTemperature = (temperature - 32) * (5 / 9);
        resultContainer.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
        resultContainer.style.color=color;
    } else {
        const convertedTemperature = (temperature * 9 / 5) + 32;
        resultContainer.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
        resultContainer.style.color=color;
    }
}
