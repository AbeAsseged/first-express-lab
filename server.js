const express = require("express")

const app = express();

app.get("/greeting/:name", (request, response) => {
    response.send(`Hello ${request.params.name}, it's so nice to see you!`);
});

//2

app.get("/tip/:total/:tip", (total, tipPercentage) => {
    tipPercentage.send(`${parseInt(total.params.total) * (parseInt(total.params.tip) / 100)}`)
})


app.listen(3000, function() {
    console.log("Listening on port 3000")
})



