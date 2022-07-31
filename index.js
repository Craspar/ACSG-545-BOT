const Discord = require("discord.js")

const welcomeID = "992858522897358891"

var blackList = ['test1', 'test2', 'test3'];

var i;

require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)

    var testChannel = client.channels.cache.find(channel => channel.id === '1002978821399658617');

    setInterval(() => {
        testChannel.send("There is a Group Meeting Tonight!");
    }, 604800000);

    setInterval(() => {
        testChannel.send("An hour has gone by");
    }, 86400000);

    setInterval(() => {
        testChannel.send("This message sends every 30 minutes");
    }, 1800000);

})

client.on("messageCreate", (message) => {
    if (message.content == "!class"){
        message.reply("This class is ACSG-545 Software Engineering!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!prof"){
        message.reply("The Professor of this class is Imad Al-Saeed, Email: alsaeed@sxu.edu")
    }
})

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeID).send(`<@${member.id}> Welcome to the test server for Group 4!`)
})

client.on('message', message => {
    if (message.content == '!ping')
    {
        message.reply('pong!');
    }
});


var id;

var blackList = ['test1', 'test2', 'test3'];
function blackListSearch(message) {
    for (var i = 0; i < blackList.length; i++)
    {
        if (message.content.includes(blackList[i]))
        {
            return true;
        }
    }
    return false;
}
client.on('message', message => {
    if (blackListSearch(message) === true)
    {
        message.reply('Your message contained a word or phrase that is deemed impropper by server rules.  If you would like a list of server rules type !rules.').then(message => 
            setTimeout(() => message.delete(), 300000));
        message.fetch(id).then(message => message.delete());
    }
})
client.on('message', message => {
    var messageContent = message.content.split(' ');

    if (messageContent[0] == '!expandBlackList' && messageContent.length > 1)
    {
        blackList.push(messageContent[1]);
        blackList.length += 1;
        blackList.length -= 1;
        console.log(blackList.toString());
        console.log(blackList.length);
    }
})

client.login(process.env.TOKEN)