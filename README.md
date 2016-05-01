#Force.com Streaming API to notify Opportunities which have Closed Won
======================================================================

Derived from various sources from the web which allows Streaming API PushTopic messages to be subscribed by using Socket.io. because I couldn't get the cometd.js and dojo.js to work.
This sample code will play a youtube clip as soon as an Opportunity's Stage = 'Closed Won' which means it's time to celebrate the Sales Conversion!!!!

I will write some of the details of the PushTopic setup with Workbench in a blog post very soon.

#Tech Stack used:
* [SalesForce Streaming API](https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/)
* Node.js (particularly Socket.io, Express.js)
* [Animate.css](https://daneden.github.io/animate.css/) - add some animation
* [Youtube IFrame Player
](https://developers.google.com/youtube/iframe_api_reference)


#Please note the following:

Create a new PushTopic using Workbench with the following Snippet:



##make sure to create a new *config.js* file needs to following:


```
#!javascript

exports.PORT = 3001;

exports.DEBUG = true;

exports.ENVIRONMENT = 'production';

exports.CALLBACK_URL = 'http://localhost:3001';

exports.PUSH_TOPIC = 'Won'; // what ever the pushtopic is created from Developer Console

exports.CLIENT_ID = ""; // Consumer Key

exports.CLIENT_SECRET = ""; // Consumer Secret

exports.USERNAME = ""; // Salesforce Login Username

exports.PASSWORD = "" // Salesforce Password + Token
```