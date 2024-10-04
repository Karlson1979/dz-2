
import './App.css'
import Profile from './components/Profile'
import userData from '../userData.json'
import friends from './friends.json'
  import FriendList from './components/FriendList'
import TransactionHistory from './components/TransactionHistory'
  import transactions from './transactions.json'
import Section from './components/Section'
  const App = () => {
    return (
      <>
  <Section title='Hello'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel, omnis vero hic culpa doloremque consequatur magnam nemo unde eos porro et expedita deleniti voluptas tempore! Praesentium ipsum consequatur sint!</p>
  </Section >
  <Section title='hi'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aspernatur cum magnam blanditiis doloribus soluta quaerat vel non delectus officiis explicabo placeat, dicta ipsam assumenda, dignissimos sit vero cumque quos.
    Iste dolorem temporibus vitae, laudantium, ut possimus totam, cum in accusantium officiis unde? Recusandae vero repellat nesciunt eaque quibusdam doloribus ducimus veniam ab voluptas ipsam, fuga aliquid id earum magni.
     aspernatur ipsam sunt id pariatur magni quam natus?
  </Section>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          image={userData.image}
          stats={userData.stats}

        />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions}/>
      </>
    );
  };
  

export default App
