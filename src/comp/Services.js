import "../uni.css"
import "./Services.css"
import Card from "./Card";

const servicesTitle=["Stock Investment","Systematic Investment Plan","Mutal Fund"];

function Services()
{
	return(
		<div className="full-cover">
			<div className="flex-row-evenly"><span className="page-heading">Services</span></div>
			<Cards/>
		</div>
	)
}


function Cards()
{
	return (
		<div className="Cards flex-row-evenly">
			{servicesTitle.map((val)=>
				<Card title={val} btn={"Read More"}/>
			)}
		</div>
	)
}


export default Services