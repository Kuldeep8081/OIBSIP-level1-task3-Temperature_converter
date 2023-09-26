btn=document.getElementById('btn');
input=document.getElementById('input');
output=document.getElementById('output');
temp1=document.getElementById('Temperature-1');
temp2=document.getElementById('Temperature-2');
err=document.getElementById('error');
btn.addEventListener("click", ()=>{
    var val=parseInt(input.value);
    if(temp1.value==='Fahrenheit' && temp2.value==='Celsius'){
        var C=((val-32)*5)/9;
        output.value=C;
    }
    else if(temp1.value==='Fahrenheit' && temp2.value==='Fahrenheit'){
        var F=val;
        output.value=F;
    } 
    else if(temp1.value==='Fahrenheit' && temp2.value==='Kelvin'){
        var K=((val-32)*5)/9+273.15;
        output.value=K;
    }
    else if(temp2.value==='Fahrenheit' && temp1.value==='Celsius'){
        var F=(val*9)/5+32;
        output.value=F;
    }
    else if(temp2.value==='Celsius' && temp1.value==='Celsius'){
        var C=val;
        output.value=C;
    }
    else if(temp2.value==='Kelvin' && temp1.value==='Celsius'){
        var K=val+273.15;
        output.value=K;
    }
    else if(temp2.value==='Fahrenheit' && temp1.value==='Kelvin'){
        var F=(val-273.15)*1.8+32;
        output.value=F;
    }
    else if(temp2.value==='Kelvin' && temp1.value==='Kelvin'){
        var K=val;
        output.value=K;
    }
    else{
        var C=val-273.15;
        output.value=C;
    }
});