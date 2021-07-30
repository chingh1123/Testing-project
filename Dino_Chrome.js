const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'dinochrome',
    category: 'Fun Command',
    cooldown: 5000,

    run: async (client, message, args) => {

        let msg = await message.channel.send(`-----------------🦖`)
        let time = 1 * 1000

        setTimeout(function () {
            msg.edit(`-----------🦖-----`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`----------🦖-------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`--------🦖---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`------🦖-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`-------🦖-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`---🌵-----🦖---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`---🌵-🦖--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`ㅤ🦖\n\n ---🌵--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`🦖\n ---🌵--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`------🦖---🌵--------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`----🦖-----🌵----------------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`-🌵🌵-----🦖-------🌵--------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`----🌵🌵-🦖----------🌵------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`ㅤ🦖\n\n ---🌵🌵-------------🌵---`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`🦖\n ---🌵🌵-------------🌵---`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`-----🦖---🌵🌵-------------🌵--`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`🎂----🦖--------🌵🌵-----------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`---🎂--🦖----------🌵🌵---------`)
        }, time)
        time += 1.5 * 1000

        setTimeout(function () {
            msg.edit(`<a:793364759101571072:862859342919368766> 𝗠𝗶𝘀𝘀𝗶𝗼𝗻 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱! <a:793364759101571072:862859342919368766>\n ---🎂🦖----------🌵🌵-------------`)
        }, time)
    }
}
