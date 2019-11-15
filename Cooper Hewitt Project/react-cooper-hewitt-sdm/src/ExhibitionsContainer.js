import React, {Component} from 'react';
import {withExhibitions} from './ExhibitionProvider';
import CurrentExhibition from './CurrentExhibition';
import PastExhibition from './PastExhibition';
import Loader from 'react-loader-spinner'

class ExhibitionsContainer extends Component {
    
    state = {
        isLoaded: false
    }

    componentDidMount(){
        this.props.getExhibitions().then(() => {
            this.setState({isLoaded: true})
        })
    }
    
    render(){
        // console.log(this.props)
        const currentExhibitions = this.props.currentExhibitions.map(exhibition => <CurrentExhibition info={exhibition} />)
        // console.log(this.props.match.path)
        const pastExhibitions = this.props.pastExhibitions.map(exhibition => <PastExhibition info={exhibition} />)

        return(
            <div className='SpinnerDiv'>{!this.state.isLoaded ? 
                <span className='SpinnerSpan'>
                <Loader
                        type='Circles'
                        color='#806aaf'
                        height={200}
                        width={100}
                        />
                        </span>
                    :
                <div className='ExhibitionContainer'>
                    {this.props.match.path === '/current-exhibitions' ? currentExhibitions : pastExhibitions}
                </div>
            }
            </div>
        )
    }
}

export default withExhibitions(ExhibitionsContainer);