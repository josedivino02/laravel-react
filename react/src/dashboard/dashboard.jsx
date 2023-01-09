import React, {  useContext, useEffect } from "react";
import  { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { getUsersAll, getUserBlock, getUserDelete } from "./dashboardActions";
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

const DashBoard = (props) => {

        useEffect(() => {
           return(
            props.getUsersAll(),
            props.getUserBlock(),
            props.getUserDelete()
           )
        }, [])

        const userAll = props.usersAll
        const userBlock = props.block
        const userDelete = props.del

    return (
    <div>
        <ContentHeader title="Dashboard" small="Overview" />
        <Content>
            <Row>
                <ValueBox cols="12 4" color="green" icon="user-plus" value={`${userAll.id ? userAll.id : '0'}`} text="Cadastrados" />
                <ValueBox cols="12 4" color="red" icon="user-times" value={`${userBlock.id ? userAll.id : '0'}`} text="Bloqueados" />
                <ValueBox cols="12 4" color="blue" icon="trash" value={`${userDelete.id ? userAll.id : '0'}`} text="Excluídos" />
            </Row>
        </Content>
    </div>
)
}

const mapStateToProps = state => ({usersAll: state.dashboard.usersAll, block: state.dashboard.block, del: state.dashboard.del}) 
const mapDispatchToProps = dispatch => bindActionCreators({getUsersAll, getUserBlock, getUserDelete}, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
