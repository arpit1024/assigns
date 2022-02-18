import {Route,Routes} from 'react-router-dom' //importing Route and Routes from react Router
// Link Tag from react Router replaces anker tag to switch pages without loading..
<Navbar />    // Fixed No Need To load every Time page changes
<Routes>           
  <Route path="/" element={<Todos />}></Route>  //These Content are changing every time page switches  
  <Route                                        //Whole content is loaded at once than no need to load every time 
                                                 
    path="/Total"    
    element={ 
        <Total />    
    }
  ></Route> 
  <Route path="/login" element={<Login />}></Route>
</Routes>