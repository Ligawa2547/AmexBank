import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.endsWith('@wgu.college')) {
      // Proceed with signup logic
      alert('Signup successful!');
    } else {
      setError('Only students with an @wgu.college email can sign up.');
    }
  };

  return (
    <div>
      <header>
        <h1>Sign Up for WGU eLearning</h1>
        <p>Join the WGU community and start your educational journey today!</p>
      </header>

      <section>
        <form onSubmit={handleSubmit}>
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
          {error && <p className="error">{error}</p>}
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </section>
    </div>
  );
};

export default Signup;

