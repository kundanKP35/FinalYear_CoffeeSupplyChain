import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import mentor from "../assets/mentor.jpeg";
import logo from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";


const TeamMember = ({ name, role, contributions, image }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center mb-8">
      <div className="w-1/12 mr-20">
        <img src={image} alt={name} className="rounded-full w-full" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{role}</p>
        <ul className="flex pipelist">
          {contributions.map((contribution, index) => (
            <li key={index} className="mr-2">
              {contribution}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TeamsPage = () => {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto py-8 text-white">
        <h1 className="text-9xl font-bold mt-96 mb-32">About Us</h1>
        <h1 className="text-4xl font-bold mb-4">
          Blockchain powered coffee supply chain
        </h1>
        <p className="text-lg mb-6">
          This product aims to revolutionize the coffee industry by leveraging
          blockchain technology. By integrating blockchain into the coffee
          supply chain, we ensure transparency, traceability, and authenticity
          from farm to cup.
          <br /> <br />
          Through this innovative solution, consumers can track the journey of
          their coffee beans right from the farm where they were grown to the
          moment they are brewed. This transparency instills trust and
          confidence in the product's quality and ethical sourcing practices.
        </p>
        <div className="border-b border-gray-300 mb-6 pb-16">
          <ul className="flex pipelist">
            <li className=" animate-pulse">Feature 1</li>
            <li className=" animate-pulse">Feature 2</li>
            <li className=" animate-pulse">Feature 3</li>
            <li className="animate-pulse">Feature 4</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <TeamMember
            name="Vaibhav Gupta"
            role="Software Engineer"
            contributions={[
              "Frontend development",
              "UI/UX design",
              "Feature implementation",
              "Testing",
            ]}
            image={pic1}
          />
          <TeamMember
            name="Kundan Prasad"
            role="Blockchain Developer"
            contributions={[
              "Project planning",
              "Requirement gathering",
              "Team coordination",
              "Documentation",
            ]}
            image={pic2}
          />
          <TeamMember
            name="Chetan Pediredla"
            role="QA Engineer"
            contributions={[
              "Testing",
              "Bug fixing",
              "Quality assurance",
              "Performance optimization",
            ]}
            image={pic3}
          />
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Our sepacial heartfelt thanks to our mentor
          </h2>
          <TeamMember
            name="Dr. Srichandan Sobhanayak"
            role="Assistant Professor at IIIT Bhubaneswar"
            contributions={[
              "Cloud Computing",
              "IoT",
              "Blockchain Technology",
              "Distributed computing",
            ]}
            image={mentor}
          />
        </div>
      </div>
      <footer className="bg-white border-gray-200 dark:bg-gray-900 text-white">
        <div className="w-full  p-4 md:py-8">
          <div className="flex justify-between max-w-screen-xl mx-auto">
            <div className=" sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"  onClick={()=>navigate("/")}>
                {/* <img src={logo} className="h-8" alt="Flowbite Logo" /> */}
                <img src={logo} alt="Logo" className="w-40 h-16" onClick={()=>navigate("/")} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap" onClick={()=>navigate("/")}>
                  Ace Coffee Suppliers
                </span>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Ace Coffee Suppliers
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default TeamsPage;
