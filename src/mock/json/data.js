const purchase = {
    "2019-10-01": {
        "苹果": 20,
        "梨子": 30,
        "桃子": 15,
        "香蕉": 18,
        "西瓜": 32,
    },
    "2019-10-02": {
        "苹果": 35,
        "梨子": 63,
        "桃子": 45,
        "香蕉": 46,
        "西瓜": 75,
    },
    "2019-10-03": {
        "苹果": 66,
        "梨子": 32,
        "桃子": 45,
        "香蕉": 75,
        "西瓜": 36,
    },
    "2019-10-04": {
        "苹果": 55,
        "梨子": 12,
        "桃子": 15,
        "香蕉": 75,
        "西瓜": 63,
    },
    "2019-10-05": {
        "苹果": 36,
        "梨子": 58,
        "桃子": 64,
        "香蕉": 86,
        "西瓜": 16,
    },
    "2019-10-06": {
        "苹果": 45,
        "梨子": 63,
        "桃子": 12,
        "香蕉": 35,
        "西瓜": 63,
    },
    "2019-10-07": {
        "苹果": 36,
        "梨子": 86,
        "桃子": 78,
        "香蕉": 15,
        "西瓜": 69,
    }

}

const contrast = [
    {"Date":"2019-10-01", "PUR": 2013, "RD": 4562},
    {"Date":"2019-10-02", "PUR": 2256, "RD": 5374},
    {"Date":"2019-10-03", "PUR": 4563, "RD": 3675},
    {"Date":"2019-10-04", "PUR": 1586, "RD": 3942},
    {"Date":"2019-10-05", "PUR": 3346, "RD": 3546},
    {"Date":"2019-10-06", "PUR": 4263, "RD": 5368},
    {"Date":"2019-10-07", "PUR": 4576, "RD": 6354}
]

const data = {}
data.contrast = function(){
    return contrast
}
data.procurementstatistics = function(){
    return purchase
}

export default data