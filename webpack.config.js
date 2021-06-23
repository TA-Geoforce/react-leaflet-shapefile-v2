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
        leaflet: {
            commonjs: 'leaflet',
            commonjs2: 'leaflet',
            root: 'L'
        },
        'react-leaflet': {
            commonjs: 'react-leaflet',
            commonjs2: 'react-leaflet',
            root: 'ReactLeaflet'
        },
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            root: 'React'
        }
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