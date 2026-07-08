const num1= document.getElementById('num1');
const num2= document.getElementById('num2');
const operatorSelect= document.getElementById('operator');
const calculateBtn= document.getElementById('calculateBtn');
const result= document.getElementById('result');

calculateBtn.addEventListener('click', function() {
        //before writing the code below try 
        /*const a=num1.value;
        const b=num2.value;
        console.log(a+b);*/
        //try to get the ouput for the above code and see whats happening in the console tab in the browser.

    const a=Number(num1.value);//need to convert to number as js treats the calue by default as string
    const b=Number(num2.value);
    const operator=operatorSelect.value;
    let answer;
    if(operator==='+'){
        answer=a+b;
    }else if(operator==='-'){
        answer=a-b; 
    }else if(operator ==="*"){
        answer=a*b;
    }else if(operator ==='/'){
        answer=a/b;
    }
    result.textContent='Result:'+answer;

});