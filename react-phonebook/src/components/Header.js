import React from 'react';
import $ from "jquery";

function Header() {
 return (
		<div className="headerContent">
			<i className="icon large phoneBook" />
			<h1 className="title light title-1">Contact book</h1>
			<div 
				className="btn d-flex flex-wrap-nowrap" 
				onClick={(e) => {
					$('.addContact').removeClass('hide')
				}}
			> 
				<p> Add </p>
				<i className="icon default newUser" />
			</div>
		</div>	
	)
}

export default Header