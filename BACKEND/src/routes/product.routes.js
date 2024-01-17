import {addNewProduct , UpdateProduct , removeProduct} from '../controllers/product.controller.js'
import {Router} from 'express'
import {upload} from '../middleware/multer.middleware.js'



const router = Router()

router.route("/:id/add-new/product/").post(upload.fields([{ name: "Image", maxCount: 1 }]), addNewProduct);

router.route("/:userId/products/:productId").put(UpdateProduct);

router.route("/:userId/products/:productId").delete(removeProduct);


export default router 
