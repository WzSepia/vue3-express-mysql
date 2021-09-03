module.exports = {
	devServer:{
		proxy:{
			'/api':{
				target:'http://localhost:3000/api',
				ws:true,
				changeOrigin:true,
				pathRewrite:{
					'^/api':''
				}
			}
		}
	}
}