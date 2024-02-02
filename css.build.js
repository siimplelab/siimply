const postcss = require('postcss');
const cssnano = require('cssnano');
const fs = require('fs');

fs.readFile('dist/css/main.css', (err, css) => {
    if (err) {
        console.error("Error reading the CSS file:", err);
        return;
    }

    postcss([
        // Add other PostCSS plugins here, e.g., TailwindCSS, Autoprefixer
        cssnano({
            preset: ['default', {
                discardComments: {
                    removeAllButFirst: true,
                },
            }],
        }),
    ])
    .process(css, { 
        from: 'dist/css/main.css', 
        to: 'dist/css/main.css',
        syntax: require('postcss-scss') 
    })
    .then(result => {
        const formatted = result.css.replace(/\n/g, '').replace(/}/g, '}\n');
        fs.writeFileSync('dist/css/main.css', formatted);
    })
    .catch(error => {
        console.error("Error during CSS processing:", error);
    });
});
