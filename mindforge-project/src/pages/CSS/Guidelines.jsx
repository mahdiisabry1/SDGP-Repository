import React from 'react';
import '../Guidelines.css'; // Import CSS file for custom styles

// Define the GuidelinePage component
function GuidelinePage() {
  return (
    <div className="container"> 
      {/* Main heading */}
      <h1>Guidelines</h1>
      {/* Introduction */}
      <p>Welcome to our guidelines page! Here you'll find all the information you need to follow our guidelines.</p>
      
      {/* Section 1: Quiz */}
      <h2>1. Quiz</h2>
      <p>There is a quiz in the Home page. By completing it you can get a web developer suggestion according to your answers.</p>
      
      {/* Section 2: MindMaps */}
      <h2>2. MindMaps</h2>
      <p>You can choose your mind map according to your preference and you can follow the mind map and improve your knowledge.</p>
      <p>At there we have linked important tutorials and certification courses too.</p>

      {/* Section 3: Certification */}
      <h2>3. Certification</h2>
      <p>You are given five questions based on the chosen path.</p> 
      <p>After you complete those five questions, You can get our certificate.</p>
      <p>ex: If you choose REACT, you are given five questions based on REACT</p>

      {/* Section 4: Read */}
      <h2>4. Read</h2>
      <p>You can share your own ideas on this community page.</p>

      {/* Section 5: Game Room */}
      <h2>5. Game Room</h2>
      <p>You can log into our game room for stress release and have some fun during the studies.</p>

      {/* Section 6: Profile */}
      <h2>6. Profile</h2>
      <p>In the profile, it displays your Username and Password.</p>
      <p>Also, it displays the work you have done so far.</p>
      <p>ex: If you have created a mind map by your own, it displays in the profile.</p>
      <p>ex: If you have created a Post, it displays in the profile.</p>

      {/* Section 7: Additional Guidelines */}
      <div className="additional-guidelines">
        <h2>1. Be Respectful</h2>
        <p>Respect other users and their opinions. Avoid offensive language and behavior.</p>
        
        <h2>2. Follow Community Standards</h2>
        <p>Adhere to our community standards and rules. Any violation may result in consequences.</p>
        
        <h2>3. Quality Content</h2>
        <p>Contribute high-quality content that adds value to the community. Avoid spam and irrelevant posts.</p>
        
        <h2>4. Privacy</h2>
        <p>Respect the privacy of others. Do not share personal information without consent.</p>
      </div>
    </div>
  );
}

export default GuidelinePage;
