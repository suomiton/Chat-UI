import * as React from "react";
import * as ReactDOM from "react-dom";

class ChatListing extends React.Component<IChatListing, {}> {
	constructor(props: IChatListing) {
		super(props);
	}

	public handleClick(event: __React.MouseEvent) {
		this.props.onSelect(this.props.name);
	}

	public render(){
		return (
			<li onClick={this.handleClick}>
				{this.props.name}
			</li>
		);
	}		
}

export { ChatListing };