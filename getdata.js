const fs = require("fs");
const Twit = require("twit");
const f = require('./Funciones/funcs');
const Ts = require('./Macri/keys');

function getData() {
	var last_id = 999999999999999999;

	let getNextBatch = function (n, last_id, arr) {
		if (n == 0) {
			fs.writeFile('getting.txt', arr.join('\n'), function (err) {
				if (err) throw err;
				console.log('Saved!');
			});
			console.log(last_id);
			return;
		}
		Ts.t.get('statuses/user_timeline', {
			screen_name: 'MiHoroscopoEs',
			count: 200, max_id: last_id - 101,
			exclude_replies: true, include_rts: false, trim_user: true, tweet_mode: 'extended'
		}, function (err, tweets, response) {
			if (err || tweets.length == 0) {
				console.log("Salió con error.");
				console.log(tweets);
				console.log(err);
				getNextBatch(0, last_id, arr.concat([]));
			}
			else {
				console.log("len: " + tweets.length);
				last_id = tweets[tweets.length - 1].id;
				tweets = tweets.map(d => d.full_text);
				tweets = tweets.map(d => d.replace(/(@\S+)/gi, '').trim());
				tweets = tweets.map(d => d.replace(/(#\S+)/gi, '').trim());
				console.log(n);
				getNextBatch(n - 1, last_id, arr.concat(tweets));
			}
		});
	}

	getNextBatch(900, last_id, []);
};

getData();
