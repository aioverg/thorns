import service from "../untils/service"

const systemApi = {}

systemApi.addData = data => {
    return service({
        url: "/system/addaccount",
        data: data,
        method: "post"
    })
}

systemApi.allData = data => {
    return service({
        url: "/system/modityAccount",
        data: data,
        method: "post"
    })
}

export default systemApi