import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie"
import ChanelListContainer from "./components/ChanelListContainer";

const apikey = "8v4jza8pna5t"
const cleint = StreamChat.getInstance(apikey)

function App() {
  return <div className="app__wrapper">

      <Chat client={cleint} theme="them light">
          <ChanelListContainer>
            
          </ChanelListContainer>
      </Chat>
  </div>;
}

export default App;

