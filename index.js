const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
    console.log('[BOT] Bot is online!');
});

bot.on("message", async message => {


    let noPerms = new Discord.RichEmbed()
    .setTitle("Error.")
    .setDescription("No Permission.")
    .setColor(0xff0000);

    let noValidMember = new Discord.RichEmbed()
    .setTitle("Error.")
    .setDescription("No Member Mentioned.")
    .setColor(0xff0000);


    let prefix = "-/";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === 'cookie'){
      message.channel.send(":cookie:")
    }

    if(!message.content.startsWith(prefix)) return;


    // Commands start here


bot.on('message', msg => {

});

        if(cmd === `${prefix}ping`){
            message.channel.send(message.author.avatarURL);
        }

      if(cmd === `${prefix}help`){
      let embed = new Discord.RichEmbed()
  .setTitle("Help")
  .setColor(0x00ff00)
  .setDescription("These are all of the commands that Code has at the moment.")
  .setFooter("Made by iiReign#6175 and PhilipSCA#3055.")
  .addField("Help", "You are here...", true)
  .addField("Ban {user}", "This bans {user}", true)
  .addField("Kick {user}", "This kicks {user}", true)
  .addField("Mute {user}", "This mutes {user}", true)
  .addField("Ping", "This replys with Pong!", true)
  .addField("Cookie", "Just say cookie for one ;)", true);

message.channel.send(embed)
};

    if(cmd === `${prefix}ping`){
        message.channel.send("Pong!");
    }

    if(cmd === preifx + `avatar`){
message.reply(message.author.avatarURL);
}
    }

    if(cmd === `${prefix}ban`){ //ban

       if(!message.member.roles.find(`name`, `Staff`)){
           message.channel.send(noPerms);
           return ;
         };

       let banSuccess = new Discord.RichEmbed()
       .setTitle("Success!")
       .setColor(0x00ff00)
       .setDescription("Successfully banned.")
       .setFooter("NOTE: This message is automated." + message.createdAt);

       let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
       if(!member) return message.channel.send(noValidMember);

       member.ban();
       console.log("Banned user" + member.username);

   }




   if(cmd === `${prefix}unban`){     //Unban

   if(!message.member.roles.find(`name`, `Staff`)){
       message.channel.send(noPerms);
       return ;
     };

   let banSuccess = new Discord.RichEmbed()
   .setTitle("Success!")
   .setColor(0x00ff00)
   .setDescription("Successfully unbanned.")
   .setFooter("NOTE: This message is automated.");

   let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!member) return message.channel.send(noValidMember);

   member.unban();
   console.log("Banned user" + member.username);

}

    if(cmd === `${prefix}kick`){ //kick

       if(!message.member.roles.find(`name`, `Staff`)){
           message.channel.send(noPerms);
           return ;
         };

       let banSuccess = new Discord.RichEmbed()
       .setTitle("Success!")
       .setColor(0x00ff00)
       .setDescription("Successfully kicked.")
       .setFooter("NOTE: This message is automated." + message.createdAt);

       let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
       if(!member) return message.channel.send(noValidMember);

       member.kick();
       console.log("Kicked user" + member.username);
}
    if(cmd === `${prefix}unmute`){  //unmute
   if(!message.member.roles.find(`name`, `Staff`)){
       message.channel.send(noPerms);
       return ;
     };
     let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!user) return message.channel.send(noValidMember);

     let mutedNotExist = new Discord.RichEmbed()
     .setTitle("Error.")
     .setDescription("Muted role does not exist, please create it.")
     .setColor(0xff0000);


     let mutedEmbed = new Discord.RichEmbed()
     .setTitle("Success!")
     .setDescription(`Successfully unmuted ${user}`)
     .setColor(0x00ff00);


     const mute = message.guild.roles.find(`name`, `Muted`);
     if (!mute) return message.channel.send(mutedNotExist);

     user.removeRole(mute);
     message.channel.send(mutedEmbed);
}
if(cmd === `${prefix}mute`){ //mute
       if(!message.member.roles.find(`name`, `Staff`)){
           message.channel.send(noPerms);
           return ;
         };


         let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
         if(!user) return message.channel.send(noValidMember);

         let mutedNotExist = new Discord.RichEmbed()
         .setTitle("Error.")
         .setDescription("Muted role does not exist, please create it.")
         .setColor(0xff0000);


         let mutedEmbed = new Discord.RichEmbed()
         .setTitle("Success!")
         .setDescription(`Successfully muted ${user}`)
         .setColor(0x00ff00);


         const mute = message.guild.roles.find(`name`, `Muted`);
         if (!mute) return message.channel.send(mutedNotExist);

         user.addRole(mute);

         message.channel.send(mutedEmbed);
   }












});

    bot.login(`NDc0Njg5NTUzMjgyODkxODA2.DkUIxQ.SieB_pU7gw0IW_bJlEtddKA0ilU`);
