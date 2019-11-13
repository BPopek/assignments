import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import SearchContainer from './SearchContainer'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            query:'',
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.searchCollection(this.state.query)
        // console.log(this.state)
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }
    
    render (){
        // console.log(`render ${this.state.query}`)
        return(
            <div className='Search'>
                <form onSubmit={this.handleSubmit} className='SearchForm'>
                    <input onChange={this.handleChange} type='text' name="query" placeholder='Enter Search Info'></input>
                    <button>Submit</button>
                </form>
                <div>
                    <SearchContainer />
                </div>
            </div>
        )
    }
}

export default withExhibitions(Search)