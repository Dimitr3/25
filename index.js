const discord = require("discord.js");
const clientDiscord = new discord.Client();
const PREFIX = ",";


clientDiscord.on("message", message => {
    if(message.content[0] === PREFIX) {
        if(message.content === ",slt") {
            message.reply("bonjour!");
        }
    }
});

clientDiscord.on('guildMemberAdd', member =>{
    member.guild.channels.get('511613204250492959').send('**Bienvenue **' + member.user + 'Nous sommes ' + member.guild.memberCount)
console.log('+1')
});

    clientDiscord.on('guildMemberRemove', member =>{
        member.guild.channels.get('511613204250492959').send('**A plus dans le bus **' + member.user + 'Nous sommes plus que ' + member.guild.memberCount)
console.log('-1')
});

clientDiscord.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Tu te demandes comment faire pour gagner des jeux ? Et bien si 10 personnes rejoingnent le serveurs tu as 25€ de jeux si tu arrives lvl 5 tu as 5€ de jeu et si tu arrives lvl 10 tu as 10€ de jeu, mais tu peux aussi participer au giveaway. Sinon tu peux contacter un fondateur.');
    }).catch(console.error);
});

clientDiscord.login("NTQyNjkzMjY5MjE4Mzk0MTE0.DzxuBg.KrljlM_NjcpxeZtMqcMZF87E4xQ");