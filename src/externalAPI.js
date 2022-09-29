import axios from "axios";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginerror, signin } from "./reducers/userSlice";
import { fetchAllProducts } from "./reducers/productSlice";

export const getAllProducts = () => {
    return async dispatch => {

        try {
            const response = await axios.get('https://dummyjson.com/products');
    
            const products = response.data.products;

            dispatch(fetchAllProducts(products));
    
        }catch(e){
            console.warn(e);
        }
    }
}

export const signinRequest = ({username, password}) => {

    return async dispatch => {
  
      let token;
  
      try{
  
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username,
          password
        });
  
        token = response.data.token;
        await AsyncStorage.setItem("token", token);
  
        dispatch(signin(token));
      }catch(err){
        console.warn(err);
        dispatch(loginerror(err.message));
      }
    }
  };