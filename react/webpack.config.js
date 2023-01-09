const webpack = require('webpack') //webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin') //responsavel por extrair os arq css compilados

//exporta o objeto
module.exports = {
    entry: ['babel-polyfill', './src/index.jsx','regenerator-runtime/runtime.js'],
    //saida
    output: {
        path: __dirname + '/public', //saida dentro da pasta
        filename: './app.js' //arquivo de saida
    },
    //servidro
    devServer: {
        port: 8082,
        contentBase: './public', //ler o conte+éudo
        historyApiFallback: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], //extensão para interpretação
        //apelidos
        alias: {
            modules: __dirname + '/node_modules', 
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        //referencias para o JQuery
        new webpack.ProvidePlugin ({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' //variavel global do Jquery
        }),
        new ExtractTextPlugin('app.css') //aponta a classe de css
    ],
    module: {
        //loaders
        loaders: [{
            test: /.js[x]?$/, //arquivos js e jsx, jsx como padrão
            loader: 'babel-loader', 
            exclude: /node_modules/, //excluir
            //presets para passar pelos arq js e jsx
            query: {
                presets: ['es2015','stage-0' , 'react'], 
                plugins: ['transform-object-rest-spread', 'transform-async-to-generator', 'transform-runtime'] //operadores spread
            }
        },{
            //loader para css
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            //loader para arquivos, fontes e extensão de arquivos
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}