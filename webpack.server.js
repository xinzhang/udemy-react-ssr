const path = require('path');

module.exports = {

    //informa webpack we are buding bundle for nodeJS rather than browser
    target: 'node',

    //the root file of our server application
    entry: './src/index.js',

    //where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    //run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', 
                        'stage-0',
                        ['env', {
                            targets: { browsers: ['last 2 versions']}
                        }]
                    ]
                }
            }
        ]
    }
    
};