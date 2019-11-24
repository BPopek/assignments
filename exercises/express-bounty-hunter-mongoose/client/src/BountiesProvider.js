import React, {Component} from 'react';
import axios from 'axios'
const {Provider, Consumer} = React.createContext()

class BountiesProvider extends Component {
    constructor(){
        super()
        this.state = {
            bounties: [],
        }
    }
   
    handleGet = () => {
        axios.get('/bounties').then(res => {
            this.setState({bounties:res.data})
        })
        .catch(err => console.log(err))
    }

    handleNewBounty = newBounty => {
        axios.post('/bounties', newBounty).then(res => {
            this.setState(prev => {
                return {bounties: [...prev.bounties, res.data]}
            })
        })
        .catch(err => console.log(err))
    }

    // handleEdit = (id, updatedBounty) => {
    //     axios.put('/bounties/' + id, updatedBounty).then(res => {
    //         this.setState({ bounties: res.data })
    //         })  
    // }
    handleEdit = (id, updatedBounty) => {
        axios.put('/bounties/' + id, updatedBounty).then(res => {
            this.handleGet()
            })  
            .catch(err => console.log(err))
    }

    handleDelete = (id) => {
        axios.delete('/bounties/' + id).then(res => {
            this.handleGet()
        })  
        .catch(err => console.log(err))
    }

    render(){
        return(
            <Provider value={{
                ...this.state,
                handleGet: this.handleGet,
                handleEdit: this.handleEdit,
                handleDelete: this.handleDelete,
                handleNewBounty: this.handleNewBounty
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default BountiesProvider

export const withProvider = Comp => props => (
    <Consumer>
        {value => <Comp {...value}{...props} />}
    </Consumer>)