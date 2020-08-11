const { client } = require("../index");
client.on('ready', async () => {
    let canalticket = client.channels.cache.get("741704561269669948");
    canalticket.messages.fetch({ around: "742731240620163133", limit: 1 }).then(m => {
        const mensagempegada = m.first();
        mensagempegada.react("💰");
        mensagempegada.react("❓");
        mensagempegada.react("👾");
        mensagempegada.react("👮");
        mensagempegada.react("⛔");
        mensagempegada.react("🛡️");
    });
    console.log(`${client.user.username} foi iniciado com sucesso. Transmitindo para ${client.users.cache.size} pessoas, ${client.channels.cache.size} canais e ${client.guilds.cache.size} servidores.`);
    let status = [
        { name: `no ShazamNetwork!`, type: 'PLAYING' },
        { name: `uma musiquinha!`, type: 'LISTENING' },
        { name: `para ${client.users.cache.size} membros!`, type: 'STREAMING', url: 'https://twitch.tv/MarcosGRGames' }
    ];
    function setStatus() {
        let randomStatus = status[Math.floor(Math.random() * status.length)];
        client.user.setActivity(randomStatus);
    };
    setInterval(() => setStatus(), 5000);
});
client.login(process.env.TOKEN);
