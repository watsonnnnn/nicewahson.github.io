var mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/test');
var goodsSchema = Schema({
	id:String,
	type:String,
	price:Number
});
var Goods = mongoose.model('goods',goodsSchema);
var good = new Goods({type:'xxx',price:200});
good.save(function(err){
	if(err)
		console.log('error'+err);
	else{
		console.log('添加成功');
	}
});