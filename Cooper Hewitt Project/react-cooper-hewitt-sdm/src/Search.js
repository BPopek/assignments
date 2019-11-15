import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import SearchContainer from './SearchContainer'
import Loader from 'react-loader-spinner'


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
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
        this.props.clearResults()
    }
    
    render (){
        return(
            <div className='Search'>
                <form onSubmit={this.handleSubmit} className='SearchForm'>
                    <h1 className='SearchHeader'>Search the Cooper Hewitt Collection</h1>
                    <h3 className='SearchSuggestions'>Enter keyword for object, exhibition, date, etc.</h3>
                    <input onChange={this.handleChange} type='text' name="query" className='SearchInput' placeholder='Enter Info Here'></input>
                    <button className='SearchButton'>Submit</button>
                </form>
               
                        <SearchContainer />
                    
                </div>
        )
    }
}

export default withExhibitions(Search)