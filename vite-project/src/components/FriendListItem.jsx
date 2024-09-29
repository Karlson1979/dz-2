import React from 'react'

const FriendListItem = ({avatar,name,isOnline}) => {
  return (
    <div>
  <img src={avatar} alt={avatar} width="48" />
  <p>Friend name: {name}</p>
  <p style={{ color: isOnline ? 'green' : 'red' }}>
  Friend status: {isOnline ? 'Online' : 'Offline'}
</p>

</div>
  )
}

export default FriendListItem