import {Router} from 'express'
import { loginUser, logoutUser, registerUser ,refreshAccessToken ,
    changeCurrentPassword,updateAccountDetails , getCurrentUser ,getUserCredencials ,uploadImage ,getAllImages } from '../controllers/user.controller.js'
import {upload} from '../middleware/multer.middleware.js'
import {verifyJWT } from '../middleware/auth.middleware.js'

const router = Router()

router.route("/image/:id").post(upload.fields([{ name: "Image", maxCount: 1 }]), uploadImage);

router.route("/all-image/:id").get(getAllImages);

   
router.route('/login').post(loginUser)

router.route('/register').post(registerUser)

router.route('/test').get((req,res)=>{res.send("hii")})


// secured Routes 
router.route('/logout').post(verifyJWT , logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT,changeCurrentPassword)

router.route("/current-user").get(verifyJWT,getCurrentUser)

router.route("/credencials").get(getUserCredencials)

router.route("/update-account").patch(verifyJWT,updateAccountDetails)




export default router 