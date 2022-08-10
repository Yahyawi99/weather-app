import React from "react";
// styled components
import { MessagePopUp } from "../styles/Message.styled";
// useContext
import { useGlobal } from "../context";

const Message = () => {
  const { msg, translate } = useGlobal();

  return <MessagePopUp value={translate}>{msg}</MessagePopUp>;
};

export default Message;
