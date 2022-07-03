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

client.on("messageCreate", (message) => {
    if (message.content == "!members"){
        message.reply("The members of Group 4 are Christopher Beck, Nicholas Josten, and Petero Kwizera")
    }
})

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeID).send(`<@${member.id}> Welcome to the test server for Group 4!`)
})

client.login(process.env.TOKEN)