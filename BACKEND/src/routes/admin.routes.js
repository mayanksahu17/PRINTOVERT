import  {
    getAllOrderedProducts,
    getAllActiveProducts,
    getAllDeliveredProducts,
    getAllWalletRequest,
    registerAdmin,
    test,
    loginAdmin,
    getwalletrequests,
    addwalletamount
} from '../controllers/admin.controller.js'
import {Router} from 'express'

const router = Router()

router.route("/ordered/get-all-products").get(getAllOrderedProducts)

router.route("/active/get-all-products").get(getAllActiveProducts)

router.route("/delivered/get-all-products").get(getAllDeliveredProducts)

router.route('/wallet/requests').get(getAllWalletRequest)

router.route("/register").post(registerAdmin)

router.route("/login").post(loginAdmin)

router.route("/get-wallet-requests").get(getwalletrequests)

router.route("/add-wallet-amount").post(addwalletamount)

router.route("/test").get(test)



export default router 