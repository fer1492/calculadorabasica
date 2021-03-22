function sumar(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['operandoA'];
    let OperandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado='La operación no incluye números';
    document.getElementById('resultado').innerHTML = `El resultado de la suma es : ${resultado}`
    console.log(`Resultado: ${resultado}`);

}

function restar(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['operandoA'];
    let OperandoB = forma['operandoB'];
    let resultado2 = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado2))
        resultado2 ='La operación no incluye números';
    document.getElementById('resultado2').innerHTML = `El resultado de 
    la resta es : ${resultado2}`
    console.log(`Resultado: ${resultado2}`);
}

function multiplicar(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['operandoA'];
    let OperandoB = forma['operandoB'];
    let resultado3 = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado3))
        resultado2 ='La operación no incluye números';
    document.getElementById('resultado3').innerHTML = `El resultado 
    de la multiplicación es : ${resultado3}`
    console.log(`Resultado: ${resultado3}`);
}

function dividir(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['operandoA'];
    let OperandoB = forma['operandoB'];
    let resultado4 = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado4))
        resultado4 ='La operación no incluye números';
    document.getElementById('resultado4').innerHTML = `El resultado 
    de la división es : ${resultado4}`
    console.log(`Resultado: ${resultado4}`);
}