import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			users:[
				{
					name: "Ahmed Zaky",
					email: "ahmed@email.com",
					gen: 12,
					id: "24371-324769"
				},
				{
					name: "Ricardo Brandt",
					email: "ricardo@email.com",
					gen: 1,
					id: "98407"
				},
				{
					name: "Adwoa Comfort",
					email: "adwoa@email.com",
					gen: 15,
					id: "77482-64235"
				},
			]
		}
	}

	addNewUser=(user)=>{
		user.id = Math.random().toString()
		this.setState({
			users:[...this.state.users, user]
		})
	}

	deleteUser=(id)=>{
		let undeletedUser = this.state.users.filter(user=> user.id !== id);
		this.setState({
			users: undeletedUser
		})
	}

	editUser=(id, updatedUser)=>{
		this.setState({
			users: this.state.users.map(user=> user.id === id ? updatedUser:user)
		})
	}

	render(){
	return (
		<>
			<Container fluid style={{marginTop: "2rem"}}>
				<Row>
					
					<Col md="4">
					<h4 className="text-center">Add New User</h4>
						<AddUserForm addUser={this.addNewUser}/>
					</Col>
					<Col>
					<h4 className="text-center" style={{paddingBottom:"15px"}}>All Users</h4>
						<Users usersData={this.state.users} 
						deleteUser={this.deleteUser} 
						editUser={this.editUser}/>
					</Col>
				</Row>
			</Container>
		</>
	);}
}

export default App;




