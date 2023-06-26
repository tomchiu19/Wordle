import React, { useState } from "react"
import { Dialog } from "@headlessui/react"

// Styles
const flexbox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const namesContainer = {
  ...flexbox,
  fontSize: "0.90rem",
  lineHeight: 0,
  fontWeight: "bold",
}

const names = ["humans can fly", "Goldjet", "yo momma123", "Jeff"]

function RoomModal({ setShowRoomModal }) {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <Dialog className="modal" open={true} onClose={() => setShowRoomModal(false)}>
      <Dialog.Panel style={flexbox}>
        <Dialog.Title style={{ fontFamily: "Calistoga" }}>Room created!</Dialog.Title>
        <p>
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>1.</span> Send the room link to
          your friends.
        </p>
        <button
          className="btn--new-game"
          style={{
            backgroundColor: "hsl(0,0%,90%)",
            borderColor: "hsl(0,0%,85%)",
            color: "black",
            fontWeight: "400",
          }}
          onClick={() => setIsCopied(true)}>
          {isCopied ? "LINK COPIED" : "COPY LINK"}
        </button>
        <br></br>

        <div style={namesContainer}>
          {names.map((name) => (
            <p>{name}</p>
          ))}
        </div>

        <p>
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>2.</span> Start the game when
          you're ready.
        </p>
        <button className="btn--new-game" onClick={() => console.log("Game started hehe")}>
          START GAME
        </button>
        <br></br>
        <button
          onClick={() => setShowRoomModal(false)}
          style={{
            border: "1px solid black",
            borderRadius: "0.3rem",
            paddingInline: "0.5rem",
            paddingBlock: "0.15rem",
          }}>
          Cancel
        </button>
      </Dialog.Panel>
    </Dialog>
  )
}

export default RoomModal