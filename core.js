const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS],  allowedMentions: { parse: ['users', 'roles'], repliedUser: true }  });
client.on("messages", (messages)=>{

})
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'slashcommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === 'ping') {
		// Create the modal
		const modal = new Modal()
			.setCustomId('myModal')
			.setTitle('My Modal');
		// Add components to modal
		// Create the text input components
		const favoriteColorInput = new TextInputComponent()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your favorite color?")
		    // Short means only a single line of text
			.setStyle('SHORT');
		const hobbiesInput = new TextInputComponent()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
		    // Paragraph means multiple lines of text.
			.setStyle('PARAGRAPH');
		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new MessageActionRow().addComponents(favoriteColorInput);
		const secondActionRow = new MessageActionRow().addComponents(hobbiesInput);
		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow);
		// Show the modal to the user
		await interaction.showModal(modal);
	}
});

let DatabaseManager = require("./databasemanager.js")
DatabaseManager.init().then(() => {
    client.login(token);
})
