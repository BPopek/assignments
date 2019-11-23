import React, {Component} from 'react';
import BountyForm from './BountyForm'
import { withProvider } from './BountiesProvider'

class Bounty extends Component {
    constructor(){
        super()
        this.state = {
            // firstName: '',
            // lastName: '',
            // living: true,
            // typePerson: '',
            // bountyAmount: '',
            toggled: true,
        }
    }    
    toggle = () => {
        this.setState(prevState => {
            return{
                toggled: !prevState.toggled
            }
        })
    }

    render(){
        const {firstName, lastName, living, typePerson, bountyAmount, _id} = this.props.info

        return(
            <div className='BountyContainer'>
                {this.state.toggled ? 
                    <div className='BountyList'>
                        <h2 className='BountyName'>
                            {firstName} {lastName}</h2>
                        <div className='BountySpacing'>
                            <h3 className='BountyLiving'>
                                <p className='BountyLabel'>Status: </p>
                                    {living ? 'Alive' : 'Dead'}</h3>
                        </div>
                        <div className='BountySpacing'>
                            <h3 className='BountyTypePerson'>
                                <p className='BountyLabel'>Order: </p>
                                    {typePerson}</h3>
                        </div>
                        <div className='BountySpacing'>
                            <h4 className='BountyPrice'>
                                <p className='BountyLabel'>Reward: </p>
                                    ${bountyAmount}</h4>
                        <button onClick={() => this.props.handleDelete(_id)}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                    </div>
                    :
                    <BountyForm button='Save Changes' type='update' id='SaveChangesButton' bounty={this.props.info} toggle={this.toggle} />
                }
            </div>
        )
    }
}

export default withProvider(Bounty);