import webpack from "webpack";
import path from "path";

export default {
	devtool: "inline-source-map",
	entry: [
		"eventsource-polyfill", // necessary for hot reloading with IE
		"webpack-hot-middleware/client?reload=true", //note that it reloads the page if hot module reloading fails.
		path.resolve(__dirname, "src/index")
	],
	target: "web",
	output: {
		path: __dirname + "/dist", // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: "/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.resolve(__dirname, "src")
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			include: path.join(__dirname, "src"),
			loaders: ["babel-loader"]
		},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	}
};
