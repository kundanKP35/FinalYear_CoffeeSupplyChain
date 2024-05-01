import React, { useState } from "react";
import { useStateContext } from "../context";
import ConsumerList from "../components/ConsumerTable";
import Footer from "../components/Footer";

const Consumer = () => {
  const [newConsumerId, setNewConsumerId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addConsumerResult, setAddConsumerResult] = useState(null);
  const [error, setError] = useState(null);

  const { addNewConsumer } = useStateContext();

  const handleFormFieldChange = (e) => {
    setNewConsumerId(e.target.value);
  };

  const handleAddConsumer = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await addNewConsumer(newConsumerId);
      setAddConsumerResult("Consumer added successfully");
    } catch (error) {
      console.error("Error adding consumer:", error);
      setError("Error adding consumer");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white ">
      <div className="max-w-screen-xl mx-auto">
      <div className="text-xl font-semibold dark:text-white my-8">
          -&gt; Consumer Actions
        </div>
        <ConsumerList />
      </div>
      <Footer role={"consumer"}/>
    </div>
  );
};

export default Consumer;
