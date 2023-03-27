import data from '../../../../datas.json';

export default function handler({ query: { id } }, res) {
    const products = data[0].products;
    const product = products.find((product) => product.id === id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}
