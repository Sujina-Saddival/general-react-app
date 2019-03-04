import React, { useState } from 'react';


function App() {
  const [userName, setUserName] = useState('Venkatesh')
  return(
    <div>
      sample {userName}
    </div>
    )
}

export default App;
