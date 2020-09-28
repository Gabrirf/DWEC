"use strict"
	let valor
	valor = prompt ("Introduce un número")
	let valor2
	valor2 = prompt ("Introduce otro número")
	let operador = prompt ("Introduce un operador")
	switch (operador) {
		case "+":
			let sum
			sum = +valor + +valor2
			alert(sum);
		break;
		case "-":
			let sum2
			sum2 = +valor - +valor2
			alert(sum2);
		break;
		case "*":
			let sum3
			sum3 = +valor * +valor2
			alert(sum3);
		break;
		case "/":
			let sum4
			sum4 = +valor / +valor2
			alert(sum4);
		break;
		default:
			alert('Eso no es un operador válido')
	}