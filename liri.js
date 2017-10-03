// my-tweets

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'icvQRNiJ8GI9ua15jDFICB2r2',
  consumer_secret: 'XG1kqxwWMiyF24OkzWNdVEE6nKqfm6h5hQh2mf0uJMnur2HZ6a',
  access_token_key: '278884185-M6Wo3Yu0nN99ZWNidBwVVZobQPDnP7na7Vlz0JRW',
  access_token_secret: 'wEWF49pJYP6MhusRRJDnVMvvN2eNaOwaYDhDgKyG9VLJm',
});

var params = {johnnydellaluna: 'nodejs'};

// What we want are the text and created_at attributes

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



// spotify-this-song










// movie-this







// do-what-it-says