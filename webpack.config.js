const webpack = require('webpack');
//Html压缩，js替换等
const HtmlWebpackPlugin = require('html-webpack-plugin');
//分离CSS和JS文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//css加前缀
const autoprefixer = require('autoprefixer');

//环境信息
const isProd = process.env.NODE_ENV === 'production';
const minPostfix = isProd ? 'min' : '';
//const hash = '[hash:7]';
const hash = '[chunkhash:7]'; //9514a1c


module.exports = {
    devtool: !isProd ? 'eval-source-map' : false,
    //入口
    entry: './app/js/app.js',
    output: {//输出
        path: __dirname + '/dist',
        publicPath: '/',
        filename: `app${hash}.${minPostfix}.js`,
    },
    devServer: {
        contentBase: __dirname + '/dist',
        inline: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            },
        }),//缩小react
        new webpack.BannerPlugin(`build: ${new Date().toString()}`),//js添加版权，公司等注释信息
        new webpack.optimize.UglifyJsPlugin(),//压缩JS代码；
        new ExtractTextPlugin(`css/style.${hash}.${minPostfix}.css`, {
            allChunks: true,
        }),//分离CSS和JS文件
        new HtmlWebpackPlugin({
            template: './app/app.html',
            prod: isProd,
            minify: isProd ? {
                removeComments: true,
                collapseWhitespace: true,
            } : null,
        })
    ],
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/, //js编译打包
                loaders: ["babel-loader"]
            },
            {
                test: /(\.css|\.scss)$/, //样式编译打包
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: isProd,
                                sourceMap:!isProd
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    //https://github.com/ai/browserslist#queries
                                    autoprefixer({browsers: ['> 10%', 'ie > 8']})
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader' //要放在postcss-loader 后面
                        }
                    ]
                })
            },
            //配置字体文件加载到css文件
            {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {mimetype: 'image/svg+xml'}
            },
            {
                test: /\.woff$/,
                loader: 'url-loader',
                options: {mimetype: 'application/font-woff'}
            },
            {
                test: /\.woff2$/,
                loader: 'url-loader',
                options: {mimetype: 'application/font-woff2'}
            },
            {
                test: /\.[ot]tf$/,
                loader: 'url-loader',
                options: {mimetype: 'application/octet-stream'}
            }
        ]
    }
};