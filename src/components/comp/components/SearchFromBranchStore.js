import React, { Fragment, useCallback, useEffect } from "react";
import { useState } from "react";
// import { getPurchasedItems } from "../../redux/actions/purchase";
import { useDispatch, useSelector } from "react-redux";
import {getPurchaseItem, getTotalDrug } from "../../../redux/actions/pharmacy";
import CustomTypeahead from "./CustomTypeahead";

function SearchFromBranchStore(props) {
  const [, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ from: 0, to: 100 });
  const purchaseItems = useSelector((state) => state.pharmacy.purchaseItems);
  // const data = useSelector((state) => state.purchase.purchaseList);
  // const final = purchaseItems&&purchaseItems.filter((i) => i.quantity > 0);
  let activeStore = props.activeStore?props.activeStore:null

const _getPurchaseItem = useCallback(() => {
  setLoading(true);
  dispatch(
    getPurchaseItem(form.from, form.to, activeStore, () => setLoading(false))
  );
  dispatch(getTotalDrug());
}, [dispatch, form.from, form.to, activeStore]);

 useEffect(() => {
   _getPurchaseItem();
 }, [0]);
  return (
    <>
      {/* {JSON.stringify(purchaseItems)} */}
      <CustomTypeahead
        {...props}
        _ref={props._ref}
        allowNew={props.allowNew}
        label={props.label || ""}
        placeholder="Search items by name"
        labelkey={props.labelkey}
        options={purchaseItems && purchaseItems}
        onInputChange={(v) => {
          if (v.length) {
            // console.log(v, "KDDDDDDDK");
            props.onInputChange(v);
          }
        }}
        onChange={(v) => {
          if (v.length) {
            props.onChange(v[0]);
            console.log(v[0], "KDDDDDDDK");
          }
        }}
      />
    </>
  );
}

export default SearchFromBranchStore;
