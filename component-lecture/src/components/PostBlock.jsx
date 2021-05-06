import React, {Component} from 'react';

class PostBlock extends Component{
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.likes
        }
    }
    render(){
        const increaseLikes = () => {
            console.log("clicked like on " + this.props.poster + "'s post")
            this.setState({likes:this.state.likes +1})
        }

        return(
            <div className="border m-3">
                <h3>posted by: {this.props.poster}</h3>
                <h1>"{this.props.text}"</h1>
                <p>Likes: {this.state.likes} RT: 54</p>
                <button onClick={increaseLikes} className="btn btn-sm btn-primary">Like</button>
            </div>
        )
    }
}

export default PostBlock;