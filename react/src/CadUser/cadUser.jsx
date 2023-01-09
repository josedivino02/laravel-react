import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/tabsContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabHeader from "../common/tab/tabHeader"
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import { create, update, remove, blk } from "./cadUserActions";

import CadUserList from "./cadUserList";
import CadUserForm from "./cadUserForm";


class CadUser extends Component {

    componentWillMount() {
        this.props.selectTab("tabList")
        this.props.showTabs("tabList", "tabCreate")
    }

    render() {
        return (
            <div>
                <ContentHeader  title="Usuários" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target="tabList"     label="Listar"  icon="bars" />
                            <TabHeader target="tabCreate"   label="Incluir" icon="plus" />
                            <TabHeader target="tabUpdate"   label="Alterar" icon="pencil" />
                            <TabHeader target="tabDelete"   label="Excluir" icon="trash-o" />
                            <TabHeader target="tabBlock"    label="Block"   icon="ban" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <CadUserList />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <CadUserForm onSubmit={this.props.create} submitClass={'success'} label='Incluir' />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <CadUserForm onSubmit={this.props.update} submitClass={'warning'} label='Alterar' />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <CadUserForm onSubmit={this.props.remove} submitClass={'danger'} label='Excluir' readOnly={true} />
                            </TabContent>
                            <TabContent id="tabBlock">
                                <CadUserForm onSubmit={this.props.blk} submitClass={'danger'} label='Bloquear' readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs, create, update, remove, blk
}, dispatch)
export default connect(null, mapDispatchToProps)(CadUser)