import Dashboard from "../components/dashboard";
import React from 'react';
import {connect} from 'react-redux';
import '../styleSheets/dashboard.scss';

const dashboard = (props)=>{
    return (<div>
       <Dashboard tableData={props.data.user} dispatch={props.dispatch}/>
    </div>)
};

const mapStateToProps = (state)=>{
    return {data: state.dashboard.dashboardData}
};
export default connect(mapStateToProps)(dashboard);