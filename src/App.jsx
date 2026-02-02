import { useState } from 'react';
import './App.css';
import SubjectList from './Components/SubjectList';

function App() {
  const Subjects = ["ReactJS", "NodeJS", "Java", "Database"];

  return (
    <div className="app-container">
      <h1>Ứng Dụng ReactJS</h1>

      <SubjectList subjects={Subjects} />
    </div>
  );
}

export default App;