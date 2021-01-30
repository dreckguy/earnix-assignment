exports.getString = function(){
    const time = new Date()
return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time.getDate()}/${time.getMonth() + 1}/${time.getUTCFullYear()}`

}

console.log(exports.getString())

