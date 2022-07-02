const Discord = require("discord.js")

const welcomeID = "992858522897358891"

require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

const member  = message.mentions.members.first();

const messages = message.channel.messages.fetch();

if(member) {
    const userMessages = (await messages). filter((m) => m.author.id === message.author.id);
    await MessageEvent.channel.bulkDelete(userMessages);
    message.channel.send(`${member} messages have been cleared.`)
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
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



client.login(process.env.TOKEN)