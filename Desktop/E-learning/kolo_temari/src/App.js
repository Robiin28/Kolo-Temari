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
import { Lecture } from './components/course/Learn/Lecture';
import { Quiz } from './components/course/course-detail/quiz/QuizData';
import { Profile } from './components/course/profile/profile';
import { AdminDashboard } from './components/course/admin/AdminDashboard';
import {Page} from './components/Page';
import CourseDetail from './components/course/course-detail/CourseDetail';
import {Cart} from './components/cart/Cart';
const AppContent = () => {
  const location = useLocation();

  // Determine if the current route is "/HomeLanding" or "/admin"
  const isHomeLandingRoute = location.pathname === '/HomeLanding';
  const isAdminLandingRoute = location.pathname === '/admin';
  
  // Show Header if not on HomeLanding or AdminDashboard
  const shouldShowHeader = !(isHomeLandingRoute || isAdminLandingRoute);

  return (
    <div>
      {shouldShowHeader && <Header />}
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
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/try" component={Page} />
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
