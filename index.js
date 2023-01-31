var fs = require('fs');
var path = require('path');

//要遍历的文件夹所在的路径
var filePath = path.resolve('src/');

//调用文件遍历方法
fileDisplay(filePath);

fs.writeFile('./hello.json','',(err)=>{
	if(err){
		throw err;
	}
	console.log('创建成功~');
	console.log('https://hello.mh77.love');
})

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
	var arr={'HelloPicture':'index.html'}
    fs.readdir(filePath, (err, files)=>{
        if (err) {
            console.warn(err, "读取文件夹错误！")
        } else {
            //遍历读取到的文件列表
            files.forEach((filename)=>{
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir, (eror, stats)=>{
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile(); //是文件
                        var isDir = stats.isDirectory(); //是文件夹
                        if (isFile) {
                            console.log(filedir);
							var key=filedir.substring(filedir.lastIndexOf('\\')+1,filedir.length)
							var val=filedir.substring(filedir.lastIndexOf('\\src')+1,filedir.length)
							arr[key]=val
							fs.writeFileSync('./hello.json',JSON.stringify(arr),{'encoding':'utf-8'},(err)=>{
								if(err){
									throw err;
								}
							})
                        }
                        if (isDir) {
                            fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}