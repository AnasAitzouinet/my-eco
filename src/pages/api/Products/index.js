// import { products } from "../../data";

// export default function handler(req,res) {
//     res.status(200).json(products)
// }

import  data  from '../../../../datas.json'
export default function handler(req, res) {
    const product = data[0].products;

    res.status(200).json(product)
}
