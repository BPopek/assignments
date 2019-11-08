import React, {Component} from 'react';

class CurrentExhibitions extends Component {

    render(){
        const {title, url, text, date_start, date_end} = this.props.info
        return(
            <div className='ExhibitionList'>
                <h1>{title}</h1>
                <a href={url} className='ExhibitionLink'>{url}</a>
                <p className='ExhibitDescription'>{text}</p>
                <h5 className='date'>Start Date: {date_start}  •  End Date: {date_end}</h5>
            </div>
        )
    }
}

export default CurrentExhibitions;