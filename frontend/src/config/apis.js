
// const localpath = "https://real-time-chat-backend-seven.vercel.app";
// const localpath = "http://127.0.0.1:3001";
// const localpath = "https://real-time-chat-backend-8vhq.onrender.com";
const localpath = "http://192.168.254.222:3001";
// const localpath = "https://real-time-chat-backend-8vhq.onrender.com";


const api_paths = {

     backendPath: `${localpath}`,
     register: `${localpath}/user/signup`,
     login: `${localpath}/user/login`,

     UserData: `${localpath}/user/userdata`,
     SearchUser: `${localpath}/user/search`,
     GetAllUsers: `${localpath}/user/Alluser`,
     ImageUpload: `${localpath}/image/upload`,

     // forgetpass: `${localpath}/forgetpass`,
     // otpverify: `${localpath}/verify`,
     // all_products: `${localpath}/products/allproducts`,
     // popularinwomen: `${localpath}/products/popularinwomen`,
     // newcollections: `${localpath}/products/newcollections`,
     // GetOtpTimer : `${localpath}/GetOtpTimer`,
     // UpdatePass : `${localpath}/UpdatePass`,
     // singleproduct : `${localpath}/products`,
     // addtocart : `${localpath}/cart/addtocart`,
     // removefromcart : `${localpath}/cart/removefromcart`,
     // getcartitem : `${localpath}/cart/getcartitem`,

}

export default api_paths;
