import React, { useState } from "react";
import { useStateContext } from "../context";
import RetailerList from "../components/RetailerTable";
import Footer from "../components/Footer";
import { toast } from "react-toastify";


const Retailer = () => {
  const [newRetailerId, setNewRetailerId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addRetailerResult, setAddRetailerResult] = useState(null);
  const [error, setError] = useState(null);

  const { addNewRetailer } = useStateContext();

  const handleFormFieldChange = (e) => {
    setNewRetailerId(e.target.value);
  };

  const handleAddRetailer = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await addNewRetailer(newRetailerId);
      setAddRetailerResult("Retailer added successfully");
      toast("Retailer added successfully", { type: "success" });
    } catch (error) {
      console.error("Error adding retailer:", error);
      toast("Error adding retailer", { type: "error" });
      setError("Error adding retailer");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white ">
      <div className="max-w-screen-xl mx-auto">
      <div className="text-xl font-semibold dark:text-white my-8">
          -&gt; Retailer Actions
        </div>
        <RetailerList />
      </div>
      <Footer role={"retailer"}/>
    </div>
  );
};

export default Retailer;
