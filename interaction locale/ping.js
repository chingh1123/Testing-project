const { Client, CommandInteraction, MessageActionRow, MessageButton, Interaction } = require("discord.js");

module.exports = {
    name: "ping",
    description: `Check bot's speed`,
    cooldown: 10000,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let locales = {
            "en-GB": `Pong! Bot speed: ${client.ws.ping} ms!`,
            "zh-TW": `碰！机器人速度：${client.ws.ping} ms！`
        }

        await interaction.followUp(`${locales[interaction.locale]}`)
    },
};
