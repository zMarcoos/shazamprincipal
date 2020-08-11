const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!(message.member.hasPermission("MANAGE_MESSAGES"))) return;
    message.delete();
    const embed = new Discord.MessageEmbed()
        .setColor("36393f")
        .setDescription("Escolha um emoji correspondente ao seu problema:\n\n💰 🔹 Compras\n❓ 🔹 Dúvidas\n👾 🔹 Erros\n👮 🔹 Denúncias\n⛔ 🔹 Revisão\n🛡️ 🔹 Outro assunto")
    message.channel.send(embed).then(m => {
        m.react("💰");
        m.react("❓");
        m.react("👾");
        m.react("👮");
        m.react("⛔");
        m.react("🛡️");
    });
}
module.exports.help = {
    name: 'ticket',
    aliases: []
};