import gulp from 'gulp';
import fs from 'fs';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

import { filePaths } from '../config/paths.js';
import { logger } from '../config/Logger.js';

const {fontFacesFile} = filePaths.src;
const italicRegex = /italic/i;
const cleanSeparator = /(?:_|__|-|\s)?(italic)/i;

const fontWeights = {
	thin: 100,
	hairline: 100,
	extralight: 200,
	ultralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	demibold: 600,
	bold: 700,
	extrabold: 800,
	ultrabold: 800,
	black: 900,
	heavy: 900,
	extrablack: 950,
	ultrablack: 950
};

const fontFaceTemplate = (name, file, weight, style) => `@font-face {
	font-family: ${name};
	font-display: swap;
	src: url("../fonts/${file}.woff2") format("woff2");
	font-weight: ${weight};
	font-style: ${style};
}\n`;

const otfToTtf = (done) => {
	if (fs.existsSync(fontFacesFile)) return done();
	/** Пошук шрифтів .otf */
	return gulp.src(`${filePaths.src.fonts}/*.otf`, {})
		.pipe(logger.handleError('FONTS [otfToTtf]'))

		/** Конвертація в .ttf */
		.pipe(fonter({formats: ['ttf']}))

		/** Вивантаження у вихідну папку */
		.pipe(gulp.dest(filePaths.src.fonts));
};

const ttfToWoff = () => {
	if (fs.existsSync(fontFacesFile)) {
		return gulp.src(`${filePaths.src.fonts}/*.woff2`, {})
			.pipe(logger.handleError('FONTS [ttfToWoff]'))
			.pipe(gulp.dest(filePaths.build.fonts));
	}

	/** Пошук шрифтів [.ttf] та конвертація в [.woff2] */
	return gulp.src(`${filePaths.src.fonts}/*.ttf`, {})
		.pipe(logger.handleError('FONTS [ttfToWoff]'))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(filePaths.src.fonts))

		/** Якщо потрібно розкоментувати. Конвертація у [.woff] */
		//.pipe(gulp.src(`${filePaths.src.fonts}/*.ttf`))
		//.pipe(fonter({ formats: ['woff'] }))
		//.pipe(gulp.dest(filePaths.build.fonts))

		/** Пошук шрифтів [.woff, .woff2] та вивантаження у фінальну папку */
		.pipe(gulp.src(`${filePaths.src.fonts}/*.{woff,woff2}`))
		.pipe(gulp.dest(filePaths.build.fonts));
};

const fontStyle = async () => {
	try {
		if (fs.existsSync(fontFacesFile)) {
			logger.warning('Файл scss/config/fonts.scss вже існує.\nДля оновлення файлу його необхідно видалити!');
			return;
		}

		const fontFiles = await fs.promises.readdir(filePaths.build.fonts);

		if (!fontFiles) {
			logger.error('Немає сконвертованих шрифтів!');
			return;
		}

		await fs.promises.writeFile(fontFacesFile, '');
		let newFileOnly;

		for (const file of fontFiles) {
			const [fileName] = file.split('.');

			if (newFileOnly !== fileName) {
				const [name, weight = 'regular'] = fileName.split('-');
				const weightString = fontWeights[weight.replace(cleanSeparator, '').toLowerCase()];
				const fontStyle = italicRegex.test(fileName) ? 'italic' : 'normal';

				await fs.promises.appendFile(fontFacesFile, fontFaceTemplate(name, fileName, weightString, fontStyle));
				newFileOnly = fileName;
			}
		}
	} catch (err) {
		logger.error('Помилка при обробці шрифтів:\n', err);
	}
};

export { otfToTtf, ttfToWoff, fontStyle };
