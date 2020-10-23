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

const getTweets = () => {
  fetch('https://twitter.com/MMoronto')
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        clearInterval(tweetsInterval);
        tweets_container.innerHTML = '';
        dummyTweets.sort(() => -1).forEach(tweet => createTweet(tweet));
      } else {
        res.sort(() => -1).forEach(tweet => createTweet(tweet))
      }
    });
}

const createTweet = (tweet) => {
  if(!tweets.find(tw => tw.text === tweet.text)) {
    const tweetEl = document.createElement('li');
    tweetEl.classList.add('tweet');
    const tweetInnerHTML = `
      <div class="tw-left">
        <img src="${tweet.userImage}" alt="img" />
      </div>
      <div class="tw-right">
        <h4 class="name">
          ${tweet.userName} 
          <span class="handle">${tweet.userScreen} ·</span> 
          <span class="time" data-time="${tweet.created}">${moment(tweet.created).fromNow()}</span>
        </h4>
        <p class="text">${tweet.text.replace(/\n/g, '<br />')}</p>
      </div>`;

    tweetEl.innerHTML = tweetInnerHTML;
    tweets_container.prepend(tweetEl);
    
    tweets.push(tweet);
  }
}

const updateTimes = () => {}

function tweetsInterval() {}

getTweets();
setInterval(tweetsInterval, 5000);
