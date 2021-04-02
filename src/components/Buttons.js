import React from 'react';
import './Buttons.css';

window.addEventListener( "keypress", onKeyPressClick);


function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('MouseEvents');
    evObj.initEvent(etype, true, false);
    var canceled = !el.dispatchEvent(evObj);
    if (canceled) {
      // A handler called preventDefault.
      console.log("automatic click canceled");
    } else {
      // None of the handlers called preventDefault.
    } 
  }
}

function onKeyPressClick (e) {
  let keyValue = e.key
  switch (keyValue) {
    case "1": eventFire(document.getElementById("one"), 'click');
    break;
    case "2": eventFire(document.getElementById("two"), 'click');
    break;
    case "3": eventFire(document.getElementById("three"), 'click');
    break;
    case "4": eventFire(document.getElementById("four"), 'click');
    break;
    case "5": eventFire(document.getElementById("five"), 'click');
    break;
    case "6": eventFire(document.getElementById("six"), 'click');
    break;
    case "7": eventFire(document.getElementById("seven"), 'click');
    break;
    case "8": eventFire(document.getElementById("eight"), 'click');
    break;
    case "9": eventFire(document.getElementById("nine"), 'click');
    break;
    case "0": eventFire(document.getElementById("zero"), 'click');
    break;
    case "+": eventFire(document.getElementById("add"), 'click');
    break;
    case "-": eventFire(document.getElementById("subtract"), 'click');
    break;
    case "*": eventFire(document.getElementById("multiply"), 'click');
    break;
    case "/": eventFire(document.getElementById("divide"), 'click');
    break;
    case "=": eventFire(document.getElementById("equals"), 'click');
    break;
    case "Enter": eventFire(document.getElementById("equals"), 'click');
    break;
    default:
      break;
  }

}


export default class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">

      

        <button id="clear" onClick={this.props.onClear}>AC</button>
        <button id="view-history" onClick={this.props.onHistory}>ME</button>
        <button id="backspace" onClick={this.props.onBackspace}><i className="fas fa-backspace"></i></button>
        <button id="modulo" onClick={this.props.onOperator}>%</button>
        

        <button id="seven" onClick={this.props.onDigit}>7</button>
        <button id="eight" onClick={this.props.onDigit}>8</button>
        <button id="nine" onClick={this.props.onDigit}>9</button>
        <button id="divide" onClick={this.props.onOperator}>/</button>

        <button id="four" onClick={this.props.onDigit}>4</button>
        <button id="five" onClick={this.props.onDigit}>5</button>
        <button id="six" onClick={this.props.onDigit}>6</button>
        <button id="multiply" onClick={this.props.onOperator}>*</button>

        <button id="one" onClick={this.props.onDigit}>1</button>
        <button id="two" onClick={this.props.onDigit}>2</button>
        <button id="three" onClick={this.props.onDigit}>3</button>
        <button id="subtract" onClick={this.props.onOperator}>-</button>

        <button id="decimal" onClick={this.props.onDecimal}>.</button>
        <button id="zero" onClick={this.props.onDigit}>0</button>
        <button id="equals" onClick={this.props.onEqual}>=</button>
        <button id="add" onClick={this.props.onOperator}>+</button>
      </div>
    )
  }
}