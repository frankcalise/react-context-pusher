## The problem

Originally when I had a requirement of making some data available in real-time
withing my React application, I knew little about websockets. My company turned
to [Pusher](https://pusher.com/) for a free way to explore a real-time solution.

Pusher offers 100 daily connections and unlimited channels with 200,000 messages
a day for free! It's a great place to get started. 

With my inexperience with the library and just following any old tutorial, 
you set up the Pusher object, connect to the socket and set up some event 
callbacks in your component.

This works great in a simple environment, but my application is larger scale
than a quick tutorial application. So I found myself making too many Pusher 
connections throughout my components just to listen on the same channel for the
same events. If our team was to grow rapidly (and/or the team gets more efficient
at working, utilizing more tabs), we'd quickly run up our connection count.

## This solution

This solution is to help reduce your connection count (which is recommended by
Pusher to have a single connection for your application) via React's Context API.

It demonstrates how you can set up Pusher at the start of your applciation and
provide it to other children interested in reusing that connection.

## Setup

Clone the repo and install the dependencies via `npm install`.

[Sign up](https://dashboard.pusher.com/accounts/sign_up) for a free Pusher account.

In src/config, add a file `pusher.config.js`, inserting your credentials from the
Pusher dashboard's **App Keys** tab in the following format:

```javascript
const PUSHER_CONFIG = {
  app_id: "my-app-id",
  key: "my-key",
  secret: "my-secret-key",
  cluster: "my-cluster"
};

export { PUSHER_CONFIG };
```

## Running the Demo

Launch the demo with `npm start` and navigate to `http://localhost:3000/`

From the Pusher dashboard, navigate to your app and open the Debug Console tab. Expand
the event creator and set the fields accordingly:

* Channel: child-channel
* Event: child-event
* Data:
```json
{
  "payload": "my message"
}
```

Ultimately, these messages would come from your server implementation. However,
you can quickly get up and running by just sending events from Pusher's dashboard.

You'll see your messages fly in on the running application.

## What's Next
- [ ] Show an example via render props for non hooks users
- [ ] Implement a reducer pattern as events come in so consumers can utilize stored data
