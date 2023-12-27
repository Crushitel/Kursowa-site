import replace from 'gulp-replace'; // Пошук і заміна
import browserSync from 'browser-sync'; // Локальний сервер
import newer from 'gulp-newer'; // Перевірка на новішу версію файлу
import ifPlugin from 'gulp-if'; // Умовний розгалужувач

const concatPathAndFileName = (path, files) => {
  return files.map((file) => `${path}/${file}`);
};

export const plugins = {
  if: ifPlugin,
  replace,
  browserSync,
  newer,
  concat: concatPathAndFileName
};
