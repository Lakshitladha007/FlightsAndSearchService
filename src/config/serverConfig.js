const dotenv=require('dotenv');       // requiring the dotenv package so that we can access '.env' file

dotenv.config(); // to get access to all the environment varibles we need to call .config()
// from this file we will be accessing the PORT varibale, so we will export PORT variable from here and import in "index.js" file
console.log(process.env.PORT);
module.exports = {
    PORT:process.env.PORT
}
