import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class ExhibitionProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentExhibitions: [],
            pastExhibitions: [],
            exhibitionDetails: [],
            detail: 
                {title:'', 
                url:'', 
                text:'', 
                date_start:'', 
                date_end:'', 
                id:''
                }
        }
    }
    getExhibitions = () => {
        axios.get('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=df5560cefa01711f7f03b561eb43f675').then(res => { 
            console.log(res.data.exhibitions)
            this.setState({currentExhibitions: res.data.exhibitions.filter(exb => exb.is_active === '1'), pastExhibitions: res.data.exhibitions.filter(exb => exb.is_active === '0')})
        })
    }

    singleExhibition = (id) => {
        axios.get('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getInfo&access_token=df5560cefa01711f7f03b561eb43f675&exhibition_id=' + id).then(res => {
            console.log(res.data)
            this.setState({detail: res.data.exhibition
            })
        })
    }
    
    render(){
        return(
            <Provider value={{
                ...this.state,
                getExhibitions: this.getExhibitions,
                singleExhibition: this.singleExhibition
                }}>
                {this.props.children}
            </Provider>
        )
    }
}
export default ExhibitionProvider;

export const withExhibitions = (Comp) => props => <Consumer>{value => <Comp {...value}{...props}/>}</Consumer>