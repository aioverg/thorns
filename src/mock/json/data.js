const contrast = [
    {"Date":"2019-10-01", "PUR": 2013, "RD": 4562},
    {"Date":"2019-10-02", "PUR": 2256, "RD": 5374},
    {"Date":"2019-10-03", "PUR": 4563, "RD": 3675},
    {"Date":"2019-10-04", "PUR": 1586, "RD": 3942},
    {"Date":"2019-10-05", "PUR": 3346, "RD": 3546},
    {"Date":"2019-10-06", "PUR": 4263, "RD": 5368},
    {"Date":"2019-10-07", "PUR": 4576, "RD": 6354}
]

const purchase = [
    {"TN": "苹果", "QTY": 20},
    {"TN": "梨子", "QTY": 30},
    {"TN": "桃子", "QTY": 15},
    {"TN": "香蕉", "QTY": 18},
    {"TN": "西瓜", "QTY": 32},
    {"TN": "荔枝", "QTY": 36},
    {"TN": "杨梅", "QTY": 45},
    {"TN": "葡萄", "QTY": 66},
    {"TN": "石榴", "QTY": 54},
    {"TN": "呆瓜", "QTY": 52},
    {"TN": "芒果", "QTY": 37},
    {"TN": "山楂", "QTY": 47},
]

const sales = [
    {"TN": "苹果", "QTY": 35},
    {"TN": "梨子", "QTY": 56},
    {"TN": "桃子", "QTY": 42},
    {"TN": "香蕉", "QTY": 36},
    {"TN": "西瓜", "QTY": 53},
    {"TN": "荔枝", "QTY": 26},
    {"TN": "杨梅", "QTY": 42},
    {"TN": "葡萄", "QTY": 63},
    {"TN": "石榴", "QTY": 48},
    {"TN": "呆瓜", "QTY": 64},
    {"TN": "芒果", "QTY": 31},
    {"TN": "山楂", "QTY": 44},
]

const data = {}
data.contrast = function(){
    return contrast
}
data.procurementstatistics = function(){
    return purchase
}
data.salesstatistics = function(){
    return sales
}

export default data
