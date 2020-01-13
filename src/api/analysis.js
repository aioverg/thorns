import service from '../untils/service'

const analysisApi = {}

analysisApi.contrast = data => {
    return service({
        url: "/analysis/contrast",
        data: data,
        method: "get"
    })
}

export default analysisApi