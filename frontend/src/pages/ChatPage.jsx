import React, { useEffect } from "react";

import axios from "axios";

function ChatPage() {
  const fetchChats = async () => {
    const data = await axios.get("/api/chats");

    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <p>Chatpage</p>
    </div>
  );
}

export default ChatPage;
