import { listenerCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/usersSelectors';
export const UserPage = () => {
  const users = useSelector(selectUsers);
    return
    <ul>
        {
            users.map(user => <li key={user.id}>
                
            </li>)
    </ul>;
};
