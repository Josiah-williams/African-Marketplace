import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../state/actionCreators'


const DeleteItem = (props) => {
    const handleEdit = e => {
        e.preventDefault();
        console.log("edit clicked", props.id);
        props.history.push(`/updateItem/${props.id}`);
    }

    const handleDelete = e => {
        e.preventDefault();
        console.log('delete clicked!', props.id)
        props.deleteItem(props.id);
    }
    return(
        <div className="item delete">
        <div className="item-head">
        <h3>{props.title}</h3>
        <div className="edit-del">
                <button onClick={handleEdit} className="hover-grow">🖋</button>
                <button onClick={handleDelete} className="hover-grow">✖</button>
            </div>
            </div>
            <p>{props.contents}</p>
        <div className='by-user'>By {props.user}</div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.itemReducer.posts,
        isDeletingItem:state.itemReducer.isDeletingItem
      };
    };

    export default connect(mapStateToProps, { deleteItem })(DeleteItem);
