import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { Header } from './components/common/head/Header';
import { Home } from './components/home/Home';
import { About } from './components/About/About';
import { Course } from './components/course/Course';
import { Team } from './components/lecturer/Team';
import { Pricing } from './components/pricing/Pricing';
import { Contact } from './components/contact/Contact';
import { HomeLanding } from './components/homePage/HomeLanding';
import { SpecficCourse } from './components/course/specfic/SpecficCourse';
import {Lecture} from './components/course/Learn/Lecture';
import {Quiz} from './components/course/course-detail/quiz/QuizData';
// import {CourseDetail} from './components/course/course-detail/Coure-detail'
import CourseDetail from './components/course/course-detail/CourseDetail';
const AppContent = () => {
  const location = useLocation();

  // Determine if the current route is "/HomeLanding"
  const isHomeLandingRoute = location.pathname === '/HomeLanding';

  return (
    <div>
      {!isHomeLandingRoute && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/price" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/specfic-course" component={SpecficCourse} />
        <Route exact path="/HomeLanding" component={HomeLanding} />
        <Route exact path="/learn" component={Lecture} />
        <Route exact path="/course-detail" component={CourseDetail} />
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
