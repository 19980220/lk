const path =require('path');

module.exports={
    devServer:{
        proxy:{
            "/homefis":{
                target:"http://m.shihuo.cn",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@components":path.join(__dirname,"./src/components"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@pages":path.join(__dirname,"./src/pages"),
            }
        }
    }
}