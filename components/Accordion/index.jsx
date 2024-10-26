import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const data = [
    { value: "item-1", trigger: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
    { value: "item-2", trigger: "Is it unstyled?", content: "Yes. It's unstyled by default, giving you freedom over the look and feel." },
    { value: "item-3", trigger: "Can it be animated?", content: "Yes! You can animate the Accordion with CSS or JavaScript." },
];

const Accordion = ({ multiple = false }) => {
    const [open, setOpen] = useState(null);
    function handleOpenSingle(value) {
        setOpen(open === value ? null : value);
    }
    const [openMultiple, setOpenMultiple] = useState([]);
    function handleOpenMultiple(value) {
        const index = openMultiple.indexOf(value);
        let openMultipleCopy = [...openMultiple];
        if (index === -1) {
            openMultipleCopy.push(value);
        } else {
            openMultipleCopy.splice(index, 1);
        }
        setOpenMultiple(openMultipleCopy);
    }
    function handleOpen(value) {
        multiple ? handleOpenMultiple(value) : handleOpenSingle(value);
    }
    return (
        <div className="AccordionRoot w-80">
            {data.map((item) => (
                <div
                    className="AccordionItem"
                    value={item.value}
                    key={item.value}
                >
                    <h3
                        className="AccordionHeader flex"
                        onClick={() => handleOpen(item.value)}
                    >
                        <button className="flex items-center flex-1 justify-between">
                            {item.trigger}
                            <RxChevronDown
                                className="AccordionChevron"
                                aria-hidden
                            />
                        </button>
                    </h3>
                    {(multiple ? openMultiple.includes(item.value) : open === item.value) ? <div className="AccordionContent">{item.content}</div> : null}
                </div>
            ))}
        </div>
    );
};

export { Accordion };
