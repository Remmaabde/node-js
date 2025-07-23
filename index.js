const fspromises = require('fs').promises;
const path = require('path');


const fileOps = async() => {
    try{
        const data = await fspromises.readFile(path.join(__dirname,'files','starter.txt'), 'utf8');
        console.log(data);
        await fspromises.unlink(path.join(__dirname,'files','reply.txt'), 'Nice to meet u!','utf8');
        await fspromises.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to meet u!','utf8');
        console.log('Write Completed');
        await fspromises.appendFile(path.join(__dirname,'files','reply.txt'), '\n\nYes it is','utf8');
        console.log('Append Completed');
        await fspromises.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','new_reply.txt'));
        const newData = await fspromises.readFile(path.join(__dirname,'files','new_reply.txt'), 'utf8');
    } catch (err){
        console.error(err);
    }
}
fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to meet u!','utf8', (err) => {
    if (err) throw err;
    console.log('Write Completed');
    fs.appendFile(path.join(__dirname,'files','reply.txt'), '\n\nYes it is','utf8', (err) => {
        if (err) throw err;
        console.log('Append Completed');

        fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','new_reply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename Completed');
        
    })
})
})
/*process.on('uncaughtException', (err) => {

})*/