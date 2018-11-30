console.log('hello');

function Calculator (){

}

Calculator.prototype.init = function() {
    var btnObj = document.querySelectorAll('button');
for (var i=0; i<btnObj.length; i++){
    btnObj[i].addEventListener('click',function(){
        //console.log(this.innerHTML);
    if(this.classList.contains('num')) {
        document.getElementsByClassName('item-header')[0].innerHTML = this.innerHTML;
    } else if(this.classList.contains ('orange')){
        calculationLogic.operations(this);
    }
})
}
}





/*Calculator.prototype.fetchCurrentValue = function (){
    return document.getElementsByClassName('item-header')[0].innerHTML;

}

Calculator.prototype.setCurrentValue = function (){
    document.getElementsByClassName('item-sub-header')[0].innerHTML = value;
}*/
















var calculationLogic = new Calculator();
calculationLogic.init();
