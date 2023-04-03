import {url} from './url.js'

export const getProjects = async (options = {}) => {
    const {timeout = 1000 } = options
    //let login = login = localStorage.getItem('usersId')
    const login = 'hafeez';

    const controller = new AbortController();
    const id = setTimeout(()=> controller.abort(), timeout)
    var read = await fetch('/localhost:3000/getprojects',{
        'method': 'post',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify({email: login}),
        ...options,
        signal: controller.signal
    });
    clearTimeout(id)
    return await read.json()
}

export const login = async (options = {}) => {
    const {timeout = 1000 } = options
    //let login = login = localStorage.getItem('usersId')
    const login = 'hafeez';

    const controller = new AbortController();
    const id = setTimeout(()=> controller.abort(), timeout)
    var read = await fetch(url+'/getprojects',{
        'method': 'post',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify({email: login}),
        ...options,
        signal: controller.signal
    });
    clearTimeout(id)
    return await read.json()
}

export const forgotPassword = async (options = {}) => {
    const {timeout = 1000 } = options
    //let login = login = localStorage.getItem('usersId')
    const login = 'hafeez';

    const controller = new AbortController();
    const id = setTimeout(()=> controller.abort(), timeout)
    var read = await fetch(url+'/getprojects',{
        'method': 'post',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify({email: login}),
        ...options,
        signal: controller.signal
    });
    clearTimeout(id)
    return await read.json()
}