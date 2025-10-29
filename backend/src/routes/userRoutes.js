import a9a from 'express';
import {
    check,
    forgotPassword,
    login,
    logout,
    protect,
    resetPassword,
    signup,
    updateMe,
    updatePassword
} from '../controllers/authController.js';
import {
    createProperty,
    getUsersProperties
} from '../controllers/propertyController.js';
const router = a9a['Router']();
router['route']('/signup')['post'](signup), router['route']('/login')['post'](login), router['route']('/logout')['get'](logout), router['route']('/updateMe')['patch'](protect, updateMe), router['route']('/updateMyPassword')['patch'](protect, updatePassword), router['route']('/forgotPassword')['post'](forgotPassword), router['route']('/resetPassword/:token')['patch'](resetPassword), router['route']('/me')['get'](protect, check), router['route']('/newAccommodation')['post'](protect, createProperty), router['route']('/myAccommodation')['get'](protect, getUsersProperties);
export {
    router
};