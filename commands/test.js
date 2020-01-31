module.exports.run = async (context) => {
	await context.send(`
		Это тестовая команда для сборки бота
    Github: github.com/NickProgramm/vkbot
	`);
};
module.exports.help = {
	name: "/start"
}
