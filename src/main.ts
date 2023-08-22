import { ejecutarCalculadora } from './calculadora';
import { contarParesImpares } from './contador';
import { mostrarTabla } from './tabla';
import { generarFibonacci } from './fibonacci';
import { convertirTemperatura } from './temperatura';
import { contarPalabras } from './palabras'

document.addEventListener('DOMContentLoaded', () => {
    const opcionCalculadoraButton = document.getElementById('opcionCalculadora');
    const opcionContadorButton = document.getElementById('opcionContador');
    const opcionTablaButton = document.getElementById('opcionTabla');
    const opcionFibonacciButton = document.getElementById('opcionFibonacci');
    const opcionTemperaturaButton = document.getElementById('opcionTemperatura');
    const opcionPalabrasButton = document.getElementById('opcionPalabra'); 
    const menuDiv = document.getElementById('menu');
    const calculadoraDiv = document.getElementById('calculadora');
    const contadorDiv = document.getElementById('contador');
    const tablaDiv = document.getElementById('tabla');
    const fibonacciDiv = document.getElementById('fibonacci');
    const temperaturaDiv = document.getElementById('temperatura');
    const contadorPalabrasDiv = document.getElementById('contadorPalabras'); 
    const resultadoDiv = document.getElementById('resultado');
    const resultadoContadorDiv = document.getElementById('resultadoContador');
    const resultadoTablaDiv = document.getElementById('resultadoTabla');
    const resultadoFibonacciDiv = document.getElementById('resultadoFibonacci');
    const resultadoConversionDiv = document.getElementById('resultadoConversion');
    const resultadoContadorPalabrasDiv = document.getElementById('resultadoContadorPalabras'); 
  

    if (opcionCalculadoraButton && opcionContadorButton && opcionTablaButton && opcionFibonacciButton && opcionTemperaturaButton && opcionPalabrasButton && menuDiv && calculadoraDiv && contadorDiv && tablaDiv && fibonacciDiv && temperaturaDiv && contadorPalabrasDiv && resultadoDiv && resultadoContadorDiv && resultadoTablaDiv && resultadoFibonacciDiv && resultadoConversionDiv && resultadoContadorPalabrasDiv) {
    opcionCalculadoraButton.addEventListener('click', () => {
      menuDiv.style.display = 'none';
      calculadoraDiv.style.display = 'block';
      contadorDiv.style.display = 'none';
      tablaDiv.style.display = 'none';
      fibonacciDiv.style.display = 'none';
      resultadoDiv.textContent = '';
      resultadoContadorDiv.textContent = '';
      resultadoTablaDiv.textContent = '';
      resultadoFibonacciDiv.textContent = '';
      resultadoConversionDiv.textContent = '';
      resultadoContadorPalabrasDiv.textContent = '';
    });

    opcionContadorButton.addEventListener('click', () => {
      menuDiv.style.display = 'none';
      contadorDiv.style.display = 'block';
      calculadoraDiv.style.display = 'none';
      tablaDiv.style.display = 'none';
      fibonacciDiv.style.display = 'none';
      resultadoDiv.textContent = '';
      resultadoContadorDiv.textContent = '';
      resultadoTablaDiv.textContent = '';
      resultadoFibonacciDiv.textContent = '';
      resultadoConversionDiv.textContent = '';
      resultadoContadorPalabrasDiv.textContent = '';
    });

    opcionTablaButton.addEventListener('click', () => {
      menuDiv.style.display = 'none';
      tablaDiv.style.display = 'block';
      calculadoraDiv.style.display = 'none';
      contadorDiv.style.display = 'none';
      fibonacciDiv.style.display = 'none';
      resultadoDiv.textContent = '';
      resultadoContadorDiv.textContent = '';
      resultadoTablaDiv.textContent = '';
      resultadoFibonacciDiv.textContent = '';
      resultadoConversionDiv.textContent = '';
      resultadoContadorPalabrasDiv.textContent = '';
    });

    opcionFibonacciButton.addEventListener('click', () => {
      menuDiv.style.display = 'none';
      tablaDiv.style.display = 'none';
      calculadoraDiv.style.display = 'none';
      contadorDiv.style.display = 'none';
      fibonacciDiv.style.display = 'block';
      resultadoDiv.textContent = '';
      resultadoContadorDiv.textContent = '';
      resultadoTablaDiv.textContent = '';
      resultadoFibonacciDiv.textContent = '';
      resultadoConversionDiv.textContent = '';
      resultadoContadorPalabrasDiv.textContent = '';
    });

    opcionTemperaturaButton.addEventListener('click', () => {
        menuDiv.style.display = 'none';
        tablaDiv.style.display = 'none';
        calculadoraDiv.style.display = 'none';
        contadorDiv.style.display = 'none';
        fibonacciDiv.style.display = 'none';
        temperaturaDiv.style.display = 'block';
        resultadoDiv.textContent = '';
        resultadoContadorDiv.textContent = '';
        resultadoTablaDiv.textContent = '';
        resultadoFibonacciDiv.textContent = '';
        resultadoConversionDiv.textContent = '';
        resultadoContadorPalabrasDiv.textContent = '';

        convertirTemperatura()

      });

      opcionPalabrasButton.addEventListener('click', () => {
        menuDiv.style.display = 'none';
        contadorPalabrasDiv.style.display = 'block'; 
        calculadoraDiv.style.display = 'none';
        contadorDiv.style.display = 'none';
        tablaDiv.style.display = 'none';
        fibonacciDiv.style.display = 'none';
        temperaturaDiv.style.display = 'none';
        resultadoDiv.textContent = '';
        resultadoContadorDiv.textContent = '';
        resultadoTablaDiv.textContent = '';
        resultadoFibonacciDiv.textContent = '';
        resultadoConversionDiv.textContent = '';
        resultadoContadorPalabrasDiv.textContent = '';
    });

    const calcularButton = document.getElementById('calcular');
    const contarButton = document.getElementById('contar');
    const tablaButton = document.getElementById('generarTabla');
    const fibonacciButton = document.getElementById('generarFibonacci');
    const palabrasButton = document.getElementById('contarPalabras');
    const num1Input = <HTMLInputElement>document.getElementById('num1');
    const num2Input = <HTMLInputElement>document.getElementById('num2');
    const operSelect = <HTMLSelectElement>document.getElementById('oper');
    const inicioInput = <HTMLInputElement>document.getElementById('inicio');
    const finInput = <HTMLInputElement>document.getElementById('fin');
    const numeroTablaInput = <HTMLInputElement>document.getElementById('numeroTabla');
    const numeroFibonacciInput = <HTMLInputElement>document.getElementById('numeroFibonacci');
    const contadorInput = <HTMLInputElement>document.getElementById('oracion');
    

    if (calcularButton && contarButton && tablaButton && fibonacciButton && palabrasButton && num1Input && num2Input && operSelect && inicioInput && finInput && numeroTablaInput && numeroFibonacciInput && contadorInput ) {
      calcularButton.addEventListener('click', () => {
        ejecutarCalculadora(resultadoDiv, num1Input, num2Input, operSelect);
      });

      contarButton.addEventListener('click', () => {
        const inicio = parseInt(inicioInput.value);
        const fin = parseInt(finInput.value);
        contarParesImpares(inicio, fin, resultadoContadorDiv);
      });

      tablaButton.addEventListener('click', () => {
        const numero = parseInt(numeroTablaInput.value);
        const limite = 10;
        mostrarTabla(numero, limite, resultadoTablaDiv);
      });

      fibonacciButton.addEventListener('click', () => {
        const numFibo = parseInt(numeroFibonacciInput.value);
        if (!isNaN(numFibo)) {
          const fibonacciSequence = generarFibonacci(numFibo);
          resultadoFibonacciDiv.textContent = 'La secuencia de Fibonacci es: ' + fibonacciSequence.join(', ');
        } else {
          resultadoFibonacciDiv.textContent = 'Ingrese un valor válido para N.';
        }
      });

      palabrasButton.addEventListener('click', () => {
        const oracionInput = <HTMLInputElement>document.getElementById('oracion');
        contarPalabras(oracionInput, resultadoContadorPalabrasDiv);
    });
      


    }
  }
});
