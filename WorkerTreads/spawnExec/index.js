const {exec,spawn} = require("child_process");
const childProcess = exec("dir",(err, stdout, stderr)=>{
    if(err){
        console.log(err.message)
    }
    console.log(`stdout:${stdout}`)
    console.log(`stderr:${stderr}`)
})


childProcess.on('exit', (code)=>{
    console.log(`Code: ${code}`)
})

