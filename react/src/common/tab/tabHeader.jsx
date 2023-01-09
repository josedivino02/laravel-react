import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IfSimple from "../operador/ifSimple";

import { selectTab } from "./tabActions";

class TabHeader extends Component {

    render(){

        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]

        return (
            <IfSimple se={visible}>
                <li className={ selected ? 'active' : '' }>
                    <a href="#" onClick={ () => this.props.selectTab(this.props.target )} data-toggle="tab" data-target={ this.props.target } >
                        <i className={`fa fa-${this.props.icon}`}></i>
                        { this.props.label }
                    </a>
                </li>
            </IfSimple>
        )
    }
}


const mapStateToProps = state => ({tab: state.tab}) 
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)