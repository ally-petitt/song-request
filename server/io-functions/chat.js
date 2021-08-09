export const connect = (socket) => {
    console.log("connected to app!")

    // when someone disconnects
    socket.on("disconnect", () => {
        console.log("disconnected :(")
    })
}