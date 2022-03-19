const app =require("./index")
const connect = require("./configs/db")

app.listen(7000,async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message)
    }
})