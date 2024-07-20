import { createContext, useEffect, useState } from "react";
// import { useAuth } from "./AuthContext";
import { food_list } from "../assets/assets";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  // const {userUid} = useAuth();
  const [userUid,setUserUid] = useState('');


  // console.log(userUid);
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const totalAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);

        TotalAmount += itemInfo.price * cartItems[item];
      }
    }

    return parseInt(TotalAmount);
  };


  async function storeUserData(id, data) {
    try {
      // Create a reference to the user's collection
      const db = getFirestore();
      const userCollection = collection(db,`cart_data/${id}/userData`);

      // Add a document to the user's collection
      const docRef = await addDoc(userCollection, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  {}

  useEffect(()=>{

    storeUserData(userUid,cartItems);

    console.log(userUid);
  },[cartItems])
  
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalAmount,
    userUid,
    setUserUid,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;