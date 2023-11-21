import { productsService } from "../repositories/index.js";

export const getProducts = async (req, res) => {
    try {
        const { limit = 10, page = 1, sort, title, category } = req.query;
        const { products, hasPrevPage, hasNextPage, nextPage, prevPage } = await productsService.getProducts(limit, page, sort, title, category);        
        res.send({ status: "success", payload: products, hasPrevPage, hasNextPage, nextPage, prevPage });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
}

export const getProductById = async (req, res) => {
    try {
        const pid = req.params.pid;
        const result = await productsService.getProductById(pid);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
}

export const saveProducts = async (req, res) => {
    try {
        const product = req.body;
        const result = await productsService.saveProducts(product);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
}

export const upgrateProduct = async (req, res) => {
    try {
        const pid = req.params.pid;
        const upgrate = req.body;

        const result = await productsService.upgrateProduct(pid, upgrate);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const pid = req.params.pid;

        const result = await productsService.deleteProduct(pid);
        res.send({ status: "success", payload: result });
    } catch (error) {
        res.status(500).send({ status: "error", error });
    }
}