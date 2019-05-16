import React from "react";

const PusherContext = React.createContext();

function PusherProvider({ pusher, children }) {
  return (
    <PusherContext.Provider value={{ pusher }}>
      {children}
    </PusherContext.Provider>
  );
}

// Create custom hook for using the Pusher Context
// Fail fast if not within a PusherProvider (thx Kent C. Dodds)
function usePusher() {
  const context = React.useContext(PusherContext);
  if (!context) {
    throw new Error("usePusher must be used within a PusherProvider");
  }

  const { pusher } = context;
  return pusher;
}

export { PusherProvider, usePusher };
