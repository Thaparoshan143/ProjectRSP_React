import "../uni.css"
import "./Card.css"

function Card(props)
{
	return (
		<div className="Card flex-column-evenly">
			<div><span className="Card-Title">{props.title}</span>{props.isNext?<span className="Card-Title">- {props.Next}</span>:""}</div>
			<Info name={props.title} />
			<button className="Button">{props.btn}</button>
		</div>
	)
}

function Info(props)
{
	return (
		<div className="flex-row-evenly Cont-Wrapper">
			<div className="Card-Img-Cont"></div>
			<div className="Card-Content">
				<span className="Text">{props.name} is the service provided by rsp, that provides future security in finance....</span>
			</div>
		</div>
	)
}

export default Card