//仓库部分模拟数据，数组中的数据依次是：[仓库名称, 负责人, 地址, 备注]
const data=[
    ["A001", "依依", "2-101", "00000"],
    ["A002", "兒兒", "2-102", "00000"],
    ["A003", "三三", "2-103", "00000"],
    ["A004", "思思", "2-104", "00000"],
    ["A005", "乌乌", "2-105", "00000"],
    ["A006", "柳柳", "5-101", "00000"],
    ["A007", "七七", "5-102", "00000"],
    ["A008", "芭芭", "5-103", "00000"],
    ["A009", "玖玖", "5-104", "00000"],
    ["A010", "诗诗", "5-105", "00000"],
]

const warehouse = {}

warehouse.queryWarehouseData = option => {  //返回数据
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

warehouse.queryWarehouseId = option => {  //返回数据
    const query=[]
    for(var i in data){
        if(option.body==data[i][0]){
            query.push(data[i][0])
        }
    }
    if(query.length==0){
        query.push("未找到")
        return query
    }
    else{return query}
}

warehouse.addWarehouseData = option => {  //添加数据
    var obj=JSON.parse(option.body)
    var arr=[]
    for(var i in obj){
        arr.push(obj[i])
    }
    data.unshift(arr)
}


export default warehouse