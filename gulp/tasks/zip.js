import gulp from 'gulp';
import zipPlugin from 'gulp-zip';

import { deleteAsync } from 'del';
import { filePaths } from '../config/paths.js';
import { logger } from "../config/Logger.js";

const zip = () => {
  deleteAsync(`./${filePaths.projectDirName}.zip`)
    .then(() => logger.warning('Прошлый ZIP архив успешно удалён'));

  return gulp.src(`${filePaths.buildFolder}/**/*.*`, {})
    .pipe(logger.handleError('ZIP'))
    .pipe(zipPlugin(`${filePaths.projectDirName}.zip`))
    .pipe(gulp.dest('./'));
};

export { zip };