const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-tag/loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources', 'js'),
        },
    },
};
