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
  return (
    <>
      {accordionData.map((singleItem, index) => (
        <>
          <div key={index}>
            <h1>{singleItem.title}</h1>
            <p>{singleItem.desc}</p>
          </div>
        </>
      ))}
    </>
  );
};
export default Accordion;
