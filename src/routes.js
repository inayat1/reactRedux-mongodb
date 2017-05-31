import React from "react";
import {Route, Switch} from "react-router-dom";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

const routes = (
	<App>
		<Switch>
			<Route name="home" exact path="/" component={HomePage} />
			<Route name="about" exact path="/about" component={AboutPage} />
			<Route name="courses" exact path="/courses" component={CoursesPage} />
			<Route name="addCourse" exact path="/course" component={ManageCoursePage} />
			<Route name="editCourse" exact path="/course/:id" component={ManageCoursePage} />
			<Route component={NotFoundPage} />
		</Switch>
	</App>
);

export default routes;
