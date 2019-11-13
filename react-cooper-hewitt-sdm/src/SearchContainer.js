import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import {Link} from 'react-router-dom'

class SearchContainer extends Component {
  
    // componentDidMount(){
    //     this.props.SearchCollection(props)
    // }
    render(){
        console.log(this.props)
        const SearchMap = this.props.searchRes.map(result => <Link className='SearchResults' to='/search-detail-page/' key={result.id}>{result.title}</Link>)
  
        return(
            <div className='SearchContainer'>
               {SearchMap}
            </div>
        )
    }
}

export default withExhibitions(SearchContainer);