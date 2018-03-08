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
        }
    }
}