import plumber from 'gulp-plumber'; // Обробка помилок
import notify from 'gulp-notify'; // Повідомлення про помилки
import chalk from 'chalk';

class Logger {
	handleError(taskName) {
		return plumber({
			errorHandler: notify.onError({
				title: taskName,
				message: 'Error: <%= error.message %>',
			}),
		});
	};

	warning(message) {
		console.log(chalk.bold.white.bgGreenBright(message));
	}

	error(message, errors = []) {
		console.log(chalk.bold.white.bgRed(message), errors);
	}
}

export const logger = new Logger();