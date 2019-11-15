import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import {Link} from 'react-router-dom'

class SearchContainer extends Component {
  
    render(){

        const SearchMap = this.props.searchRes.map(result => <Link className='SearchResults' to={'/search-detail-page/' + result.id} key={result.id}>{result.title} &emsp; ID: {result.id}</Link>)
  
        return(
            <div className='SearchContainer'>
                {SearchMap}
            </div>
        )
    }
}

export default withExhibitions(SearchContainer);