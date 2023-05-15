import "../uni.css"
import "./AboutUs.css"

function AboutUs()
{
	return(
		<div className="full-cover flex-column-evenly">
			<div className="flex-row-evenly"><span className="page-heading">About Us</span></div>
			<div className="Content flex-column-evenly">
				<span className="Text">We are the students of Thapathali Campus, from the department of BCT 2078. We are always looking for the way to make the life better as per the affortability from the student stand point of view.</span>
				<br /><span className="Text">This company stands out for the students to help them invest their saving wisely enough so that they can be secure financially, with subscription of plans as per their needs.</span>
			</div>
			<div>
				<button className="Button">Learn More</button>
			</div>
		</div>
	)
}

export default AboutUs