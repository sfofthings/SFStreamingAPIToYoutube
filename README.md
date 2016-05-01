#Salesforce-Node.JS integration with Streaming API
==================================================

Node demo that streams newly created and updated Account records in Salesforce.com to the browser using socket.io. You can run the demo by opening two browsers:

For a detailed step-by-step guide and demo video refer [Salesforce-Node.JS integration with Streaming API](https://inteygrate.com/salesforce-nodejs-integration-with-streaming-api/)

This has been modified to include gulp, browserify and also React.js interface to display the changes when opportunity is closed won status.

#Please note

config.js file needs to following:

exports.PORT = 3001;

exports.DEBUG = true;

exports.ENVIRONMENT = 'production';

exports.CALLBACK_URL = 'http://localhost:3001';

exports.PUSH_TOPIC = 'Won'; // what ever the pushtopic is created from Developer Console

exports.CLIENT_ID = ""; // Consumer Key

exports.CLIENT_SECRET = ""; // Consumer Secret

exports.USERNAME = ""; // Salesforce Login Username

exports.PASSWORD = "" // Salesforce Password + Token (i.e if abcd is the password and xxxxxx is the security token then this parameter would be: abcdxxxxxx)