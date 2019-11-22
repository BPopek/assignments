import React, {Component} from 'react'
// import bounties from './BountiesArray'
import {withProvider} from './BountiesProvider'
import Bounty from './Bounty'

class BountyContainer extends Component {
    componentDidMount(){
        this.props.handleGet()
    }

    render(){
        // const mappedBounties = this.props.bounties.map(bounty => <Bounty key={bounty._id}
        //                                                                 firstName={bounty.firstName} 
        //                                                                 lastName={bounty.lastName}
        //                                                                 living={bounty.living}
        //                                                                 bountyAmount={bounty.bountyAmount}
        //                                                                 typePerson={bounty.typePerson}
        //                                                                 _id={bounty._id}
        //                                                                 />)

        const mappedBounties = this.props.bounties.map(bounty => <Bounty info={bounty}
                                                                        />)
        return(
            <div className='BountyMapList'>
                {mappedBounties}
            </div>
        )
    }
}

export default withProvider(BountyContainer);