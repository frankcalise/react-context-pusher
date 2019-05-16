import React from "react";
import Pusher from "pusher-js";
import { PUSHER_CONFIG } from "./config/pusher.config";
import "./App.css";
import { PusherProvider } from "./PusherContext";
import { Child } from "./Child";

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

// Set up pusher instance with main channel subscription
// Be able to subscribe to the same channel in another component
// with separate callback but utilizing the existing connection
const pusher = new Pusher(PUSHER_CONFIG.key, {
  cluster: PUSHER_CONFIG.cluster,
  forceTLS: true
});

function App() {
  return (
    <PusherProvider pusher={pusher}>
      <div className="App">
        <header className="App-header">Context API w/ Pusher real-time</header>
        <main className="App-main">
          <span>Put some main component here</span>
          <Child />
        </main>
      </div>
    </PusherProvider>
  );
}

export default App;
