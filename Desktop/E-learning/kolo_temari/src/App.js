import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
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
import { Page } from './components/Page';
import CourseDetail from './components/course/course-detail/CourseDetail';
import { Cart } from './components/cart/Cart';
import { RootLayout } from './components/course/Learn/RootLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<MainLayout />}>
          {/* Child routes for MainLayout */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={<Course />} />
          <Route path="team" element={<Team />} />
          <Route path="price" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="specfic-course" element={<SpecficCourse />} />
          <Route path="course-detail" element={<CourseDetail />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="try" element={<Page />} />
        </Route>
        
        {/* Routes for learning section */}
        <Route path="/learn" element={<RootLayout />}>
          <Route path="lecture" element={<Lecture />} />
        </Route>

        {/* Route for AdminDashboard */}
        <Route path="admin/*" element={<AdminDashboard />} />

        {/* Special case for the HomeLanding route without a layout */}
        <Route path="HomeLanding" element={<HomeLanding />} />
      </Routes>
    </Router>
  );
};

export default App;
