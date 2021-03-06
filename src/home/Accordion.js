import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold =
      index === activeIndex ? "font-weight-bold font-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        key={index}
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Accordion;
