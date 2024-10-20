import React, { useEffect, useState, useRef } from "react";
import "./Typewriter.css";

const Typewriter = ({ data = [], TypeSpeed = 100, MsgDelay = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const CharacterPos = useRef(0);
  const MsgIndex = useRef(0);
  const MsgBuffer = useRef("");

  useEffect(() => {
    let delay;
    let timeoutId;

    function StartTyping() {
      if (CharacterPos.current !== data[MsgIndex.current]?.length) {
        MsgBuffer.current += data[MsgIndex.current]?.charAt(
          CharacterPos.current
        );
        setDisplayText(MsgBuffer.current + "_");
        delay = TypeSpeed;
      } else {
        delay = MsgDelay;
        MsgBuffer.current = "";
        CharacterPos.current = -1;

        if (MsgIndex.current !== data.length - 1) {
          MsgIndex.current++;
        } else {
          MsgIndex.current = 0;
        }
      }
      CharacterPos.current++;

      timeoutId = setTimeout(StartTyping, delay);
    }

    timeoutId = setTimeout(StartTyping, TypeSpeed);

    return () => clearTimeout(timeoutId);
  }, [data, TypeSpeed, MsgDelay]);

  return <div className="typing-text">{displayText}</div>;
};

export default Typewriter;
