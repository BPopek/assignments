import React, {Component} from 'react';
import Axios from 'axios';
import HitList from './HitList';

class HitListContainer extends Component {
    constructor(){
        super()
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        Axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(res => {
            this.setState({list: res.data})
        })
    }
    render(){
        const HitListMapped = this.state.list.map((person, i) => <HitList key={i + person.name}
                                                                        name={person.name}
                                                                        image={person.image}
                                                                        />)
        return(
            <div className='Mapped'>
                {HitListMapped}
            </div>
        )
    }
}
export default HitListContainer;