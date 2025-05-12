import "./Product.css"
 import Price from "./Price.jsx";
import { TbBackground } from "react-icons/tb";
function Product({title, desciption,idx}) {
  let oldprices = ["24","23","24","34"];
  let newprices = ["35","43","53","35"];
  return (
    <>
    <div className="Product">
        <p>{title}</p>
        <p>{desciption}</p>
      <p style={{ backgroundColor: "yellow"}}><Price
        oldPrice={oldprices[idx]}
        newPrice={newprices[idx]} 
        /></p> 
    </div>     
    </>
  );
}
export default Product;