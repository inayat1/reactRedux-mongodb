import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import routes from "./routes";
import "./styles/styles.css";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";

//To activate Redux devtool extension on browser
const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>{routes}</BrowserRouter>
	</Provider>, document.getElementById("app")
);
