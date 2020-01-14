import service from '../untils/service'

const analysisApi = {}

analysisApi.contrast = data => {
    return service({
        url: "/analysis/contrast",
        data: data,
        method: "get"
    })
}

analysisApi.procurementstatistics = data => {
    return service({
        url: "/analysis/procurementstatistics",
        data: data,
        method: "get"
    })
}

analysisApi.salesstatistics = data => {
    return service({
        url: "/analysis/salesstatistics",
        data: data,
        method: "get"
    })
}

export default analysisApi