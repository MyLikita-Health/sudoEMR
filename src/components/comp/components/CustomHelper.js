import React from "react";

function CustomHelper() {
  return (
    <div >
      <div className="d-flex ">
        <ins>
          <h6>
            <span></span>Shortcut Keys:
          </h6>
        </ins>{" "}
        <h6 className="text-white mr-2">"Press Enter Key"= Add to cart</h6>
        <h6 className="text-white"> "Press E key" = Edit</h6>
        <h6 className="text-white">"Press F2 key" = Checkout</h6>
        <br />
        
      </div>
    </div>
  );
}

export default CustomHelper;
