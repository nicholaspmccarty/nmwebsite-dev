import React from 'react'; 

const App = () => {
  return (
    <div className="landing-page">
      <h1>BIENVENIDOS a nicholasmccarty.dev</h1>
      <p>Check out my socials and things that interest me.</p>
      
      <div className="social-links">
        <a href="https://github.com/nicholaspmccarty" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/nmccarty2" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram Logo" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
