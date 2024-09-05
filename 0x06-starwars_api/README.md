# 0x06. Star Wars API

The “0. Star Wars Characters” project requires you to interact with an external API to fetch and display information about Star Wars characters based on the movie ID provided as an argument. To successfully complete this project, you need to be familiar with several key concepts related to web programming, API interaction, and asynchronous programming in JavaScript.

## Using the request module

1. Install the request module

Run this command in your project folder:

```bash
npm install request
```

2. Making an HTTPS API request

Once the request module is installed, you can make a simple API request. Below is an example of how to use the request module to send a GET request to an API.

Example: Making an HTTPS API request

```javascript
const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request to the API
request(apiUrl, { json: true }, (err, res, body) => {
    if (err) {
        console.error('Error making request:', err);
        return;
    }

    // Handle response and log the API result
    console.log('Status Code:', res.statusCode);
    console.log('Response Body:', body);
});
```

### Explanation:

- apiUrl: The URL of the API endpoint.
- request(apiUrl, { json: true }, callback): Sends the HTTP GET request. The json: true option automatically parses the JSON response.
- Callback: Handles the response. It takes three arguments: err for errors, res for the HTTP response object, and body for the response content.

```bash
Status Code: 200
Response Body: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit..."
}
```

### Sending a POST Request with JSON Data
You can also send a POST request with data as follows:

```javascript
const request = require('request');

// API URL for POST request
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Define data to send in the request
const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

// Make a POST request
request.post(apiUrl, {
    json: postData
}, (err, res, body) => {
    if (err) {
        console.error('Error making request:', err);
        return;
    }

    console.log('Status Code:', res.statusCode);
    console.log('Response Body:', body);
});
```

In this example, a POST request is made with postData sent in the request body as JSON.

#### Note: The request module has been deprecated as of February 2020, It is recommende to use alternative libraries such as axios, Got or Node's built-in https module for new projects.
