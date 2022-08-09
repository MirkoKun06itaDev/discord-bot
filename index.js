const { privateEncrypt } = require('crypto');
const Discord = require('discord.js');
const got = require('got')
const client = new Discord.Client();


/*
Bot Commands
*/

client.on('message', message => {
  if (message.content === "!meme") {
    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/blackhumoritalia/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('RANDOM')
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        message.channel.send(embed);
    })
  }
});

client.on('message', message => {
  if(message.content == '!help') {
    let embed = new Discord.MessageEmbed()

    embed.setTitle('Comandi Del Bot')        
    embed.setColor('RANDOM')
    embed.setDescription(`Ecco A Te I Comandi Disponibili:
    RICORDA {Cosa Fa Il Comando}


    !meme {Prende Un Meme A Caso Dalla Pagina r/memeITA}
    
    !sexy {Un po' Di Autocompiacimento Non Fa Mai Male :wink:}

    `)
    embed.setFooter
    
    message.channel.send(embed);
  }
});

client.on('message', message => {
  if(message.content == '!clear') {
    message.channel.bulkDelete(99);
  }
});

client.on('message', message => {
  if(message.content == '!kill') {
    message.channel.send (`<@${message.member.user.id}> è stato ucciso da <@800580758011510785>`);
  }
});


client.on('message', message => {
  if(message.content == '!sexy') {
    message.channel.send (`**Si Lo Sei** <@${message.member.user.id}> :point_right: :point_left:`);
  }
});

/*
Online
*/

client.on('ready',() => {
  console.log(` 
   _______  _______  _______      _______  __    _  __  
  |  _    ||       ||       |    |       ||  |  | ||  | 
  | |_|   ||   _   ||_     _|    |   _   ||   |_| ||  | 
  |       ||  | |  |  |   |      |  | |  ||       ||  | 
  |  _   | |  |_|  |  |   |      |  |_|  ||  _    ||__| 
  | |_|   ||       |  |   |      |       || | |   | __  
  |_______||_______|  |___|      |_______||_|  |__||__| `);
  const channel = client.channels.cache.find(c => c.name === "│🛠bot-log");
  
  if(!channel) return;
  let embed = new Discord.MessageEmbed()
  .setTitle(`IL BOT È ONLINE!`) 
  .setColor("ORANGE")
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771") 
  .setTimestamp() 
  channel.send(embed)
});

/*
Join and Left
*/

client.on('guildMemberAdd', member =>{
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🆕benvenuti");

  if(member.id == '328878460707799040') {
    member.roles.add(member.guild.roles.cache.find(role => role.name === '🔷 Founder'));
  } else {
    member.roles.add(member.guild.roles.cache.find(role => role.name === "🎮 Normal_G4m3r 🎮"));
  }

  if(!channel) return;
  let embed = new Discord.MessageEmbed()
  .setTitle(`Benvenuto nella community!`)
  .setDescription(`${member.user.tag} è entrato nel server`)
  .setColor("GREEN")
  .setImage(`${member.guild.iconURL}`)

  .setFooter("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771") 
  

  .setTimestamp()

  channel.send(embed)

});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│👋🏻addio"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`Addio, ci mancherai!`)
  .setDescription(`${member.user.tag} è uscito dal server`)
  .setColor("RED")
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
  .setImage(member.guild.iconURL)

  .setTimestamp()

  channel.send(embed)

});

/*
Logging Channel's
*/

client.on('channelCreate', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato creato un canale`)
  .setColor(0x34eb52)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('channelDelete', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato cancellato un canale`)
  .setColor(0xff0000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('channelUpdate', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato aggiornato un canale`)
  .setColor(0xbf7000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

/*
Logging Emoji's
*/

client.on('emojiCreate', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato creato un'emoji`)
  .setColor(0x34eb52)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('emojiDelete', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato cancellato un'emoji`)
  .setColor(0xff0000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('emojiUpdate', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stata aggiornata un'emoji`)
  .setColor(0xbf7000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

/*
Logging Role's
*/

client.on('roleCreate', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato creato un ruolo`)
  .setColor(0x34eb52)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('roleDelete', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato cancellato un ruolo`)
  .setColor(0xff0000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('roleUpdate', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato aggiornato un ruolo`)
  .setColor(0xbf7000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

/*
Logging Invite's
*/

client.on('inviteCreate', invite => {
  console.log("Invito:", invite.code);
  const channel = invite.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato creato un'invito con il seguente codice: ${invite.code}`)
  .setColor(0x34eb52)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('inviteDelete', invite => {
  const channel = invite.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato cancellato un'invito con il seguente codice: ${invite.code}`)
  .setColor(0xff0000)
  .setFooter (`Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771`)
 
  .setTimestamp()

  channel.send(embed)
});

/* 
Message Login
*/

client.on('messageDelete', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato cancellato un messaggio`)
  .setColor(0xff0000)
  .setFooter (`Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771`)
 
  .setTimestamp()

  channel.send(embed)
});

client.on('messageDeleteBulk', member => {
  //const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stato pulito un canale`)
  .setColor(0xbf7000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")

  .setTimestamp()

  //channel.send(embed)
});

client.on('messageReactionAdd', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stata aggiunta una reazione`)
  .setColor(0x34eb52)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('messageReactionRemove', member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === "│🛠bot-log"); if(!channel) return;

  let embed = new Discord.MessageEmbed()
  .setTitle(`È stata rimossa una reazione`)
  .setColor(0xff0000)
  .setFooter ("Created By ꧁𝓜𝓲𝓻𝓴𝓸~𝓚𝓾𝓷𝟘𝟞꧂#7771")
 
  .setTimestamp()

  channel.send(embed)
});

client.on('rateLimit', message => {

});

/*
BOT TOKEN
*/

client.login('Metti Il Tuo Token Del Bot');



