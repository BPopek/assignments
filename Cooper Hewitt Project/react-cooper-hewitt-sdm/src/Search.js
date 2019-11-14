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
                    <h1 className='SearchHeader'>Search the Cooper Hewitt Collection</h1>
                    <h3 className='SearchSuggestions'>Enter keyword for object, exhibition, date, etc.</h3>
                    <input onChange={this.handleChange} type='text' name="query" className='SearchInput' placeholder='Enter Info Here'></input>
                    <button className='SearchButton'>Submit</button>
                </form>
                <div>
                    <SearchContainer />
                </div>
            </div>
        )
    }
}

export default withExhibitions(Search)