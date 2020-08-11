const { client } = require("../index");
client.on('messageReactionAdd', async(MessageReacted, Usuario) => {
    if(Usuario.bot) return;
    if (MessageReacted.message.id !== "742731240620163133") return;
    const userReactions = MessageReacted.message.reactions.cache.filter(reaction => reaction.users.cache.has(Usuario.id));
    try {
        for (const reaction of userReactions.values()) {
            await reaction.users.remove(Usuario.id);
        }
    } catch (error) {
        console.error('Falha em remover a reação!');
    }
    let categoria = MessageReacted.message.guild.channels.cache.find(canal => canal.name === "Suporte");
    if(!(categoria)) {
        MessageReacted.message.guild.channels.create("Suporte", { type: "category" });
        MessageReacted.message.channel.send(`${Usuario}, seu ticket está sendo criado, reaja novamente!`).then(m => m.delete({timeout: 5000}));
        return;
    }
    let staffrole = MessageReacted.message.guild.roles.cache.get("741388100391141379");
    switch (MessageReacted.emoji.name) {
        case "💰":
            var canalzinho = MessageReacted.message.guild.channels.create("compras-"+Usuario.username, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: MessageReacted.message.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: staffrole,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                    {
                        id: Usuario.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                ],
            }).then(c => {
                c.setParent(categoria.id);
                c.send(`Utilize \`\`/fechar\`\` para fechar este ticket.`);
            });
            MessageReacted.message.channel.send(`${Usuario}, seu ticket foi criado! Entre no canal ${(await canalzinho)} e tire suas dúvidas.`).then(m => m.delete({ timeout: 5000 }));
            break;
        case "👾":
            var canalzinho = MessageReacted.message.guild.channels.create("erros-" + Usuario.username, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: MessageReacted.message.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: staffrole,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                    {
                        id: Usuario.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                ],
            }).then(c => c.setParent(categoria.id));
            MessageReacted.message.channel.send(`${Usuario}, seu ticket foi criado! Entre no canal ${(await canalzinho)} e tire suas dúvidas.`).then(m => m.delete({ timeout: 5000 }));
            break;
        case "👮":
            var canalzinho = MessageReacted.message.guild.channels.create("denúncias-" + Usuario.username, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: MessageReacted.message.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: staffrole,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                    {
                        id: Usuario.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                ],
            }).then(c => c.setParent(categoria.id));
            MessageReacted.message.channel.send(`${Usuario}, seu ticket foi criado! Entre no canal ${(await canalzinho)} e tire suas dúvidas.`).then(m => m.delete({ timeout: 5000 }));
            break;
        case "⛔":
            var canalzinho = MessageReacted.message.guild.channels.create("revisão-" + Usuario.username, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: MessageReacted.message.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: staffrole,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                    {
                        id: Usuario.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                ],
            }).then(c => c.setParent(categoria.id));
            MessageReacted.message.channel.send(`${Usuario}, seu ticket foi criado! Entre no canal ${(await canalzinho)} e tire suas dúvidas.`).then(m => m.delete({ timeout: 5000 }));
            break;
        case "❓":
            var canalzinho = MessageReacted.message.guild.channels.create("dúvidas-" + Usuario.username, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: MessageReacted.message.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: staffrole,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                    {
                        id: Usuario.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                ],
            }).then(c => c.setParent(categoria.id));
            MessageReacted.message.channel.send(`${Usuario}, seu ticket foi criado! Entre no canal ${(await canalzinho)} e tire suas dúvidas.`).then(m => m.delete({ timeout: 5000 }));
            break;
        case "🛡️":
            var canalzinho = MessageReacted.message.guild.channels.create("outros-assuntos-" + Usuario.username, {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: MessageReacted.message.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: staffrole,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                    {
                        id: Usuario.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                    },
                ],
            }).then(c => c.setParent(categoria.id));
            MessageReacted.message.channel.send(`${Usuario}, seu ticket foi criado! Entre no canal ${(await canalzinho)} e tire suas dúvidas.`).then(m => m.delete({ timeout: 5000 }));
            break;
        default:
            MessageReacted.message.channel.send("Este emoji não corresponde a nenhuma ação.");
            break;
    }
});
