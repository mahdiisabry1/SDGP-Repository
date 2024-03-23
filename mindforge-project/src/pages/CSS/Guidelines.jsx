import React from 'react';
import '../Guidelines.css';
function GuidelinePage() {
  return (
    <div className="container"> 
      <h1>Guidelines</h1>
      <p>Welcome to our guidelines page! Here you'll find all the information you need to follow our guidelines.</p>
      
      <h2>1. Quiz</h2>
      <p>There is a quiz in the Home page. By completing it you can get a web developper suggestion according to your answers.</p>
      
      <h2>2. MindMaps</h2>
      <p>You can choose your mindmap according to your preference and you can follow the mindmap and improve your knowledge.</p>
      <p>At there we have linked importnat tutorials and certification courses too.</p>
      <p>You can also create your own mindmap that doesnot exist in our website.</p>

      <h2>3. Certification</h2>
      <p>You are given five questions based on chosen path.</p> 
      <p>After you completing those five questions, You can get our certificate.</p>
      <p>ex: If you choose REACT, you are given five questions based on REACT</p>

      <h2>4. Read</h2>
      <p> You can share your own ideas in this community page.</p>

      <h2>4. Game Room</h2>
      <p> You can log into our game room for stress releasing and have some fun during the studies.</p>

      <h2>4. Profile</h2>
      <p> In the profile it displays your Username and Password.</p>
      <p> Also it displays the work you have done so far.</p>
      <p> ex: If you have created a mindmap by your own, it displays in the profile.</p>
      <p> ex: If you have creates a read,it displays in the profile.</p>

      <h2>4. read</h2>
      <p> You can share your own ideas in this community page.</p>

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
