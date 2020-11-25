// 本页面专门 连接数据库的

const mongoose  =require('mongoose')


const linkedDb = (() => {
    // 连接本地数据库
    mongoose.connect('mongodb://localhost:27017/xingbake', { useNewUrlParser: true })

    mongoose.connection.on("connected", ()=>{
		console.log("MongoDB Connected Success!");
	});

	mongoose.connection.on("error", ()=>{
		console.log("MongoDB Connected Failed!");
	});

	mongoose.connection.on("disconnected", ()=>{
		console.log("MongoDB Disconnected!");
	});
})();


module.exports = linkedDb