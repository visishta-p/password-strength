import React, { useState } from 'react';
import './PasswordStrengthChecker.css'; // Import CSS for styling (optional)

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const evaluateStrength = (password) => {
    let strength = '';
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [
      lengthCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      numberCriteria,
      specialCharCriteria,
    ].filter(Boolean).length;

    if (criteriaMet === 5) {
      strength = 'Strong';
    } else if (criteriaMet >= 3) {
      strength = 'Medium';
    } else {
      strength = 'Weak';
    }

    return strength;
  };

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStrength(evaluateStrength(newPassword));
  };

  return (
    <div className="password-strength-checker">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <div className={`strength-indicator ${strength.toLowerCase()}`}>
        {strength && <p>Password Strength: {strength}</p>}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
