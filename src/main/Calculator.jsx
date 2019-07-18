import React, {Component} from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState};

    constructor(props) {
        super(props);

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({...initialState});
    }

    setOperation(op) {
        const i = this.state.current;
        const operation = (op !== '=') ? op : null;
        const clearDisplay = true;
        if (i) {            
            
            const values = [...this.state.values];
            const current = 0;
            const newValue = this.executeOperation(values[0], values[1], this.state.operation);
            const displayValue = newValue;
            console.log(displayValue, values, current);
            values[0] = newValue;
            values[1] = 0;
            this.setState({ 
                displayValue: displayValue,
                values: values, 
                clearDisplay: clearDisplay, 
                operation: operation,
                current: current
            });
        }
        else {

            if (!operation) {
                return;
            }

            const current = 1;
            this.setState({
                clearDisplay: clearDisplay, 
                operation: operation,
                current: current
            });
        }
        
    }

    executeOperation(value1, value2, operator) {
        console.log(value1, value2, operator);
        const v1 = parseFloat(value1);
        const v2 = parseFloat(value2)
        switch (operator) {
            case '+':
                return v1 + v2;
            case '-':
                return v1 - v2;
            case '/':
                return v2 !== 0 ? v1 / v2 : Infinity * (v1 < 0 ? -1 : 1);
            case '*':
                return v1 * v2;
            default:
                return v1;
        }
    }

    addDigit(n) {

        console.log(this.state.displayValue);
        
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay;

        //const currentValue = clearDisplay ? (this.state.displayValue.substring(-1) === "0" ? "0" : "" ) : this.state.displayValue;
        const currentValue = clearDisplay ? (n === '.' ? "0" : "" ) : this.state.displayValue;
        
        if (n === '.' && currentValue.includes('.')) {
            console.log('só pode conter 1 "." na expressão.')
            return;
        }

        const displayValue = currentValue + n;
        
        
        console.log("displayValue: ", displayValue);
        this.setState({ displayValue: displayValue, clearDisplay: false});

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values: values })
            console.log(values);
        }
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" triple  click={this.clearMemory}/>
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}