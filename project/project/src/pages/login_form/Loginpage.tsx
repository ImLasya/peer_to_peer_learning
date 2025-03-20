

// loginpage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from './wrapper';
import * as Components from '../login_form/components';

function AuthPage() {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during signup');
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <PageWrapper>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignup}>
            <Components.Title>CREATE ACCOUNT</Components.Title>
            <Components.Input 
              type="text" 
              placeholder="Name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Components.Input 
              type="email" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Components.Input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Components.Button type="submit">SIGN UP</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>SIGN IN</Components.Title>
            <Components.Input 
              type="email" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Components.Input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button type="submit">SIGN IN</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>WELCOME BACK!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                SIGN IN
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>HELLO, FRIEND!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start your journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                SIGN UP
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </PageWrapper>
  );
}

export default AuthPage;