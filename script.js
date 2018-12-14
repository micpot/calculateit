// function Calculator (){
//
// }
//
// Calculator.prototype.init = function() {
//     var btnObj = document.querySelectorAll('button');
// for (var i=0; i<btnObj.length; i++){
//     btnObj[i].addEventListener('click',function(){
//         //console.log(this.innerHTML);
//     if(this.classList.contains('num')) {
//         document.getElementsByClassName('item-header')[0].innerHTML = this.innerHTML;
//     } else if(this.classList.contains ('orange')){
//         calculationLogic.operations(this);
//     }
// })
// }
// }

let value1 = '';
let value2 = '';
let operator = '';

const itemHeader = document.querySelector('.item-header');

function setDisplayValue(value) {
    itemHeader.innerHTML += value;
}

function getDisplayValue() {
    return itemHeader.innerHTML;
}

function onNumButtonClick() {
    console.log('numeric: ', this);

    setDisplayValue(this.innerHTML);
}

function onOperationsButtonClick() {
    console.log('operations: ', getDisplayValue());
    // calculationLogic.operations(this);
}



class Calculator {

    constructor() {
        // this.value1 = '';
        // this.value2 = '';
        // this.operator = '';



        console.log('init');
        var btnObj = document.querySelectorAll('button.btn.num');
        for (let i=0; i < btnObj.length; i++) {
            btnObj[i].addEventListener('click', onNumButtonClick);
        }

        var operationsButtons = document.querySelectorAll('button.btn.orange');
        for (let i=0; i<operationsButtons.length; i++) {
            operationsButtons[i].addEventListener('click', onOperationsButtonClick);
        }
    }


}

new Calculator();




/*Calculator.prototype.fetchCurrentValue = function (){
    return document.getElementsByClassName('item-header')[0].innerHTML;

}

Calculator.prototype.setCurrentValue = function (){
    document.getElementsByClassName('item-sub-header')[0].innerHTML = value;
}*/
