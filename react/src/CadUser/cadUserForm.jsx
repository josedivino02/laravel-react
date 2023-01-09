import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./cadUserActions";
import LabelAndInput from "../common/form/labelAndInput";

class CadUserForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols={'12 4'} placeholder="Informe o Nome" />
                    <Field name="email" component={LabelAndInput} type="email" readOnly={readOnly}
                        label='E-Mail' cols={'12 4'} placeholder="Informe o E-Mail" />
                    <Field name="password" component={LabelAndInput} type="password" readOnly={readOnly}
                        label='Senha' cols={'12 4'} placeholder="Informe a Senha" />
                </div>
                <div className="box-footer mr-2">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.label}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default reduxForm({form: 'cadUserForm', destroyOnUnmount: false})(connect(null, mapDispatchToProps)(CadUserForm))