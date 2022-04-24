const { MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu } = require('discord.js');

module.exports = {
  name: 'dropdown',
  description: 'dropdown roles',

  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      .setTitle("Dropdown Reaction Role")
      .setColor("GREEN")
      .setDescription("Click on the menu below to get self role ")

    const nv = new MessageActionRow().addComponents(
      new MessageSelectMenu({
        placeholder: 'Click on the button to claim the roles',
        disabled: false,
        customId: 'rr',
        options: [
          {
            label: '',
            value: "update",
            description: '',
            emoji: '',
          },
          {
            label: '',
            value: "announcement",
            description: '',
            emoji: '',
          },
        ]
      }),
    );

    let dropdown = await message.channel.send({ components: [nv], embeds: [embed] });
    message.delete();

    const collector = await dropdown.createMessageComponentCollector({
      componentType: 'SELECT_MENU',
    })

    collector.on('collect', async menu => {
      if (menu.values[0] === 'update' || menu.values[1] === 'update') {
        if (menu.member.roles.cache.has('ROLE_ID')) {
          menu.member.roles.remove('ROLE_ID')
          menu.reply({ content: 'I removed <@&ROLE_ID> from you.', ephemeral: true })
        } else {
          menu.member.roles.add('ROLE_ID')
          menu.reply({ content: 'I added <@&ROLE_ID> to you.', ephemeral: true })
        }
      }
      if (menu.values[0] === 'announcement' || menu.values[1] === 'announcement') {
        if (menu.member.roles.cache.has('ROLE_ID2')) {
          menu.member.roles.remove('ROLE_ID2')
          menu.reply({ content: 'I removed <@&ROLE_ID2> from you.', ephemeral: true });
        } else {
          menu.member.roles.add('ROLE_ID2')
          menu.reply({ content: 'I added <@&ROLE_ID2> to you.', ephemeral: true });
        }
      }
    })
  }
}
