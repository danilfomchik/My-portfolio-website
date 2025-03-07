import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';
import {app} from '../../gulpfile.js';

export const otfToTtf = () => {
    return app.gulp
        .src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'FONTS',
                    message: 'Error: <%= error.message %>',
                }),
            ),
        )
        .pipe(
            fonter({
                formats: ['ttf'],
            }),
        )
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
    return app.gulp
        .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'FONTS',
                    message: 'Error: <%= error.message %>',
                }),
            ),
        )
        .pipe(
            fonter({
                formats: ['woff'],
            }),
        )
        .pipe(app.gulp.dest(`${app.path.build.fonts}`))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};

export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;

    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, '', cb);
                let newFileOnly;

                for (var i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split('.')[0];

                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;

                        let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;

                        if (fontWeight.toLowerCase() === 'thin') {
                            fontWeight = 100;
                        } else if (fontWeight.toLowerCase() === 'extralight') {
                            fontWeight = 200;
                        } else if (fontWeight.toLowerCase() === 'light') {
                            fontWeight = 300;
                        } else if (fontWeight.toLowerCase() === 'medium') {
                            fontWeight = 400;
                        } else if (fontWeight.toLowerCase() === 'semibold') {
                            fontWeight = 500;
                        } else if (fontWeight.toLowerCase() === 'bold') {
                            fontWeight = 600;
                        } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
                            fontWeight = 700;
                        } else if (fontWeight.toLowerCase() === 'black') {
                            fontWeight = 900;
                        } else {
                            fontWeight = 400;
                        }
                        fs.appendFile(
                            fontsFile,
                            // eslint-disable-next-line max-len
                            `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff") format("woff"), url("../fonts/${fontFileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n\t}`,
                        );

                        newFileOnly = fontFileName;
                    }
                }
            } else {
                // eslint-disable-next-line no-console
                console.log(
                    'File scss/fonts.scss have already exist. Please remove this file if you want to update file.',
                );
            }
        }
    });

    return app.gulp.src(`${app.path.srcFolder}`);
    function cb() {}
};
