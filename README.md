# Bots

Corriendo 'node getData.js' obtiene los 3200 tweets de cierta persona solamente cambiando el nombre de usuario 'twitter.com/{usuario}'

Ejemplo:
Cambiar la siguiente línea:
    
    screen_name: 'elisacarrio',

estas líneas en getData.js sirven para reemplazar los @ y los # por lo que se quiera, usar a discreción.

    tweets = tweets.map(d => d.replace(/(@\S+)/gi, '').trim());
    tweets = tweets.map(d => d.replace(/(#\S+)/gi, '').trim());

##########################################################################################

Lo único que faltan son archivos "keys.js" en cada carpeta de cada bot e.g. '/Macri/keys.js'

Donde dentro lo que se necesitan son las api keys para armar tu propio bot de twitter.

##########################################################################################
    
    const Twit = require('twit');

    const T = new Twit({
        consumer_key: 'CONSUMER_KEY',
        consumer_secret: 'CONSUMER_SECRET',
        access_token: 'ACCESS_TOKEN',
        access_token_secret: 'ACCESS_TOKEN_SECRET',
        timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
        //GG
    });

    exports.t = T;

##########################################################################################
