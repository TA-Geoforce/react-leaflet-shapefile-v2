/* eslint-disable */
module.exports = {
	entry: './src/index.js',
	output: {
		library: {
			root: 'ReactLeafletShapeFile',
			amd: 'react-leaflet-ShapeFile',
			commonjs: 'react-leaflet-ShapeFile'
		},
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	externals: {
		debug: 'debug',
	},
	mode: 'production',
	module: {
		rules: [
            {
                test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
					  presets: ["@babel/preset-env"],
					}
				  },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
	}
};