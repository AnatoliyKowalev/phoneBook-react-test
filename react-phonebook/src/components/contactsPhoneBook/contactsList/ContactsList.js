import React, { Component } from 'react';
import $ from "jquery";

const Contact = (props) => {
	return (	
		<div 
			className="contact-list__contact" 
			onClick={(e) => {
				$(e.target).find('.formChanging').removeClass('hide')
			}}
		>
			<img className="photo small" src={props.user.photo} alt="contact" />
			<div className="contactInfo">
				<div className="contactInfo-item">
					<i className="icon default i-contact" />
					<p className="text"> {props.user.name} </p>
				</div>

				<div className="contactInfo-item">
					<i className="icon default i-phone" />
					<p className="text"> {props.user.contact} </p>
				</div>

				<div className="contactInfo-item">
					<i className="icon default i-location" />
					<p className="text"> {props.user.location} </p>
				</div>
			</div>
			
			<form className="formChanging hide">
				<div className="head">
					<h1 className="title light title-2">Type to edit</h1>
					<div className="close" onClick = {(e) => {
						$('.formChanging').addClass('hide');}}>
					</div>
				</div>

				<div className="form-item">
					<input 
						defaultValue={props.user.name} 
						type="text" 
						onChange = {(e) => {
							props.user.name = e.target.value
						}} 
						placeholder="Name"
						maxLength="20" 
					/>
				</div>

				<div className="form-item">
					<input 
						defaultValue={props.user.contact} 
						type="text" 
						onChange = {(e) => {
							props.user.contact = e.target.value
						}} 
						placeholder="Contact"
						maxLength="11" 
					/>
				</div>
		    	
				<div className="form-item">
					<input 
						defaultValue={props.user.location} 
						type="text" 
						onChange = {(e) => {
							props.user.location = e.target.value
						}} 
						placeholder="Location"
						maxLength="20" 
					/>
				</div>
		    	
				<div className="form-item">
					<input 
						defaultValue={props.user.photo} 
						type="text" 
						onChange = {(e) => {
							props.user.photo = e.target.value
						}} 
						placeholder="Link to photo"
					/>
				</div>
		    	
				<button 
					className="btn" 
					type="reset" 
					onClick={(e) => {
		 				props.onChange();
		 			}}
	 			>   Save changes
	 			</button> 
				
		    </form>

		    <button 
		    	className="btn delete" 
		    	type="submit" 
		    	onClick={() => {
			 		props.onDeleteContact(props.index)}}
	 		>	Delete
			</button> 
		</div>
	)
}

class AddContact extends Component {
	state = {
		name: "",
		contact: "",
		location: ""
	}
	onChangeName = (e) => {
		this.setState({name: e.target.value})
	}

	onChangeContact = (e) => {
		this.setState({contact: e.target.value})
	}

	onChangeLocation = (e) => {
		this.setState({location: e.target.value})
	}

	onChangePhoto = (e) => {
		this.setState({photo: e.target.value})
	}

	render() {
		return (
			<div className="addContact hide">
				<form className="addContact__form" id="addContact__form">

					<div className="head">	
						<h1 className="title light title-2">Add new contact</h1>
						<div 
							className="close" 
							onClick = {(e) => {
								$('.addContact').addClass("hide")
							}}
						>
						</div>
					</div>

					<div className="form-item">
						<input 
							type="text" 
							onChange = {this.onChangeName} 
							maxLength="20" 
							placeholder="Name" 
						/>
					</div>

					<div className="form-item">
						<input 
							type="phone" 
							onChange = {this.onChangeContact}  
							maxLength="11" 
							placeholder="Contact" 
						/>	
					</div>
		
					<div className="form-item">
						<input 
							type="text"  
							onChange = {this.onChangeLocation} 
							maxLength="20" 
							placeholder="Location"  
						/>
					</div>

					<div className="form-item">
						<input 
							type="text"
							onChange = {this.onChangePhoto} 
							placeholder="link to photo"  
						/>	
					</div>

					<button 
						className="btn" 
						type="reset" 
						onClick = {(e) => {
							this.props.onAddContact(this.state)
							$('.addContact').addClass('hide')
						}}
					>   Add contact
					</button>
				</form>
			</div>
		)
	}
}

class ContactList extends Component {
	constructor(props) {
	 	super(props)
		this.state = {
			searchString: "",
			contactUsersList: [
			{
				name: 'Tanya',
				contact: '0668435698',
				location: "Kherson",
				photo: "https://habrastorage.org/r/w60/getpro/toster/avatars/d81/2c5/86d/d812c586d5d94b955a3d091cd8d8de86.jpg"
			},
			{
				name: 'Jenya',
				contact: '095678593',
				location: "Kherson",
				photo: "https://habrastorage.org/r/w60/files/46d/575/a02/46d575a02b22465e8052e792e81335f8.jpg"
			},
			{
				name: 'Peter',
				contact: '095677783',
				location: "Kherson",
				photo: "https://habrastorage.org/r/w60/web/943/f84/6ee/943f846ee1b543b5a5d5cd0e5bf9eddf.jpg"
			},
			{
				name: 'Olivia',
				contact: '0668459381',
				location: "Kherson",
				photo: "https://habrastorage.org/r/w60/webt/5c/9b/9c/5c9b9c017daab187442466.jpeg"
			},
			{
				name: 'Franko',
				contact: '0668459381',
				location: "Kherson",
				photo: "https://habrastorage.org/r/w60/webt/5c/33/c8/5c33c8f4c854b059948730.jpeg"
			},
			{
				name: 'Den',
				contact: '0668459381',
				location: "Kherson",
				photo: "https://habrastorage.org/r/w60/webt/5b/83/a6/5b83a667d7b05720810221.jpeg"
			},
			{
				name: 'Dima',
				contact: '0956683756',
				location: "Kherson",
				photo: "https://habrastorage.org/r/w60/webt/5a/bc/c3/5abcc31f72158043234668.jpeg"
			},
			]
		};
		 this.onChange = this.onChange.bind(this);
		 this.handleChange = this.handleChange.bind(this);
	}

 	handleChange() {
	    this.setState({
	      searchString: this.refs.search.value
	    });
	}

	onDeleteContact = (index) => {
		const { contactUsersList } = this.state
		contactUsersList.splice(index, 1)
		this.setState({ contactUsersList })
	}

	onAddContact = (contactData) => {
		const newContact = contactData
		const {contactUsersList} = this.state
		contactUsersList.unshift(newContact)
		this.setState({contactUsersList})
	}

	onChange(e) {
		this.setState(this.state)
		$('.formChanging').addClass('hide')
    }

	render() {
		let _users = this.state.contactUsersList
   		let search = this.state.searchString.trim().toLowerCase()

    	if (search.length > 0) {
    		_users = _users.filter(function(user) {
        		return user.name.toLowerCase().match(search)
      		});
   		}

		return (
			<div className="ContactList">
				<AddContact onAddContact = {this.onAddContact}/>

				<div className="searchLine">
					 <input
			            type="text"
			            value={this.state.searchString}
			            ref="search"
			            onChange={this.handleChange}
			            placeholder="start type name..."
			            maxLength="20" 
			          />
			          <i className="icon default search" />
				</div>
				
        		<ul className="Contact" id="Contact">
         			{_users.map((user, index) => {
              			return (
	                		<li >
								<Contact 
									user = {user} 
									index = {index} 
							  		onDeleteContact = {this.onDeleteContact} 
							  		onChange = {this.onChange} 
						  		/>
	              			</li>
              			);
           			})}
          		</ul>
			</div>
		)
	}
}

export default ContactList