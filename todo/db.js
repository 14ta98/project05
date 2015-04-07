//各ライブラリを読み込む
var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
// 内容
var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});
mongoose.model( 'Todo', Todo );
// localhostのtodolistというデータベースに接続
mongoose.connect( 'mongodb://localhost/express-todo' );