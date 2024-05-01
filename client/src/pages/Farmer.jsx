import React, { useState } from "react";
import { useStateContext } from "../context";
import FarmerList from "../components/FarmerTable";
import Footer from "../components/Footer";

const Farmer = () => {
  const [newFarmerId, setNewFarmerId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addFarmerResult, setAddFarmerResult] = useState(null);
  const [error, setError] = useState(null);

  const { addNewFarmer } = useStateContext();

  const handleFormFieldChange = (e) => {
    setNewFarmerId(e.target.value);
  };

  const handleAddFarmer = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await addNewFarmer(newFarmerId);
      setAddFarmerResult("Farmer added successfully");
    } catch (error) {
      console.error("Error adding farmer:", error);
      setError("Error adding farmer");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white ">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-xl font-semibold dark:text-white my-8">
          -&gt; Farmer Actions
        </div>
        <FarmerList />
      </div>
      <Footer role={"farmer"} />
    </div>
  );
};

export default Farmer;
