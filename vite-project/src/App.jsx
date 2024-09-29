
import './App.css'
import Profile from './components/Profile'
import userData from '../userData.json'
import friends from './friends.json'
  import FriendList from './components/FriendList'
  
  const App = () => {
    return (
      <>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          image={userData.image}
          stats={userData.stats}

        />
  <FriendList friends={friends} />
      </>
    );
  };
  

export default App
