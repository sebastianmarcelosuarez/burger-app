import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'; 


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Peplito',
                address: {
                    street: 'testStreet',
                    zipCode: '1900',
                    country: 'Argentina'
                },
                deliveryMethod: 'fastest'
            }
        }
        axios.post('/orders.json', order).then(
            response => {
                console.log(response)
                this.setState({ loading: false, purchasing: false })
                this.props.history.push('/');
            }).catch(
                error => {
                    this.setState({ loading: false, purchasing: false })
                    console.log(error)
                }
            );
    }

    render() {

        let form = (
            <form>
            <Input inputtype="input" type="text" name="name" placeholder="Your Name"></Input>
            <Input inputtype="input" type="email" name="email" placeholder="Your Email"></Input>
            <Input inputtype="input" type="text" name="street" placeholder="Your Street"></Input>
            <Input inputtype="input" type="text" name="postal" placeholder="Your Postal Code"></Input>
            <Button clicked={this.orderHandler} btnType="Success">Order</Button>
        </form>);
        if (this.state.loading){
            form =<Spinner></Spinner>} 
    
        return (
            <div className={classes.ContactData}>
                <h4> Enter your contact Data</h4>
               {form}
            </div>
        );
    }
}

export default ContactData;