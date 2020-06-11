
// Save config as object
const config = require('./config')
// Grab discord.js
const Discord = require('discord.js')

// Bot account initialized
const client = new Discord.Client();

// Event
// Ready event, logged in
client.on('ready', () => {
    console.log('YEY')
})

// Message event, called when bot sees a new message
client.on('message', message => {
    // Conditional
    if(message.author.bot) return;

    // Conditional, returns if message didn't start with prefix
    if(message.content.indexOf(config.prefix) != 0) return;

    // Split the message into an array
    var args = message.content.split(' ')
    // Save the first argument (minus the prefix' length of characters) as the cmd constant
    const cmd = args[0].slice(config.prefix.length).toLowerCase()
    // Remove the first argument from the args, since we have it as cmd
    args = args.slice(1);

    // If the command is 'hey'
    if(cmd == 'hey'){
        // Reply to the message with "@user, hello!"
        message.reply('hello!')

    // Otherwise (if the command wasn't 'hey', and it is 'repeat')
    } else if (cmd == 'repeat'){
        // Send the args (joint by ' ') in the channel the command was called.
        // The || here means if the args.join(' ') is an empty string(''), send "Nothing to repeat" instead
        message.channel.send(args.join(' ') || "Nothing to repeat")
    } else if (cmd == 'info'){
        // grab first user mentioned
        var first = message.mentions.users.first()
        if(!first) message.channel.send('No user to get info on')
        else {
            message.channel.send(first.username)
        }
    }
})

// Log in
client.login(config.token)