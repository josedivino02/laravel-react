import React, { useContext } from "react";

import MenuItem from './menuItem';
import MenuTree from './menuTree';
import { AuthContext } from "../../contexts/auth";
import Button from "../components/button/button";
import IfParams from "../operador/ifParams";

export default props => {
    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    const currentUser = localStorage.getItem("user")
    const adminUser = `"admin@admin.com"`

    return (
        <ul className="sidebar-menu"> 
            <MenuItem path='/dashboard' icon="dashboard" label="Dashboard" />
            <IfParams se={currentUser} data={adminUser}>
                <MenuTree label="Cadastro" icon="edit">
                    <MenuItem path="/usuarios" icon="user" label="usuários"/>
                </MenuTree>
            </IfParams>
            <Button Type="button" Text="Sair" onClick={handleLogout}>Sair</Button>
        </ul>
    )
}
