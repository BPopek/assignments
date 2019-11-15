import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import {Link} from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

class CurrentExhibitions extends Component {
    constructor(){
        super()
        this.state= {
            isFlipped: false
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped }));
    }

    render(){
        const {title, text, date_start, date_end, id} = this.props.info
        return(       
            <div>
                
                <div className='ExhibitionList'>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedBackToFront='.3' flipSpeedFrontToBack='.3'>
                        <div className='FlipFront' onClick={this.handleClick}>
                            <h1 className='CurrExhibTitle'>{title}</h1>
                            <h5 className='date'>Start Date: {date_start} <br/>End Date: {date_end}</h5>
                        </div>
                            <div className='FlipBack' onClick={this.handleClick}>
                                <h1 className='CurrExhibTitleBack'>{title}</h1>
                                <div>
                                    <p  className='ExhibitDescriptionBack'>{text}</p>
                                </div>
                                {/* <h5 className='dateBack'>Start Date: {date_start} &emsp; • &emsp; End Date: {date_end}</h5> */}
                                <div>
                                    <Link to={'detailed-exhibitions/' + id}>
                                        <button className='ButtonDetailedInfo'>Exhibition Info</button>
                                    </Link>
                                </div>
                            </div>
                    </ReactCardFlip>
                </div>
            </div>         
        )
    }
}

export default withExhibitions(CurrentExhibitions);