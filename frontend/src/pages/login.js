import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.endsWith('@wgu.college')) {
      // Proceed with login logic
      alert('Login successful!');
    } else {
      setError('Only students with an @wgu.college email can log in.');
    }
  };

  return (
    <div>
      <header>
        <h1>Login to WGU eLearning</h1>
        <p>Welcome back! Please log in to continue your learning journey.</p>
      </header>

      <section>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Student Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn">Log In</button>
        </form>
      </section>
    </div>
  );
};

export default Login;

