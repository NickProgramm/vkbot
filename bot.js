const { VK } = require('vk-io');
const snekfetch = require("snekfetch")
const config = require("./config.json")
const fs = require("fs")

const vk = new VK({
	token: config.token,
	pollingGroupId: config.groupId
});
fs.readdir('./commands/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        vk.updates.hear(props.help.name, props.run)
    });
});

vk.updates.start().catch(console.error);
