const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'dino',
    aliases: ["dinochrome"],
    category: 'Extras',
    description: 'Shows the Dino from the No internet chrome',
    permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'EMBED_LINKS'],
    cooldown: '30s',
    testOnly: false,

    callback: async ({ client, message, args }) => {

        if (message.deletable) {
            message.delete;
        }

        try {
            let msg = await message.channel.send(`---------------🦖`)
            let time = 1 * 1000

            setTimeout(function () {
                msg.edit(`-----------🦖----`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`----------🦖------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`--------🦖--------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`------🦖-----------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`-------🦖-----------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`---🌵-----🦖---------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`---🌵-🦖-------------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`🦖\n ---🌵--------------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`------🦖---🌵--------------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`----🦖-----🌵----------------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`-🌵🌵-----🦖-------🌵--------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`----🌵🌵-🦖----------🌵------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`🦖\n ---🌵🌵-------------🌵---`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`-----🦖---🌵🌵-------------🌵--`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`-------🦖-----🌵🌵-------------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`🎂----🦖--------🌵🌵-----------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`---🎂--🦖----------🌵🌵---------`).catch(x => x.return);
            }, time)
            time += 1.5 * 1000

            setTimeout(function () {
                msg.edit(`**:regional_indicator_m::regional_indicator_i::regional_indicator_s::regional_indicator_s::regional_indicator_i::regional_indicator_o::regional_indicator_n:    :regional_indicator_c::regional_indicator_o::regional_indicator_m::regional_indicator_p::regional_indicator_l::regional_indicator_e::regional_indicator_t::regional_indicator_e::regional_indicator_d: !**\n ---🎂🦖----------🌵🌵-------------`).catch(x => x.return);
            }, time)

        } catch {
            return;
        }
    }
}
