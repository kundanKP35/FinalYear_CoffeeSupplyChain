import React, { useState } from "react";
import { useStateContext } from "../context";
import DistributorList from "../components/DistributorTable";
import Footer from "../components/Footer";

const Distributor = () => {
  const [newDistributorId, setNewDistributorId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addDistributorResult, setAddDistributorResult] = useState(null);
  const [error, setError] = useState(null);

  const { addNewDistributor } = useStateContext();

  const handleFormFieldChange = (e) => {
    setNewDistributorId(e.target.value);
  };

  const handleAddDistributor = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await addNewDistributor(newDistributorId);
      setAddDistributorResult("Distributor added successfully");
    } catch (error) {
      console.error("Error adding distributor:", error);
      setError("Error adding distributor");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white ">
      <div className="max-w-screen-xl mx-auto">
      <div className="text-xl font-semibold dark:text-white my-8">
          -&gt; Distributor Actions
        </div>
        <DistributorList />
      </div>
      <Footer role={"distributor"}/>
    </div>
  );
};

export default Distributor;
