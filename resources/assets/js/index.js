import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';


export default class Index extends Component {

    constructor(){
        super();
        this.state = {
            posts: []
        }
    }


    componentWillMount() {
        fetch('api/posts').then(res => res.json()).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

render() {
    return(
        <div className="uk-container">
            <h1>Posts</h1>
            <Posts posts={this.state.posts} />
        </div>
    )
}

}




if(document.getElementById('app')){
    ReactDOM.render(<Index/>, document.getElementById('app'));
}