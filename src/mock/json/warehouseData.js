//仓库部分模拟数据，数组中的数据依次是：[仓库名称, 负责人, 地址, 备注]
const data=[
    ["A001", "依依", "A001,A001", "00000"],
    ["A002", "兒兒", "A001,A001", "00000"],
    ["A003", "三三", "A001,A001", "00000"],
    ["A004", "思思", "A001,A001", "00000"],
    ["A005", "乌乌", "A001,A001", "00000"],
    ["A006", "柳柳", "A001,A001", "00000"],
    ["A007", "七七", "A001,A001", "00000"],
    ["A008", "芭芭", "A001,A001", "00000"],
    ["A009", "玖玖", "A001,A001", "00000"],
    ["A010", "诗诗", "A001,A001", "00000"],
    ["A011", "诗怡", "A001,A001", "00000"],
    ["A012", "莳尓", "A001,A001", "00000"],
    ["A013", "施叄", "A001,A001", "00000"],
    ["A014", "师偲", "A001,A001", "00000"],
    ["A015", "拾舞", "A001,A001", "00000"],
    ["A016", "始浏", "A001,A001", "00000"],
]

const warehouse = {}

warehouse.queryWarehouseData = option => {
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

warehouse.addWarehouseData = option => {
    var obj=JSON.parse(option.body)
    var arr=[]
    for(var i in obj){
        arr.push(obj[i])
    }
    data.unshift(arr)
}


export default warehouse