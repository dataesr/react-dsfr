const path = require('path');
module.exports = {
    components: 'src/components/**/[A-Z]*.js',
    styleguideComponents: {
        Wrapper: path.join(__dirname, './styleguide/Wrapper')
    }
};
