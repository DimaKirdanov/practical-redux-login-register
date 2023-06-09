import { Route, Routes } from 'react-router-dom';
import { LayOut } from './LayOut/LayOut';
import { HomePage } from './pages/HomePage/HomePage';
import { UsersPage } from './pages/UsersPage/UsersPage';

export const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />}/>
            <Route path = "/users" element = {<UsersPage/>} />

          </Route>
        
      </Routes>
    
  );
};
