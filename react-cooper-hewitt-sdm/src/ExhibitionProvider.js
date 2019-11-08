import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class ExhibitionProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentExhibitions: [],
            pastExhibitions: []
        }
    }

    getExhibitions = () => {
        axios.get('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=df5560cefa01711f7f03b561eb43f675').then(res => { 
            console.log(res.data.exhibitions)
            this.setState({currentExhibitions: res.data.exhibitions.filter(exb => exb.is_active === '1'), pastExhibitions: res.data.exhibitions.filter(exb => exb.is_active === '0')})
        })
    }
    // singleExhibition = (id) => {
    //     axios.get('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=df5560cefa01711f7f03b561eb43f675/' + id).then(res => {
    //         this.setState({detailedExhibition: res.data.exhibitions.map(exb => exb._id ? res.data : res)
    //         })
    //     })
    // }
    
    render(){
        return(
            <Provider value={{
                ...this.state,
                getExhibitions: this.getExhibitions,
                }}>
                {this.props.children}
            </Provider>
        )
    }
}
export default ExhibitionProvider;

export const withExhibitions = (Comp) => props => <Consumer>{value => <Comp {...value}{...props}/>}</Consumer>