import { useDispatch } from "react-redux";
import { GET_IMAGE_URL } from "../constants";
import { addItem } from "../utils/cartSlice";


export default function MenueCard(info) {
   //{console.log(info.info)};
    const {imageId,name, defaultPrice,price} = info.info
    //when we click on button it dispatches an action which calls reducer function & slice of store gets updated
   const dispatch =  useDispatch();
 const AddItemToCart = ()=>{
    dispatch(addItem(info.info))
 }

  return (
    <>
      <div className="card w-56 h-[350px]  bg-[#0A0C0B] text-[#E4AE74] rounded-xl p-4 m-3 ">
        <img className="rounded-xl" src={GET_IMAGE_URL + imageId} alt="img" />
        <h2 className="font-bold">{name}</h2>
        <div className="flex justify-between">
          <h3>
            {" "}
            Price:
            {info.defaultPrice
              ? Math.floor(defaultPrice / 100)
              : Math.floor(price / 100)}
          </h3>

          <button className="bg-green-600 text-white font-bold p-1 rounded-md " onClick={()=>AddItemToCart()}>
            add Item
          </button>
        </div>
      </div>
    </>
  );
}
