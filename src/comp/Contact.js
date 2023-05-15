import "../uni.css"
import "./Contact.css"

const socialMediaList=["Facebook","Twitter","Linkedin","Youtube","Instagram"];

function Contact()
{
	return(
		<div className="full-cover flex-column-evenly">
			<div className="flex-row-evenly"><span className="page-heading">Contact</span></div>
			<div className="Content flex-column-evenly">
				<Socials />
				<Form />
				{/* <span className="Text">We are always looking forward for the improvment. Any wise words from the visiters will be helpful.</span> */}
			</div>
			<br />
		</div>
	)
}

function Form()
{
	return (
		<div className="Form flex-column-evenly">
			Email : <input type="text" placeholder="Enter your email..." />
			Name : <input type="text" placeholder="Enter your Name..." />
			Comment : <input type="text" placeholder="Enter your Comment..." />
			<button className="Button">Get in touch</button>
		</div>
	)
}

function Socials()
{
	return (
		<div className="Socials flex-row-evenly">
		{socialMediaList.map(val=>(
			<Social title={val} />
		))}
		</div>
	)
}

function Social(props)
{
	return (
		<div className="Social flex-row-evenly">
			<img className="Icon" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png" alt="icon"/>
			<a href="#"> {props.title}</a>
		</div>
	)
}

export default Contact