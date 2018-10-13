import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit , props.topic)
    }

    componentDidUpdate(){
        this.props.init(this.props.widgetsInit , this.props.topic)
    }
    render() {
        console.log("the props are " , this.props)
        return (
            <ul className='list-group'>
              <div className="col-12 my-5">
                <span className="float-right">
                    <button style={{"display": "inline"}} className="btn btn-success mx-3">Save</button>
                    <p style={{"display": "inline"}}>Preview</p>
                    <label style={{"display": "inline-block"}} className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"/>
                    </label>
                </span>
              </div>
                {
                    this.props.widgets.map((widget, index) =>
                        <div className={'my-3'}>
                            <li key={index} className="list-group-item">
                                <div className={'row'}>
                                    <div className={'col-6'}>
                                        <h5>{widget.type} Widget</h5>
                                    </div>
                                    <div className={'col-2'}>
                                        <button style={{"display": "inline"}} className="btn btn-primary float-right mx-1"><i
                                            className="fa fa-arrow-up"/></button>
                                        <button style={{"display": "inline"}} className="btn btn-primary float-right"><i
                                            className="fa fa-arrow-down"/></button>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <select className="form-control" id="dropdown">
                                                <option selected={widget.type==="HEADING"}>Heading</option>
                                                <option selected={widget.type==="LINK"}>Link</option>
                                                <option selected={widget.type==="IMAGE"}>Image</option>
                                                <option selected={widget.type==="PARAGRAPH"}>Paragraph</option>
                                                <option selected={widget.type==="LIST"}>List</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"/>
                                        </button>
                                    </div>

                                </div>

                                {widget.type==="HEADING" && <HeadingWidget widget={widget}/>}
                                {widget.type==="PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                                {widget.type==="LIST" && <ListWidget widget={widget}/>}
                                {widget.type==="IMAGE" && <ImageWidget widget={widget}/>}
                                {widget.type==="LINK" && <LinkWidget widget={widget}/>}
                            </li>
                        </div>

                    )
                }
              <button className={'btn float-right my-5 btn-primary'}>
                <i className="fa fa-plus-circle fa-2x" aria-hidden="true"/>
              </button>
            </ul>


        )
    }
}

export default WidgetListComponent