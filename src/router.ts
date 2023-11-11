import { Router } from "express";

const router = Router();

/*Products*/
router.get('/product', (req, res) => {
    res.json({message: "hello"})
});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
router.post('/product', () => {});
router.delete('/product/:id', () => {});

/*Update*/
router.get('/product', () => {});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
router.post('/product', () => {});
router.delete('/product/:id', () => {});

/*Update Points*/
router.get('/product', () => {});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
router.post('/product', () => {});
router.delete('/product/:id', () => {});

export default router;