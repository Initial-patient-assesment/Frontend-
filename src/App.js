

import Registration from './components/registration';
import FlipBook from './components/medicalCard';
import Main from './components/logged';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

      
function App() {


  return (
  <div>
<Routes> 
 <Route path ="/" element =   {<Registration/>}/>
 <Route path = "/main" element = {<Main/>}/>
      </Routes>
      </div>
  );
}

export default App;
