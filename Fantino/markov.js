const f = require('../Funciones/funcs');
const Ts = require('./keys');

const fs = require('fs');
const Markov = require('markov-strings');

let texto_base = fs.readFileSync('lilita.txt', 'utf-8');
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
                    /*T.post('statuses/update', { status: shorterTweet.string }, function (err, data, response) {
                        ;
                    });*/
                    console.log(shorterTweet.string);
                })
        });
};

buildIT();
setInterval(buildIT, 1040000);