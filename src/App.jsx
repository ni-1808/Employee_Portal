
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyProfile from './pages/CompanyProfile';
import PostJob from './pages/PostJob';
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import SearchBar from './components/SearchBar';

import Settings from "./pages/Settings";

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };
  return (
    
    <Router>
      
      <Routes>google
      <Route element={<Layout />}>
      <Route path="/Searchbar"element= {<SearchBar/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
          <Route path="/company" element={<CompanyProfile />} />
          <Route path="/settings" element={<Settings />} />
        <Route path="/company/:id" element={<CompanyProfile />} />
        <Route path="/post-job" element={<PostJob />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


