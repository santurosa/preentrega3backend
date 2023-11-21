import { productsService, cartsService } from "../repositories/index.js";

export const loginView = (req, res)=> {
    res.render("login");
}

export const registerView = (req, res)=> {
    res.render("register")
}

export const productsView = async (req, res) => {
    const { limit = 10, page = 1 } = req.query;
    const user = req.session.user;
    const { products, hasPrevPage, hasNextPage, nextPage, prevPage } = await productsService.getProducts(limit, page);
    res.render("products", { products, hasPrevPage, hasNextPage, nextPage, prevPage, limit, user });
}

export const cartsView = async (req, res) => {
    const cid = req.params.cid
    const cart = await cartsService.getCart(cid);
    res.render("carts", {cart});
}

export const chatView = (req, res) => {
    res.render("chat", {});
}