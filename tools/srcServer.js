import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as users from './models/users';

const port = 3000;
const app = express();
const compiler = webpack(config);
mongoose.connect('mongodb://localhost/users');
let db = mongoose.connection;

app.use(bodyParser.json());

/* eslint-disable no-console */

app.get('/api/users',function(req,res) {
	users.getUsers(function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.post('/api/users',function(req,res) {
	let user = req.body;

	users.addUsers(user,function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.put('/api/users/:id',function(req,res) {
	let id=req.params.id,
		user = req.body;

	users.updateUsers(id,user,{},function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.delete('/api/users/:id',function(req,res) {
	let id=req.params.id;
	users.deleteUsers(id,function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
	}
});
