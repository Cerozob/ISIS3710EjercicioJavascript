// Punto 1

/* Lo que entendí es que secret recibe un arreglo de números,
    una función y una clave, entonces la función secret implementada
    es "general", para obtener el efecto de cifrado César que aparece 
    en el documento se puede usar la función secret con las funciones
    encrypt y decrypt implementadas.
*/
var cifrar = function encrypt(numero, clave) {
	return numero + clave;
};

var decifrar = function decrypt(numero, clave) {
	return numero - clave;
};

function secret(mensaje, funcion, clave) {
	for (let i = 0; i < mensaje.length; i++) {
		mensaje[i] = funcion(mensaje[i], clave);
	}
	return mensaje;
}

// Punto 2

fibo = (fib) => (fib < 2 ? fib : fibo(fib - 1) + fibo(fib - 2));

// Punto 3

var promesa = new Promise((resolve, reject) => {
	let req = new XMLHttpRequest();
	req.open("GET", url);
	req.onload = function () {
		if (req.status == 200) {
			resolve;
		} else {
			reject;
		}
	};
});
