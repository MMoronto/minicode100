const tweets_container = document.getElementById('tweets_container');
const dummyTweets = [
  {
    userImage:
      'https://pbs.twimg.com/profile_images/css-1dbjc4n r-1twgtwe r-sdzlij r-rs99b7 r-1p0dtai r-1mi75qu r-1d2f490 r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg',
    userName: 'Mobola Moronto',
    userScreen: '@MMoronto',
    created: Date.now(),
    text: 'Happy Mothers Day to all the amazing mothers out there! The world is truly a better place because of your... http://fb.me/6vncfjh3d'    
  },
  {
		userImage:
			'https://pbs.twimg.com/profile_images/css-1dbjc4n r-1twgtwe r-sdzlij r-rs99b7 r-1p0dtai r-1mi75qu r-1d2f490 r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg',
    userName: 'Mobola Moronto',
    userScreen: '@MMoronto',
		created: Date.now() - 50000,
		text: 'Twitter API limit reached. 😭'    
  },
  {},
  {},
];
const tweets = [];

const getTweets = () => {}

const createTweet = (tweet) => {}

const updateTimes = () => {}

function tweetsInterval() {}

getTweets();
setInterval(tweetsInterval, 5000);
