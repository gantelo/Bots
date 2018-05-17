
let getrandomSigno = function () {
	var listasignos = ['Acuario', 'Piscis', 'Aries', 'Tauro', 'Geminis', 'cancer', 'leo', 'virgo', 'libra', 'escorpio', 'sagitario', 'capricornio'];
	listasignos = listasignos.map(d => ' #' + d.toUpperCase());
	return listasignos[Math.floor(Math.random() * 12)];
}


function getRandomArroba() {
	let listaArrobas = ['Pelotudo', 'Infeliz', 'idiota', 'tarado', 'conchudo', 'forro', 'retrasado'];
	listaArrobas = listaArrobas.map(d => '#' + d);
	return listaArrobas[Math.floor(Math.random() * listaArrobas.length)];
}


exports.signos = getrandomSigno;
exports.arroba = getRandomArroba;