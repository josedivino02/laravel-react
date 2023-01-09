import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getList, showUpdate, showDelete, showblock } from "./cadUserActions";

class CadUserList extends Component
{
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(u => (
            <tr key={ u.id }>
                <td>{ u.name }</td>
                <td>{ u.email }</td>
                <td>{ u.desc }</td>
                <td>
                    <button className="btn btn-warning" onClick={ () => this.props.showUpdate(u)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={ () => this.props.showDelete(u)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button className="btn btn-danger" onClick={ () => this.props.showblock(u)}>
                        <i className="fa fa-ban"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render()
    {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-Mail</th>
                            <th>Status</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.userList.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete, showblock}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CadUserList)