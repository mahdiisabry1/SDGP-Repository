// App.js
import React from 'react';
import QuestionSurvey from './QuestionSurvey';

const App = () => {
  return (
    <React.Suspense
      fallback={<div>Loading...</div>}
      errorElement={(error) => (
        <div className="error-container">
          <h2>Oops! Something went wrong.</h2>
          <p>We apologize for the inconvenience. Please try again later.</p>
          <pre>{error.message}</pre>
        </div>
      )}
    >
      <QuestionSurvey />
    </React.Suspense>
  );
};

export default App;