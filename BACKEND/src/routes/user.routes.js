import {Router} from 'express'
import { loginUser, logoutUser, registerUser ,refreshAccessToken ,
    changeCurrentPassword,updateAccountDetails , getCurrentUser,
    updateUserAvatar ,updateUserCoverImage ,getCurrentUserProfile ,getWatchHistory} from '../controllers/user.controller.js'
import {upload} from '../middleware/multer.middleware.js'
import {verifyJWT } from '../middleware/auth.middleware.js'

const router = Router()

router.route("/image").post(
    upload.fields([
        {
            name : "Image" ,
            maxCount : 1,

        }
       
    ]),
    registerUser)
   
router.route('/login').post(loginUser)


// secured Routes 
router.route('/logout').post(verifyJWT , logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT,changeCurrentPassword)

router.route("/current-user").get(verifyJWT,getCurrentUser)

router.route("/update-account").patch(verifyJWT,updateAccountDetails)

router.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)

router.route("/cover-image").patch(verifyJWT,upload.single("coverimage"),updateUserCoverImage)

router.route("/c/:username").get(verifyJWT,getCurrentUserProfile)

router.route("/history").get(verifyJWT,getWatchHistory)


export default router 