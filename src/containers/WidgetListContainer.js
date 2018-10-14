import React from 'react'
import {connect} from 'react-redux'
import WidgetListComponent from '../components/WidgetListComponent'
// import WidgetListNew from "../components/WidgetListNew";


const stateToPropertyMapper = state =>({
    widgets : state.widgets
});

const dispatcherToPropertyMapper = dispatch =>({
    init:(widgets , topic) =>dispatch({
        type:"INIT",
        widgets: widgets,
        topic:topic
    }),
    deleteWidget: (widget)=> dispatch({
        type :'DELETE_WIDGET',
        widget:widget
    }),
    updateWidget:widget=>dispatch({
        type:'UPDATE_WIDGET',
        widget:widget
    }),
    addWidget: ()=> dispatch({
      type: 'CREATE_WIDGET'
    }),
  changeType: (widget , kind)=> dispatch({
    type :'CHANGE_TYPE',
    widget:widget,
    kind : kind
  })
})

const WidgetListContainer = connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer