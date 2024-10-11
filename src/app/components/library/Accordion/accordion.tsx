import * as React from "react";
import "./accordion.css";

export interface IAccordionProps {
	title: string | React.ReactNode;
	content: React.ReactNode;
}

export const Accordion: React.FC<IAccordionProps> = ({ title, content }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleClick = () => {
		const toggle = !isOpen;
		console.log("new state:", toggle);
		setIsOpen(toggle);
	};
	return (
		<div className="accordion">
			<button className="accordion-title" onClick={handleClick}>
				<h3>{title}</h3>
				<div className={`indicator ${isOpen ? "open" : "closed"}`}></div>
			</button>
			<div className={`accordion-panel ${isOpen ? "open" : "closed"}`}>
				{content}
			</div>
		</div>
	);
};
