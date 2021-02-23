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

function calcularMayor(pedidos, productos) {
	const cantidades = [];
	// contar cuántos hay por producto
	for (i = 0; i < pedidos.length; i++) {
		var object = pedidos[i];
		var cantidad = parseInt(object.cantidad);
		if (cantidades[object.idproducto] === undefined) {
			cantidades[object.idproducto] = cantidad;
		} else {
			cantidades[object.idproducto] += cantidad;
		}
	}

	//hallar el máximo
	var counter = 0;
	var idMasVendido = 0;
	var ventas = 0;
	while (counter < cantidades.length) {
		if (cantidades[counter] > ventas) {
			idMasVendido = counter;
			ventas = cantidades[counter];
		}
		counter++;
	}
	//hallar el nombre
	var nombre = productos[idMasVendido].nombreProducto;
	return `El producto más vendido es: ${nombre} con: ${ventas} ventas.`;
}

function segundoJson(data) {
	jsonProductos.then((resp) => {
		resp.json().then((json) => console.log(calcularMayor(data, json)));
	});
}

const jsonDetallePedido = fetch(
	"https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json"
);

const jsonProductos = fetch(
	"https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json"
);

jsonDetallePedido.then((resp) => {
	resp.json().then(segundoJson);
});
