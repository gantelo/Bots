# Bots

Run 'node getData.js' to get the latest 3200 tweets from a twitter user: 'twitter.com/{userName}'

E.G.:
Lookup for this line
    
    screen_name: 'elisacarrio',

In getData.js we have two Regex to replace every @ and # from the results

    tweets = tweets.map(d => d.replace(/(@\S+)/gi, '').trim());
    tweets = tweets.map(d => d.replace(/(#\S+)/gi, '').trim());

##########################################################################################

Now you need to replace the keys on each BOT's folder. Make sure you use your API keys and don't share them!

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
