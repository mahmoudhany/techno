import React, { Component, useState } from 'react';
import { Input } from '../components';
import { FormValidation } from '../utility/FormValidation';
import { Firestore } from '../utility/firebase';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

class SignupPage extends Component {
  static contextType = AuthContext
  state = {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        placeholder: "First Name",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'first name cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'lastName',
        label: 'Last Name',
        placeholder: "Last Name",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'last name cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'email',
        label: 'Enter an email address',
        placeholder: "Email address",
        inputType: 'text',
        type: 'email',
        error: null,
        errorMsg: 'email cannot be blank',
        value: '',
        isRequired: true,
        autoComplete: "email"
      },
      {
        name: 'phone',
        label: 'Phone',
        placeholder: "Phone Number",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'phone cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'city',
        label: 'City',
        placeholder: "City",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'city cannot be blank',
        value: '',
        isRequired: true,
      },
      {
        name: 'country',
        label: 'Country',
        placeholder: "Country",
        inputType: 'text',
        type: 'text',
        error: null,
        errorMsg: 'Country cannot be blank',
        value: '',
        isRequired: true,
        autoComplete: "country"
      },
      {
        name: 'address',
        label: 'Address',
        placeholder: "Address",
        inputType: 'text',
        type: 'text',
        error: null,
        value: '',
        isRequired: false,
        autoComplete: "address"
      },
      {
        name: 'password',
        label: 'Enter a password',
        placeholder: "Password",
        inputType: 'text',
        type: 'password',
        error: null,
        errorMsg: 'password cannot be blank',
        value: '',
        isRequired: true,
        autoComplete: "password"
      },
      {
        name: 'repeatPassword',
        label: 'Confirm password',
        placeholder: "Confirm password",
        inputType: 'text',
        type: 'password',
        error: null,
        errorMsg: 'password cannot be blank',
        value: '',
        isRequired: true,
        autoComplete: "new-password"
      }
    ],
    loading: false,
    isValid: false
  }

  onChangeInput = (val, index) => {
    const { fields } = this.state;
    fields[index].value = val;
    this.setState({ fields });
  }

  prepareData = () => {
    let formData = {}
    const data = this.state.fields.map((data) => data)
    for (const key in data) {
      formData = {
        ...formData, ...{ [data[key].name]: data[key].value }
      }
    }
    return formData
  }
  submitUserData = (data, user) => {
    this.setState({ loading: true })
    Firestore.collection('users').doc(user.uid)
      .set(data)
      .then(() => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch((error) => {
        this.setState({ loading: false })
        console.error("Error adding document: ", error);
      });
  }

  onSubmit(e, data) {
    e.preventDefault();
    const { address, city, country, email, password, firstName, lastName, phone } = data
    const userData = { email, firstName, lastName, phone, address, city, country }
    const { fields } = this.state;
    const { updatedFields, isValid } = FormValidation({ fields });
    this.setState({ fields: updatedFields });

    if (isValid) {
      this.setState({
        isValid: true,
        loading: true
      });
      this.context.signup(email, password)
        .then(response => {
          this.submitUserData(userData, response.user)
        })
        .catch(error => {
          this.setState({ loading: false })
          alert(error.message)
        })
    }
  }
  render() {
    return (
      <div className='container' >
        <form>
          <div className="row mx-auto pt-5 pb-4">
            {
              this.state.fields.map((fld, index) => {
                return <Input
                  key={fld.name}
                  {...fld}
                  onChange={val => this.onChangeInput(val, index)}
                  className={` ${fld.name === 'address' ? 'col-12 col-md-12 col-lg-12' : 'col-12 col-md-6 col-lg-6'} `}
                />
              })
            }
          </div>
          <button
            type="submit"
            className="btn d-block main-link mb-4 mx-auto"
            onClick={(e) => this.onSubmit(e, this.prepareData())}
            disabled={this.state.loading ? true : false}
          >Sign up</button>
        </form>
        <div className="row mx-auto pb-4">
          <p className='mx-auto'>Already have an account ? <Link to='/login'>Login</Link></p>
        </div>
      </div >
    );
  }
}


export default SignupPage;
