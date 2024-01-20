import {addNewProduct , UpdateProduct , removeProduct,getAllProducts} from '../controllers/product.controller.js'
import {Router} from 'express'
import {upload} from '../middleware/multer.middleware.js'



const router = Router()

router.route("/:id/add-new/product").post(upload.fields([{ name: "Image", maxCount: 4 }]), addNewProduct);

router.route("/:userId/products/:productId").put(UpdateProduct);

router.route("/:userId/products/:productId").delete(removeProduct);

router.route("/:id/get-all-products").get(getAllProducts)

router.route('/test').get((req,res)=>{res.send("hii")})


export default router 
