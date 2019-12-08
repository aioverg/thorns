//商品部分模拟数据，数组中的数据依次是：[名称, 编号, 单位, 采购价, 销售价]
const data=[
    ["苹果", "A0001", "千克", "3.00", "8.00"],
    ["梨子", "A0002", "千克", "5.00", "8.00"],
    ["桃子", "A0003", "千克", "6.00", "9.50"],
    ["香蕉", "A0004", "千克", "2.50", "5.00"],
    ["西瓜", "A0005", "千克", "1.00", "3.00"],
    ["荔枝", "A0006", "千克", "2.00", "4.00"],
    ["杨梅", "A0007", "千克", "2.50", "6.00"],
    ["葡萄", "A0008", "千克", "2.00", "5.00"],
    ["石榴", "A0009", "千克", "3.00", "6.50"],
    ["柠檬", "A0010", "千克", "4.50", "7.50"],
    ["木瓜", "A0011", "千克", "3.50", "8.00"],
    ["柿子", "A0012", "千克", "2.50", "4.50"],
    ["山楂", "A0013", "千克", "3.00", "5.00"],
    ["橙子", "A0014", "千克", "2.50", "5.00"],
    ["呆瓜", "A0015", "千克", "3.50", "9.50"],
    ["芒果", "A0016", "千克", "2.50", "8.50"]
]

//商品列表查询返回数据函数
function queryCommodutyData(option){
    const query=[]
    const body=JSON.parse(option.body)
    if(body.queryValue){
        for(var i in data){
            for(var j in data){
                if(body.queryValue==data[i][j]){
                    query.push(data[i])
                }
            }
        }
        return [query.slice(body.size*(body.page-1),body.size*body.page), query.length]
    }
    if(!body.queryValue){
        return [data.slice(body.size*(body.page-1),body.size*body.page), data.length]
    }
}

//添加商品数据
function addCommodityData(option){
    var obj=JSON.parse(option.body)
    var arr=[]
    for(var i in obj){
        arr.push(obj[i])
    }
    data.unshift(arr)
}


export {queryCommodutyData, addCommodityData}