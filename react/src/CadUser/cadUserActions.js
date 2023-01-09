import Axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:8000/api"
const INICIAL_VALUES = {}

export function getList() {
    const request = Axios.get(`${BASE_URL}/user/getList`)
    return {
        type: 'USUARIO_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post', 'user/cadUser')
}

export function update(values) {
    return submit(values, 'post', 'user/upUser')
}

export function remove(values) {
    return submit(values, 'put', 'user/delUser')
}

export function blk(values) {
    return submit(values, 'put', 'user/blkUser')
}

function submit(values, method, url) {
    return dispatch => {
        const id = values.id ? values.id : ''
        Axios[method](`${BASE_URL}/${url}/${id}`, values)
        .then(resp => {
            toastr.success("Sucesso", "Ação realizada com sucesso.")
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error("Erro", error))
        })
    }
}

export function showUpdate(cadUser) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('cadUserForm', cadUser)
    ]
}

export function showDelete(cadUser) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('cadUserForm', cadUser)
    ]
}

export function showblock(cadUser) {
    return [
        showTabs('tabBlock'),
        selectTab('tabBlock'),
        initialize('cadUserForm', cadUser)
    ]
}

export function init() {
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('cadUserForm', INICIAL_VALUES)
    ]
}