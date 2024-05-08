import plusIcon from "../../assets/images/plus.svg";
import minusIcon from "../../assets/images/minus.svg";
import { useState } from "react";

const Accordion = () => {
  return (
    <>
      <AccordionItems />
    </>
  );
};

const AccordionItems = () => {
  const accordionData = [
    { title: "Do you offer freelancers?", desc: "sample text 1" },
    {
      title:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      desc: "sample text 2",
    },
    {
      title: "Can I hire multiple talents at once?",
      desc: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      title: "Why should I not go to an agency directly?",
      desc: "sample text 3",
    },
    {
      title: "Who can help me pick a right skillset and duration for me?",
      desc: "sample text 4",
    },
  ];

  const [expandedItems, setExpandedItems] = useState(
    new Array(accordionData.length).fill(false)
  );

  const handleItemClick = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  return (
    <>
      {accordionData.map((singleItem, index) => (
        <div
          key={index}
          className="max-w-[33.75rem] mb-16 border-b border-b-[#D7D7D7]"
        >
          <div className="pb-6  mt-9 flex justify-between">
            <h1 className="font-semibold text-xl text-[#1C1C1C]">
              {singleItem.title}
            </h1>
            <img
              src={expandedItems[index] ? minusIcon : plusIcon}
              alt="Icon"
              className="cursor-pointer"
              onClick={() => handleItemClick(index)}
            />
          </div>
          {expandedItems[index] && (
            <p className="text-[#617275] mb-6">{singleItem.desc}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
