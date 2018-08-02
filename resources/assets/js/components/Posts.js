import React, {Component} from 'react';
import Post from "./Post";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Posts extends Component {


    render(){
        return (
            <div>
                {this.props.posts.map((post, i) => (
                    <ul key={i}>
                        <li>
                            <Router>
                                <div>
                                    <Link to={"/post/" + post.id}>{post.title}</Link>
                                    <Route path="/post/" exact component={Post}/>
                                </div>
                            </Router>
                        </li>
                    </ul>
                ))}


            </div>
        )
    }
}