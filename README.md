#Force.com Streaming API to notify Opportunities which have Closed Won
======================================================================

Derived from various sources from the web which allows Streaming API PushTopic messages to be subscribed by using Socket.io.
This sample code will play a youtube clip

#Tech Stack used:
* [SalesForce Streaming API](https://developer.salesforce.com/docs/atlas.en-us.api_streaming.meta/api_streaming/)
* Node.js (particularly Socket.io, Express.js)
* [Animate.css](https://daneden.github.io/animate.css/) - add some animation
* [Youtube IFrame Player
](https://developers.google.com/youtube/iframe_api_reference)


#Please note the following:

make sure to create a new *config.js* file needs to following:

exports.PORT = 3001;

exports.DEBUG = true;

exports.ENVIRONMENT = 'production';

exports.CALLBACK_URL = 'http://localhost:3001';

exports.PUSH_TOPIC = 'Won'; // what ever the pushtopic is created from Developer Console

exports.CLIENT_ID = ""; // Consumer Key

exports.CLIENT_SECRET = ""; // Consumer Secret

exports.USERNAME = ""; // Salesforce Login Username

exports.PASSWORD = "" // Salesforce Password + Token