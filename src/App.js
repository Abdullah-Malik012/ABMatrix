// src/App.js
import React from 'react';
import Sidebar from './components/Nav/Sidebar';
import TopNavbar from './components/Nav/TopNavbar';
import Landing from './screens/Landing';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div>
      <TopNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar sidebarOpen={sidebarOpen} />
      <Landing />
    </div>
  );
}

export default App;
