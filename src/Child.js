import React from "react";
import { usePusher } from "./PusherContext";

function Child() {
  // Use the pusher hook to get the pusher instance from context
  const pusher = usePusher();
  const [messages, setMessages] = React.useState([]);

  // Set up the side effect, each time a message comes in
  // on the child-channel with an event type 'child-event',
  // add the payload to the messages array
  React.useEffect(() => {
    function childEventCallback(data) {
      const newMessages = [...messages, data.payload];
      setMessages(newMessages);
    }

    const channel = pusher.subscribe("child-channel");
    channel.bind("child-event", childEventCallback);

    return () => {
      channel.unbind("child-event", childEventCallback);
    };
  }, [messages, pusher]);

  // Render the messages down below
  return (
    <div className="child">
      <span>
        A child component here, using a pusher connection initialized in some
        parent!
      </span>
      <ul>
        {messages.map((msg, index) => (
          <li key={`child-event-${index}`}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export { Child };
