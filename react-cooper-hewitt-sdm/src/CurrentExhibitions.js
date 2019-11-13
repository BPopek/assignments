import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import {Link} from 'react-router-dom'

class CurrentExhibitions extends Component {

    render(){
        const {title, text, date_start, date_end, id} = this.props.info
        return(
            <Link to={'detailed-exhibitions/' + id}>
                <div className='ExhibitionList'>
                    <h1 className='CurrExhibTitle'>{title}</h1>
                    {/* <p className='ExhibitionLink'>{url}</p> */}

                    {/* <a href={url} className='ExhibitionLink'>Visit Cooper Hewitt </a> */}
                    <p className='ExhibitDescription'>{text}</p>
                    <h5 className='date'>Start Date: {date_start} <br/>End Date: {date_end}</h5>
                </div>
            </Link>
        )
    }
}

export default withExhibitions(CurrentExhibitions);