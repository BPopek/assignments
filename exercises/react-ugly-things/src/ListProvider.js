import React, {Component} from 'react';
const {Provider, Consumer} = React.createContext();

class ListProvider extends Component {
    constructor(){
        super()
        this.state = {
            // title: '',
            // description: '',
            // imgUrl: '',
            posts: [],
            // completed: false
        }
    }
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     let {title, description, imgUrl} = this.state

    //     const NewPost = {
    //         title,
    //         description,
    //         imgUrl
    //     }
    //     this.setState(prevState => {
    //         return {posts: [...prevState.posts, NewPost]}
    //     })
    // }
    // addNewPost = () => {
    //     let {title, description, imgUrl} = this.state
    //     const NewPost = {
    //         title,
    //         description,
    //         imgUrl
    //     }
    //     this.setState(prevState => {
    //         return {posts: [...prevState.posts, NewPost]}
    //     })
        // console.log('new post added')
    // }
    // handleChange = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }
    editPost = (post, title) => {
        this.setState(prevState => {
            const copyPrevious = [...prevState.posts]
            const index = copyPrevious.findIndex(post => post.title === title)
            copyPrevious.splice(index, 1, post)
            return {
                posts: copyPrevious
            }
        })
    }

    addNewPost = (NewPost) => {
        this.setState(prevState => {
            return {posts: [...prevState.posts, NewPost]}
        })
    }
    handleDelete = () => {
        this.setState(prevState => {
            return {
                posts: prevState.post.filter(post => post.title !== post)
            }
        })
    }

    // handleSave = () => {
    //     this.handleEditToggle()
    //     this.props.handleSave(this.state)
    // }
    // checkbox = (e) => {
    //     this.props.handleSave({completed: e.target.checked})
    // }

    render(){
        return(
            <Provider value={{
                ...this.state,
                handleSave: this.handleSave,
                addNewPost: this.addNewPost,
                handleDelete: this.handleDelete,
                editPost: this.editPost
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