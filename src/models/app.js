import { userInfo } from '../services/app'

export default {
    namespace: 'app',
    state: {
        login: false,
        loading: false,
        user: {
            name: '123456'
        },
        loginButtonLoading: false
    },
    subscriptions: {
        setup({dispatch}) {
            dispatch({type: 'queryUser'})
        }
    },
    effects: {
        *login({
            payload
        }, {call, put}) {
            yield put({type: 'showLoginButtonLoading'})
            yield put({type: 'loginSuccess', payload: {}})
        },
        *queryUser({
            payload
        }, { call, put }) {
            yield put({ type: 'showLoading' })
            const data = yield call(userInfo, payload)
            if (data.success) {
                yield put({
                    type: 'loginSuccess',
                    payload: {
                        user: {
                            name: data.username
                        }
                    }
                })
            } else {
                yield put({type: 'hideLoading'})
            }
        }
    },
    reducers: {
        loginSuccess(state, action) {
            console.log(action)
            return {
                ...state,
                ...action.payload,
                login: true,
                loginButtonLoading: false
            }
        },
        showLoading(state) {
            return {
                ...state,
                loading: true
            }
        },
        hideLoading(state) {
            return {
                ...state,
                loading: false
            }
        },
        logoutSuccess(state){
            return {
              ...state,
              login: false
            }
        },
        showLoginButtonLoading(state) {
            return {
                ...state,
                loginButtonLoading: true
            }
        }
    }
}