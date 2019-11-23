import React, {Component} from 'react';
import {withProvider} from './BountiesProvider';


class BountyForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            living: true,
            bountyAmount: '',
            typePerson: '',
        }
    }
    componentDidMount(){
        if(this.props.type === 'update'){
            let {firstName, lastName, living, bountyAmount, typePerson} = this.props.bounty
            this.setState({firstName, lastName, living, bountyAmount, typePerson})
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add/get'){
            this.props.handleNewBounty(this.state)
        } else {
            this.props.handleEdit(this.props.bounty._id, this.state)
            this.props.toggle()
        }
    }

    render(){
        return(
            <div className='BountyForm'>
                <form onSubmit={this.handleSubmit} className={this.props.type === 'add/get' ? 'bounty-submit' : 'edit-bounty'}>
                    <input type='text'
                        placeholder='First Name'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        />
                    <input type='text'
                        placeholder='Last Name'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        />
                    {/* <input type='text'
                        placeholder='Living'
                        name='living'
                        value={this.state.living}
                        onChange={this.handleChange}
                    /> */}
                    <input type='text'
                        placeholder='Bounty Amount'
                        name='bountyAmount'
                        value={this.state.bountyAmount}
                        onChange={this.handleChange}
                    />
                    <input type='text'
                        placeholder='Person Type'
                        name='typePerson'
                        value={this.state.typePerson}
                        onChange={this.handleChange}
                    />
                    <button className='formButton'>{this.props.button}</button>
                </form>
            </div>
        )
    }
}

export default withProvider(BountyForm)