import React, { useState } from 'react';
import './index.css';
import { Messages } from '../models/message';

function App() {
  const [textSelectedDetails, setTextSelectedDetails] = useState<string>('hello world');

  React.useEffect(() => {
    console.log('App Mounted');
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      console.log(`App Says: ${type} ${message}`);
      if (type === Messages.CREATE_CIRCLE) {
        console.log(`Figma Says: ${message}`);
      }
      if (type === Messages.TEXT_SELECTED) {
        setTextSelectedDetails(message);
      }
    };
  }, []);

  return (
    <div>
      <pre>
       {textSelectedDetails}
      </pre>
    </div>
  );
}

export default App;