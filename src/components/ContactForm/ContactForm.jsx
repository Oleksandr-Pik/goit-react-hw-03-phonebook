import { Component } from 'react';
import { Button, Form, Input } from './ContactForm.styled';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleAddContact = e => {
    e.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleAddContact}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          id="name"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          id="number"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <Button type="submin">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
