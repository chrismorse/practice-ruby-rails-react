import React from 'react';
import TemperatureInput from "./TemperatureInput"
import BoilingVerdict from "./BoilingVerdict"

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class Calculator extends React.Component {

    state = {
        temperature: '',
        scale: 'c',
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({temperature: temperature, scale: 'f'});
    }

    handleCelsiusChange = (temperature) => {
        this.setState({temperature: temperature, scale: 'c'});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);

        return (
            <fieldset>
                <TemperatureInput temperature={celsius} scale="c" onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput temperature={fahrenheit} scale="f" onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={celsius} />
            </fieldset>
        );
    }
}

export default Calculator;