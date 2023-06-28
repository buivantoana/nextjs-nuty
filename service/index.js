import axios from "../axios/axios";
const addcategory = (payload) => {
  return axios.post("/addcategory", payload);
};
const updatecategory = (payload) => {
  return axios.post("/updatecategory", payload);
};
const deletecategory = (payload) => {
  return axios.post("/deletecategory", payload);
};
const getcategory = () => {
  return axios.get("/getcategory");
};

const addrole = (payload) => {
  return axios.post("/addrole", payload);
};
const updaterole = (payload) => {
  return axios.post("/updaterole", payload);
};
const addbrand = (payload) => {
  return axios.post("/addbrand", payload);
};
const gettypebrand = (payload) => {
  return axios.post("/gettypebrand", payload);
};
const getbrand = (payload) => {
  return axios.post("/getbrand", payload);
};
const updatebrand = (payload) => {
  return axios.post("/updatebrand", payload);
};
const getrole = () => {
  return axios.get("/getrole");
};
const getroletype = (payload) => {
  return axios.post("/getroletype", payload);
};

const addproduct = (payload) => {
  return axios.post("/addproduct", payload);
};
const updateproduct = (payload) => {
  return axios.post("/updateproduct", payload);
};
const getproduct = (payload) => {
  return axios.post("/getproduct", payload);
};
const getproductcategory = (payload) => {
  return axios.post("/getproductcategory", payload);
};
const getproductitem = (payload) => {
  return axios.post("/getproductitem", payload);
};
const getdetailimg = (payload) => {
  return axios.post("/getdetailimg", payload);
};
const getdetaildes = (payload) => {
  return axios.post("/getdetaildes", payload);
};
const adddetailimg = (payload) => {
  return axios.post("/adddetailimg", payload);
};
const adddetaildes = (payload) => {
  return axios.post("/adddetaildes", payload);
};
const adduser = (payload) => {
  return axios.post("/adduser", payload);
};
const loginuser = (payload) => {
  return axios.post("/loginuser", payload);
};
const logoutuser = (payload) => {
  return axios.get("/logoutuser", payload);
};
const authentication = (authToken) => {
  return axios.get("/authentication", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};
const addcart = (payload) => {
  return axios.post("/addcart", payload);
};
const deletecart = (payload) => {
  return axios.post("/deletecart", payload);
};
const updatecart = (payload) => {
  return axios.post("/updatecart", payload);
};
const getcart = (payload) => {
  return axios.post("/getcart", payload);
};
const addorder = (payload) => {
  return axios.post("/addorder", payload);
};
const getorder = (payload) => {
  return axios.post("/getorder", payload);
};
const deleteorder = (payload) => {
  return axios.post("/deleteorder", payload);
};
const addstar = (payload) => {
  return axios.post("/addstar", payload);
};
const addcomment = (payload) => {
  return axios.post("/addcomment", payload);
};
const getcomment = (payload) => {
  return axios.post("/getcomment", payload);
};
const updatecomment = (payload) => {
  return axios.post("/updatecomment", payload);
};
const destroycomment = (payload) => {
  return axios.post("/destroycomment", payload);
};
const addcommentchild = (payload) => {
  return axios.post("/addcommentchild", payload);
};
const deletecommentchild = (payload) => {
  return axios.post("/deletecommentchild", payload);
};
const deleteallcommentchild = (payload) => {
  return axios.post("/deleteallcommentchild", payload);
};
const getallproductpresent = () => {
  return axios.get("/getallproductpresent");
};
const addpresent = (payload) => {
  return axios.post("/addpresent", payload);
};
const searchproduct = (payload) => {
  return axios.post("/searchproduct", payload);
};
const getsaleproduct = (payload) => {
  return axios.post("/getsaleproduct", payload);
};
const addcategorymagazile = (payload) => {
  return axios.post("/addcategorymagazile", payload);
};
const getcategorymagazile = (payload) => {
  return axios.get("/getcategorymagazile", payload);
};
const addmagazile = (payload) => {
  return axios.post("/addmagazile", payload);
};
const getmagazile = (payload) => {
  return axios.get("/getmagazile", payload);
};
const getbrandproduct = (payload) => {
  return axios.post("/getbrandproduct", payload);
};
export {
  addcategory,
  getcategory,
  deletecategory,
  addrole,
  getrole,
  addbrand,
  updatebrand,
  gettypebrand,
  getbrand,
  addproduct,
  getproduct,
  getproductcategory,
  getroletype,
  adddetailimg,
  adddetaildes,
  getproductitem,
  getdetailimg,
  getdetaildes,
  adduser,
  loginuser,
  logoutuser,
  authentication,
  addcart,
  getcart,
  deletecart,
  updatecart,
  addorder,
  getorder,
  deleteorder,
  addstar,
  addcomment,
  getcomment,
  updatecomment,
  destroycomment,
  addcommentchild,
  deletecommentchild,
  deleteallcommentchild,
  updateproduct,
  updatecategory,
  updaterole,
  getallproductpresent,
  addpresent,
  searchproduct,
  getsaleproduct,
  addcategorymagazile,
  getcategorymagazile,
  addmagazile,
  getmagazile,
  getbrandproduct,
};
