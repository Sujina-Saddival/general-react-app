import React, { Component, Fragment } from 'react';

const PostsList = ({ posts }) => {
  return posts.map(post => (
    <div key={post.id}>
      <h3 className='post-title'>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))
}

const EmptyList = () => {
  return <div>Empty List</div>
}

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => this.setState({posts: data}))
  }

  render() {
    const { posts: postList } = this.state;
    return (
      <Fragment>
        {postList.length > 0 ? <PostsList posts={postList} /> : <EmptyList /> }
      </Fragment>
    )
  }
}

export default Posts;