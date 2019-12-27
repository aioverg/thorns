/*  订单数据
    数据结构：
    [
        id, 客户, 仓库, 订单时间, 操作员
        [
            [名称, 仓库, 单位, 系统价格, 实际价格, 系统数量, 操作数量]
        ],
        订单总价, 实际金额, 备注
    ]
*/
const data = [
    [
        "001", "中原公司", "A001", "2019/12/11", "admin",
        [
            ["苹果", "A0001", "千克", "3.00", "3.00", "20", "100"],
            ["梨子", "A0002", "千克", "5.00", "5.00", "20", "100"]
        ],
        "800.00", "800.00", "AAAAA"
    ],
    [
        "002", "南源公司", "A001", "2019/12/11", "admin",
        [
            ["桃子", "A0003", "千克", "6.00", "6.00", "10", "100"],
            ["香蕉", "A0004", "千克", "2.50", "2.50", "10", "100"],
        ],
        "850.00", "850.00", "BBBBB"
    ],
    [
        "003", "东南公司", "A001", "2019/12/11", "admin",
        [
            ["西瓜", "A0005", "千克", "1.00", "1.00", "10", "100"],
            ["荔枝", "A0006", "千克", "2.00", "2.00", "10", "100"],
        ],
        "300.00", "300.00", "BBBBB"
    ],
    [
        "004", "庐山公司", "A001", "2019/12/11", "admin",
        [
            ["杨梅", "A0007", "千克", "2.50", "2.50", "10", "100"],
            ["葡萄", "A0008", "千克", "2.00", "2.00", "10", "100"],
        ],
        "850.00", "850.00", "BBBBB"
    ],
    [
        "005", "红花公司", "A001", "2019/12/11", "admin",
        [
            ["石榴", "A0009", "千克", "3.00", "3.00", "10", "100"],
            ["柠檬", "A0010", "千克", "4.50", "4.50", "10", "100"],
        ],
        "750.00", "750.00", "BBBBB"
    ],
    [
        "006", "九鼎公司", "A001", "2019/12/11", "admin",
        [
            ["木瓜", "A0011", "千克", "3.50", "3.50", "10", "100"],
            ["柿子", "A0012", "千克", "2.50", "2.50", "10", "100"],
        ],
        "600.00", "600.00", "BBBBB"
    ],
    [
        "007", "远大公司", "A001", "2019/12/11", "admin",
        [
            ["山楂", "A0013", "千克", "3.00", "3.00", "10", "100"],
            ["橙子", "A0014", "千克", "2.50", "2.50", "10", "100"],
        ],
        "550.00", "550.00", "BBBBB"
    ],
    [
        "008", "起凡公司", "A001", "2019/12/11", "admin",
        [
            ["呆瓜", "A0015", "千克", "3.50", "3.00", "10", "100"],
            ["芒果", "A0016", "千克", "2.50", "2.50", "10", "100"],
        ],
        "550.00", "550.00", "BBBBB"
    ],
    [
        "009", "三青公司", "A001", "2019/12/11", "admin",
        [
            ["西瓜", "A0005", "千克", "1.00", "1.00", "10", "100"],
            ["香蕉", "A0004", "千克", "2.50", "2.50", "10", "100"],
        ],
        "350.00", "350.00", "BBBBB"
    ],
    [
        "010", "东凌公司", "A001", "2019/12/11", "admin",
        [
            ["石榴", "A0009", "千克", "3.00", "3.00", "10", "100"],
            ["西瓜", "A0005", "千克", "1.00", "1.00", "10", "100"],
        ],
        "400.00", "400.00", "BBBBB"
    ],
    [
        "011", "极简公司", "A001", "2019/12/11", "admin",
        [
            ["桃子", "A0003", "千克", "6.00", "6.00", "10", "100"],
            ["柠檬", "A0010", "千克", "4.50", "4.50", "10", "100"],
        ],
        "1050.00", "1050.00", "BBBBB"
    ],
    [
        "012", "务普公司", "A001", "2019/12/11", "admin",
        [
            ["橙子", "A0014", "千克", "2.50", "2.50", "10", "100"],
            ["呆瓜", "A0015", "千克", "3.50", "3.50", "10", "100"],
        ],
        "600.00", "600.00", "BBBBB"
    ]
]

const order = {}

order.queryOrderData = option => {  //返回数据
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

order.queryDetails = option => {  //返回数据
    const query=[]
    //const body=JSON.parse(option.body)
    //if(option.body){console.log(option.body)}
    for(var i in data){
       if(option.body==data[i][0]){
           query.push(data[i][5])
       }
    }
    return query
}

order.postPurchaseOrder = option => {  //添加数据
    const arrayData= []
    const postData=JSON.parse(option.body)
    arrayData[0]="新增"
    arrayData[1]=postData.supplierName
    arrayData[2]=postData.warehouse
    arrayData[3]=postData.purchaseTime
    arrayData[4]="admin"
    arrayData[5]=postData.tableData
    arrayData[6]=postData.purchasePrice
    arrayData[7]=postData.payment
    arrayData[8]=postData.remarks
    data.unshift(arrayData)
    alert("订单提交成功")
}

order.orderID = option => {  //返回数据
    for(var i in data){
        if(data[i][0]==option.body){
            return data[i]
        }
    }
    return null
}

export default order