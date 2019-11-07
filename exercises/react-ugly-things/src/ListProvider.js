import React, {Component} from 'react';
const {Provider, Consumer} = React.createContext();

class ListProvider extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: '',
            posts: [],
            completed: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let {title, description, imgUrl} = this.state

        const NewPost = {
            title,
            description,
            imgUrl
        }
        this.setState(prevState => {
            return {posts: [...prevState.posts, NewPost]}
        })
    }
    addNewPost = () => {
        let {title, description, imgUrl} = this.state

        const NewPost = {
            title,
            description,
            imgUrl
        }
        this.setState(prevState => {
            return {posts: [...prevState.posts, NewPost]}
        })
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    // editPost = () => {
    //     this.setState(prevState => {
    //         return {
    //             posts: prevState.post.map(post => post === title ? res.data : post)
    //         }
    //     })
    // }
    handleDelete = () => {
        this.setState(prevState => {
            return {
                posts: prevState.post.filter(post => post.title !== post)
            }
        })
    }

    handleSave = () => {
        this.handleEditToggle()
        this.props.handleSave(this.state)
    }
    checkbox = (e) => {
        this.props.handleSave({completed: e.target.checked})
    }

    render(){
        return(
            <Provider value={{
                ...this.state,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleSave: this.handleSave,
                checkbox: this.checkbox,
                handleEditToggle: this.handleEditToggle,
                addNewPost: this.addNewPost

                //toggle

                }}>
                    {this.props.children}
            </Provider>
        )
    }
}

export default ListProvider

export function withProvider (Comp){
    return (props) => <Consumer>
        {value => <Comp {...value}{...props}/>}
                    </Consumer>
}