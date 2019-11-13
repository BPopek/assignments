import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';

class ExhibitionDetails extends Component {
    componentDidMount(){
        this.props.singleExhibition(this.props.match.params.id)
    }
    render(){
        const {title, url, text, images} = this.props.detail

        return(
            <div className='ExhibitionDetails' >
                <h1 className='DetailedTitle'>{title}</h1>
                <a href={url} className='DetailedLink'>Visit Cooper Hewitt Website</a>
                <p className='DetailedDescription'>{text}</p>
            </div>
        )
    }
}

export default withExhibitions(ExhibitionDetails);