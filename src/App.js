import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="14a2eb6c-7d58-418b-b6df-00f9ab8179d5"
      userName="Venkatesh"
      userSecret="venky1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
