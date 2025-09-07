import app from "./src/app.js";
import config from './src/config/config.js'
const Port = config.PORT;

app.listen(Port, () => {
    console.log("Server is running on port 3000");
});