import { useContext } from "react";
import { itemContext } from "../context/itemContext";

export default function useItem () {
    return useContext(itemContext)
}