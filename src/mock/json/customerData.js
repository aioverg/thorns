//客户和供应商数据，数据依次是：[客户名称, 负责人, 电话, 手机, 邮箱, 地址, 备注]

const data=[  //所有数据集合
    ["中原公司", "张三", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["南源公司", "李四", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["东南公司", "王五", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["庐山公司", "麻六", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["红花公司", "赵七", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["九鼎公司", "费八", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["远大公司", "起死", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["起凡公司", "飞花", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["三青公司", "苹果", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["东凌公司", "酸梨", "222222", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["极简公司", "画家", "111111", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
    ["务普公司", "刺客", "333333", "0000000000000", "000000000@00", "A-00,A-00", "000000"],
]


const customer = {}

customer.queryCustomerData = option => {  //返回数据
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

customer.addCustomerData = option => {  //增加数据
    var obj=JSON.parse(option.body)
    var arr=[]
    for(var i in obj){
        arr.push(obj[i])
    }
    data.unshift(arr)
}

customer.queryCustomerName = option => {  //返回数据
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


export default customer