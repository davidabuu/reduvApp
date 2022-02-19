import React, { useEffect} from 'react';
import PreLoader from '../layout/PreLoader';
import {connect} from 'react-redux';
import LogItem from './LogItem';
import {getLogs} from '../../actions/logActions'
const Logs = ({log: {logs, loading}, getLogs}) => {
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, [])
    if(loading || logs === null){
        return <PreLoader></PreLoader>;
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className='center'>No Logs To Shoow</p>): (
                logs.map(log => <LogItem log={log} key={log.id}></LogItem>)
            )}
        </ul>
    )
}
const mapStateToProps = state => ({
    log: state.log
})
export default connect(mapStateToProps, {getLogs})(Logs);
