import React, {Component} from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import {withExhibitions} from './ExhibitionProvider';
import {Link} from 'react-router-dom'

class PastExhibitions extends Component {

    render(){
        const {title, url, text, date_start, date_end, id} = this.props.info
        return(
            <Link to={'detailed-exhibitions/' + id}>
                <div className='ExhibitionList'>
                    <h1 className='CurrExhibTitle'>{title}</h1>
                    <a href={url} className='ExhibitionLink'>{url}</a>
                    {/* <p className='ExhibitDescription'>{text}</p> */}
                    <LinesEllipsis className='ExhibitDescription'
                            text={text}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='words'
                        />
                    <h5 className='date'>Start Date: {date_start}&emsp;•&emsp;End Date: {date_end}</h5>

                </div>
            </Link>
        )
    }
}

export default withExhibitions(PastExhibitions);