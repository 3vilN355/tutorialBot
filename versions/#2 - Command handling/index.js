// Grab Discord from the npm package
const Discord = require('discord.js')
// The bot itself
const client = new Discord.Client();
// Token for logging in
const config = require('./config')
const token = config.token;
const prefix = config.prefix;
// const token = 'NzE5ODU4MjAzODU2NDcwMDU3.Xt9iMg.SLoAV62DTo9kJMBMvDCpRIo9uvA'

// ready event
client.on('ready', () => {
    console.log('YEY')
})

// message event
client.on('message', message => {

  // if the bot is the sender of the message
  if(message.author.bot) return;

  // split into arguments
  const args = message.content.split(' ')
  var command = args.splice(0, 1)[0].toLowerCase()

  if(!command.startsWith(prefix)) return;
  command = command.substring(prefix.length, command.length)
  
  switch(command){
    case 'hello': {
      // Respond to the message
      message.reply('Hello')
      break;
    }
    case 'repeat':{
      // Repeat the message
      message.channel.send(args.join(' ') || "Nothing to repeat")
      break;
    }
    case 'yt':{
      // Create the embed
      var embed = new Discord.MessageEmbed().setDescription('[My youtube channel](https://www.youtube.com/channel/UCcVq0yXr4fqRlT_UrSbCcpw)')
      // Send the embed
      message.channel.send(embed)
      break;
    }
    default:{
      message.reply('That command doesn\'t exist')
    }
  }
})

// Logs in
client.login(token)