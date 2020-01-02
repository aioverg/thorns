import service from '../untils/service'

const login = data => {
    return service({
        url: "/login",
        data: data,
        method: "post"
    })
}

export default login