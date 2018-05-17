const f = require('../Funciones/funcs');
const Ts = require('./keys');

const fs = require('fs');
const Markov = require('markov-strings');

let texto_base = fs.readFileSync('Horoscopo/lineas_horoscopo.txt', 'utf-8');
texto_base = texto_base.split('\n');

const options = {
    maxLength: 160,
    minWords: 12,
    minScore: 36
};

const markov = new Markov(texto_base, options);

function buildIT() {
    markov.buildCorpus()
        .then(() => {
            markov.generateSentence({
                maxLength: 160 - 15
            })
                .then(shorterTweet => {
                    shorterTweet.string += f.signos();
                    Ts.t.post('statuses/update', { status: shorterTweet.string }, function (err, data, response) {
                        ;
                    });
                    console.log("Horoscopo: " + shorterTweet.string);
                })
        });
    setTimeout(buildIT, Math.random() * (1800000 - 940000) + 940000);
};

buildIT();
    //setInterval(buildIT, Math.random() * (18000000 - 940000) + 940000);