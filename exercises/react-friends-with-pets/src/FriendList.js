import React from 'react'
import friendInfo from './friends.json'
import Friend from './Friend'
// import Pet from './Pet'

const FriendListContainer = () => {
    const mappedFriends = friendInfo.map(((friend, i) => <Friend key={i + friend.name}
                                                            name={friend.name}
                                                            age={friend.age}
                                                            pets={friend.pets}
                                                            />))
    return (
        <div className='friend-container'>
            {mappedFriends}
        </div>
    )
}


export default FriendListContainer