import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';

class ExhibitionDetails extends Component {
    componentDidMount(){
        this.props.singleExhibition(this.props.match.params.id)
    }
    render(){

        const {title, url, text, date_start, date_end, id} = this.props.detail
    
        return(
            <div className='ExhibitionDetails' >
                <h1 className='DetailedTitle'>{title}</h1>
                {/* <img src={url}/> */}
                <a href={url} className='DetailedLink'>For More Info, Visit: {url}</a>
                <p className='DetailedDescription'>{text}</p>
                <h5 className='DetailedDate'>Start Date: {date_start}&emsp;•&emsp;End Date: {date_end}</h5>
            </div>
        )
    }
}

export default withExhibitions(ExhibitionDetails);