
import './App.css';
import UserSignUp from "../UserSignUp/UserSignUp"
import { useSelector } from "react-redux"
import ChatWindow from '../ChatWindow/ChatWindow';
function App() {
  const userData=useSelector((state)=>state.userData.userData)
  return (
  <>
   {userData.idInstance===""||userData.apiTokenInstance===""?<UserSignUp/>:<ChatWindow/>}
  </>
  );
}

export default App;
