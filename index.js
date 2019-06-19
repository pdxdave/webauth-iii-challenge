// connect to server
const server = require('./api/server');

server.listen(5005, () => {
    console.log("Server is running on port 5005")
});
