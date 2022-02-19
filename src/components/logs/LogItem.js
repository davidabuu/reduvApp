import React from 'react';
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
const LogItem = ({log, deleteLog, setCurrent}) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({html: 'Log Delete'})
    }
    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>{log.message}</a>
                <br></br>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}last updated by {' '}</span>
                    <span className='black-text'>{log.tech}</span> on <Moment format='MMMM D0 YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
            </div>
            <a href="#" onClick={onDelete} className="secondary-content"><i className="material-icons grey-text">delete</i></a>
        </li>
    )
}

export default connect(null, {deleteLog, setCurrent})(LogItem);