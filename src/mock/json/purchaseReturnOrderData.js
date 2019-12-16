//采购退货订单数据
/*
    数据结构：
    [
        订单id, 供应商, 仓库, 退货时间, 操作员
        [
            [名称, 编号, 单位, 采购价格, 退回价格, 采购数量, 退回数量]
        ],
        退货总金额, 备注
    ]
*/

const data = [
    [
        "001", "中值公司", "A001", "2019/12/16", "admin",
        [
            ["苹果", "A0001", "千克", "3.00", "3.00", "100", "100"],
            ["梨子", "A0002", "千克", "5.00", "5.00", "100", "100"]
        ],
        "800.00", "AAAAA"
    ],
    [
        "002", "极限公司", "A001", "2019/12/12", "admin",
        [
            ["桃子", "A0003", "千克", "6.00", "6.00", "100", "100"],
        ],
        "600.00", "BBBBB"
    ],
    [
        "003", "中心公司", "A001", "2019/12/09", "admin",
        [
            ["西瓜", "A0005", "千克", "1.00", "1.00", "100", "100"],
            ["荔枝", "A0006", "千克", "2.00", "2.00", "100", "100"],
        ],
        "300.00", "BBBBB"
    ],
    [
        "004", "熵增公司", "A001", "2019/12/01", "admin",
        [
            ["杨梅", "A0007", "千克", "2.50", "2.50", "100", "50"],
            ["葡萄", "A0008", "千克", "2.00", "2.00", "100", "50"],
        ],
        "425.00", "BBBBB"
    ],
    [
        "005", "消元公司", "A001", "2019/11/11", "admin",
        [
            ["石榴", "A0009", "千克", "3.00", "3.00", "100", "100"],
            ["柠檬", "A0010", "千克", "4.50", "4.50", "100", "100"],
        ],
        "750.00", "BBBBB"
    ],
    [
        "006", "聚合公司", "A001", "2019/11/0", "admin",
        [
            ["木瓜", "A0011", "千克", "3.50", "3.50", "100", "100"],
            ["柿子", "A0012", "千克", "2.50", "2.50", "100", "100"],
        ],
        "600.00", "BBBBB"
    ],
    [
        "007", "梯度公司", "A001", "2019/11/8", "admin",
        [
            ["山楂", "A0013", "千克", "3.00", "3.00", "100", "100"],
            ["橙子", "A0014", "千克", "2.50", "2.50", "100", "100"],
        ],
        "550.00", "BBBBB"
    ]
]

//客户管理数据查询返回函数
function queryPurchaseReturnOrderData(option){
    const query=[]  //存放查询结果的数据集合
    const body=JSON.parse(option.body)  //将接受的数据转换为对象
    if(body.queryValue){  //如果查询数据，就返回查询结果数组
        for(var i in data){
            for(var j in data){
                if(body.queryValue==data[i][j]){
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

//订单管理页面-订单详情数据
function queryPurchaseReturnOrderDetails(option){
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

//采购退货-提交退货订单
function postPurchaseReturnOrder(option){
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

//根据退货订单ID查询退货订单
function purchaseReturnOrderID(option){
    for(var i in data){
        if(data[i][0]==option.body){
            return data[i]
        }
    }
    return null
}

export {queryPurchaseReturnOrderData, queryPurchaseReturnOrderDetails, postPurchaseReturnOrder, purchaseReturnOrderID}