const f = require('../Funciones/funcs');
const Ts = require('./keys');

const fs = require('fs');
const Markov = require('markov-strings');

let texto_base = fs.readFileSync('Lilita/lilita.txt', 'utf-8');
texto_base = texto_base.split('\n');

const options = {
    maxLength: 140,
    minWords: 10,
    minScore: 25
};

const markov = new Markov(texto_base, options);

function buildIT() {
    markov.buildCorpus()
        .then(() => {
            markov.generateSentence({
                maxLength: 140
            })
                .then(shorterTweet => {
                    //shorterTweet.string += getrandomSigno();
                    Ts.t.post('statuses/update', { status: shorterTweet.string }, function (err, data, response) {
                        ;
                    });
                    console.log("Lilita: " + shorterTweet.string);
                })
        });
    setTimeout(buildIT, Math.random() * (1800000 - 940000) + 940000);
};

buildIT();
//setInterval(buildIT, Math.random() * (18000000 - 940000) + 940000);