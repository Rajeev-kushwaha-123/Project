import Product from "./product.jsx";
import "./ProductTab.css";
import Price from "./Price.jsx";

function ProductTab() {

  return (
    <>
    <div className="heading">
      <p>blockbuster deals on computer accessories|shop now </p>
      <div className="ProductTab">
       <span><Product title="logitech MX Master 35" desciption="5 programmable button" idx={0}/></span> 
       <span><Product title="Apple pencial(2nd gen)" desciption="design for ipad"idx={1}/></span> 
       <span><Product title="zebronic" desciption="design for laptop" idx={2}/></span> 
       <span><Product title="portronics toad 23" desciption="wireless mouse" idx={3}/></span> 
      </div>
    </div>
    </>
    
  );
}
export default ProductTab;