// pages/api/coupons.js
export default async function handle(req, res) {
    const {method} = req;

    switch (method) {
        case 'GET':
            // 獲取優惠券列表
            break;
        case 'POST':
            // 新增優惠券
            break;
        case 'PUT':
            // 更新優惠券
            break;
        case 'DELETE':
            // 刪除優惠券
            const {id} = req.query;
            break;
    }
}