import "../uni.css"
import "./Plans.css"
import Card from "./Card"

const plansTitle=["Basic","Intermediate","Pro"];
const plansPrice=["4.99","14.99","25.99"];

function Plans()
{
	return(
		<div className="full-cover">
			<div className="flex-row-evenly"><span className="page-heading">Plans</span></div>
			<Cards />
		</div>
	)
}


function Cards({obj,btn})
{
	return (
		<div className="Cards flex-row-evenly">
			{plansTitle.map((val,ind)=>
				<Card title={val} btn={"Subscribe Now"} isNext={true} Next={`$${plansPrice[ind]}/yr`} />
			)}
		</div>
	)
}


export default Plans