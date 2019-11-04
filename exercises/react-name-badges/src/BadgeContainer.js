import React from 'react';
import Badges from './Badges';

function BadgeContainer(props){
    console.log(props)
    const mappedPeopleBadges = props.badges.map((badge, i) => <Badges key={i + badge.firstName}
                                                                        color={i}
                                                                        firstName={badge.firstName}
                                                                        lastName={badge.lastName}
                                                                        email={badge.email}
                                                                        placeOfBirth={badge.placeOfBirth}
                                                                        phone={badge.phone}
                                                                        favoriteFood={badge.favoriteFood}
                                                                        tellUs={badge.tellUs}
                                                                        />)
                                                                   
return (
    <div>
        {mappedPeopleBadges}
    </div>
    );
}
export default BadgeContainer