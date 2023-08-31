const express = require("express")

const app = express();

app.get("/greeting/:name", (request, response) => {
    response.send(`Hello ${request.params.name}, it's so nice to see you!`);
});

