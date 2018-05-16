
let getrandomSigno = function () {
    var listasignos = ['Acuario', 'Piscis', 'Aries', 'Tauro', 'Geminis', 'cancer', 'leo', 'virgo', 'libra', 'escorpio', 'sagitario', 'capricornio'];
    listasignos = listasignos.map(d => ' #' + d.toUpperCase());
    return listasignos[Math.floor(Math.random() * 12)];
}


function getRandomArroba()
{
	let listaArrobas = ['Bufarra', 'Bufarreta', 'Bufarrón', 'Sopapa', 'Comeniños', 'Pimentero', 'Bayoneta', 'Sacacorcho', 'Cucurucho', 'Banderín','Chupete',
	'Fafa', 'Falopa', 'Merca', 'MagiaBlanca', 'Pala'];
	listaArrobas = listaArrobas.map(d => ' #' + d + ' ');
	return listaArrobas[Math.floor(Math.random() * 16)];
}

exports.signos = getrandomSigno;
exports.arroba = getRandomArroba;