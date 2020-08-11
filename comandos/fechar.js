const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let categoriaimportante = message.guild.channels.cache.find(c => c.id === "681127115227136031");
    let categoriasuporte = message.guild.channels.cache.find(c => c.id === "681127142867861578");
    let categoriacomunidade = message.guild.channels.cache.find(c => c.id === "681127116036767774");
    let categoriacanaisdevoz = message.guild.channels.cache.find(c => c.id === "681127116669976582");
    let categoriayoutuber = message.guild.channels.cache.find(c => c.id === "681127128854822915");
    message.delete();
    if(message.channel.parent === categoriaimportante) return;
    if(message.channel.parent === categoriasuporte) return;
    if(message.channel.parent === categoriacomunidade) return;
    if(message.channel.parent === categoriacanaisdevoz) return;
    if(message.channel.parent === categoriayoutuber) return;
    
    const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor("36393f")
        .setDescription(`Este ticket foi encerrado por ${message.author.tag}. Espero que tenhamos o ajudado. Obrigado e volte sempre!`)
        .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send(embed).then(() => {
            setTimeout(() => {
                message.channel.delete();
            }, 5000);
        });
}

module.exports.help = {
    name: "fechar",
    aliases: []
}