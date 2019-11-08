import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import CurrentExhibitions from './CurrentExhibitions';
import PastExhibitions from './PastExhibitions';

class ExhibitionsContainer extends Component {
    
    componentDidMount(){
        this.props.getExhibitions()
    }
    render(){
        // console.log(this.props)
        const currentExhibitions = this.props.currentExhibitions.map(exhibition => <CurrentExhibitions info={exhibition} />)
        // console.log(this.props.match.path)
        const pastExhibitions = this.props.pastExhibitions.map(exhibition => <PastExhibitions info={exhibition} />)

        return(
            <div className='ExhibitionContainer'>
                {this.props.match.path === '/current-exhibitions' ? currentExhibitions : pastExhibitions}
            </div>
        )
    }
}

export default withExhibitions(ExhibitionsContainer);