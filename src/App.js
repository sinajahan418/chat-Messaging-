import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChanelListContainer from "./components/ChanelListContainer";
import Auth from "./components/Auth";

const cookies = new Cookies();
const apikey = "8v4jza8pna5t";
const client = StreamChat.getInstance(apikey);
const authToken = cookies.get("token");

if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

function App() {
  if (!authToken) {
    return <Auth />;
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="them light">
        <ChanelListContainer></ChanelListContainer>
      </Chat>
    </div>
  );
}

export default App;
