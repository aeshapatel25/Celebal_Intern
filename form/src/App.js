import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = 'Please enter your name';
    }
    if (!email) {
      errors.email = 'Please enter your email';
    }
    if (!title) {
      errors.title = 'Please enter a title';
    }
    if (!description) {
      errors.description = 'Please enter a description';
    }
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setName('');
        setEmail('');
        setTitle('');
        setDescription('');
      }, 3000);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="container">
      <h1>Task Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      {showAlert && (
        <div className="alert">
          Task submitted successfully!
        </div>
      )}
    </div>
  );
};

export default App;
