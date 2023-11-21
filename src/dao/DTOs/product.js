export default class ProductDTO {
    constructor(product) {
        this.title = product.title.trim(),
            this.description = product.description.trim(),
            this.price = +product.price > 0 ? product.price : 0,
            this.status = product.status === true || product.status === false ? product.status : true,
            this.stock = +product.stock > 0 ? product.stock : 0,
            this.category = product.category.trim(),
            this.thumbnail = !product.thumbnail ? product.thumbnail : ["Sin imagenes"]
    }
}