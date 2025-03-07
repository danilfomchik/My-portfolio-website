import {app} from '../../gulpfile.js';

export const server = () => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`,
        },
        notify: false,
        port: 3000,
    });
};
