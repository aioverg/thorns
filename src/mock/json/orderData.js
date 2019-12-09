//商品采购、采购退回、订单管理数据
/*
    数据结构：
    [
        id, 供应商, 仓库, 采购时间, 采购员
        [
            [名称, 仓库, 单位, 系统采购价格, 实际采购价格, 库存, 采购数量]
        ],
        采购单总价, 实际支付金额, 备注
    ]
*/
const data = [
    [
        "001", "中值公司", "A001", "2019/12/11", "aioverg",
        [
            ["苹果", "A0001", "千克", "3.00", "3.00", "20", "100"],
            ["梨子", "A0002", "千克", "5.00", "5.00", "20", "100"]
        ],
        "800.00", "800.00", "AAAAA"
    ],
    [
        "002", "极限公司", "A001", "2019/12/11", "aioverg",
        [
            ["桃子", "A0003", "千克", "6.00", "6.00", "10", "100"],
            ["香蕉", "A0004", "千克", "2.50", "2.50", "10", "100"],
        ],
        "850.00", "850.00", "BBBBB"
    ],
]

//客户管理数据查询返回函数
function queryOrderData(option){
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

export {queryOrderData}