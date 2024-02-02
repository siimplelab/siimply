const chokidar = require('chokidar');
const compileSass = require('./sass.build');

const watcher = chokidar.watch('src/sass/**/*.scss', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher.on('change', path => {
  console.log(`File ${path} has been changed. Compiling Sass...`);
  compileSass();
});

console.log('Watching for Sass/SCSS file changes...');
