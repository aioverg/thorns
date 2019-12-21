//供应商部分模拟数据，数组中的数据依次是：[名称, 负责人, 电话, 手机, 邮箱, 地址, 备注]
const data=[  //所有数据集合
    ["中值公司", "张三", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["极限公司", "李四", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["中心公司", "王五", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["熵增公司", "麻六", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["消元公司", "赵七", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["聚合公司", "费八", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["梯度公司", "起死", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["换元公司", "飞花", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["弗洛公司", "苹果", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["还原公司", "酸梨", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["极简公司", "画家", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["花飞公司", "沙棘", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
]

//供应商管理数据查询返回函数
function querySupplierData(option){
    const query=[]  //存放查询结果的数据集合
    const body=JSON.parse(option.body)  //将接受的数据转换为对象
    if(body.queryValue){  //如果查询数据，就返回查询结果数组
        for(var i in data){
            for(var j in data){
                if(body.queryValue==data[i][j]){
                    console.log(data[i])
                    query.push(data[i])
                }
            }
        }
        return [query.slice(body.size*(body.page-1),body.size*body.page), query.length]
        //返回的数组中array[0]是本次查询的数据，array[1]是所有符合条件的数据条数。
    }
    if(!body.queryValue){  //如果不是查询数据就返回所有数据
        return [data.slice(body.size*(body.page-1),body.size*body.page), data.length]
    }
}

//添加供应商数据
function addSupplierData(option){
    var obj=JSON.parse(option.body)
    var arr=[]
    for(var i in obj){
        arr.push(obj[i])
    }
    data.unshift(arr)
}

//返回供应商名称数据
function querySupplierName(option){
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
export {querySupplierData, addSupplierData, querySupplierName}