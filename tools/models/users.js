import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
})

let users = mongoose.model("users",userSchema);

export function getUsers(callback) {
	users.find(callback);
}

export function addUsers(user,callback){
	users.create(user,callback);
}

export function updateUsers(id,user,options,callback){
	let query={_id:id},
		update = {
		name:user.name,
		password:user.password
	}
	users.findOneAndUpdate(query,update,options,callback);
}
export function deleteUsers(id,callback){
	let query={_id:id};
	users.remove(query,callback);
}

