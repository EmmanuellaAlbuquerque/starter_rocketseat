module.exports = {
    // arquivo principal
    entry: ['@babel/polyfill' ,'./src/main.js'],
    // arquivo que deve-se enviar o código convertido
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        // caminho para onde se deve abrir o servidor
        // da aplicação
        contentBase: __dirname + '/public'
    },
    module: {
        // como o webpack deve se comportar, quando o 
        // usuário estiver tentando importar novos
        // arquivos .js
        rules: [
            {
                // -> / / expressão regular
                // $ -> representa no final
                test: /\.js$/,
                exclude: /node_modules/,
                exclude: /modulo1/,
                exclude: /modulo2/,
                exclude: /modulo3/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
}