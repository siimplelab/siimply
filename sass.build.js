const sass = require('sass');
const fs = require('fs');
const path = require('path');

function compileSass() {
  const srcPath = path.join(__dirname, 'src/sass/main.scss');
  const destPath = path.join(__dirname, 'src/css/main.css');

  try {
    const result = sass.compile(srcPath, { style: "compressed" });

    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.writeFileSync(destPath, result.css); // Ensure you're writing result.css
  } catch (error) {
    console.error("Sass compilation error:", error);
  }
}

if (require.main === module) {
  compileSass();
}

module.exports = compileSass;
