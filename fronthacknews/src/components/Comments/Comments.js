import React from 'react';
import Comment from "./Comment";
import './Comment.scss'

class Comments extends React.Component {
    render(){
        return this.props.Comments.map(comm =>{
            if((comm.text || "")
            .toLowerCase()
            .indexOf(this.props.searchTerm.toLowerCase()) > -1 &&
            this. props.searchTerm.length
            ){
                return(
                    <Comment
                    key={comm.id}
                    text={<mark>{comm.text}</mark>}
                    user={comm.user}
                    data={comm.date}
                    />
                );
            }
            if (!this.props.searchTerm.length){
                return (
                    <Comment
                    key={comm.id}
                    text={comm.text}
                    user={comm.user}
                    data={comm.date}
                    />
                );
            }
        })
    }
}

export default Comments;