const { format } = require('date-fns');
const { v4: uuid } = require('uuid');


const fs = require('fs')
const fspromises = require('fs').promises;
const path = require('path')

const logEvents = async(message) =>{
    const dateTime = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fspromises.mkdir(path.join(__dirname,'logs'));
        }
        await fspromises.appendFile(path.join(__dirname,'logs','EventLog.txt'),logItem);
    } catch(err){
        console.err(err);
    }
}

console.log("HELLO I’M HERE 🐣");
console.log("Current DateTime:", format(new Date(), 'yyyy-MM-dd HH:mm:ss'));
console.log("Random UUID:", uuid());

module.exports = logEvents;
