import React, { Component } from 'react';
import { Input } from '../components';
import { FormValidation } from '../utility/FormValidation';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  static contextType = AuthContext
  state = {
    fields: [
      {
        name: 'email',
        label: 'Enter email address',
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
        name: 'password',
        label: 'Enter password',
        placeholder: "Password",
        inputType: 'text',
        type: 'password',
        error: null,
        errorMsg: 'password cannot be blank',
        value: '',
        isRequired: true,
        autoComplete: "password"
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

  onSubmit(e, data) {
    e.preventDefault();
    const { email, password } = data
    const { fields } = this.state;
    const { updatedFields, isValid } = FormValidation({ fields });
    this.setState({ fields: updatedFields });

    if (isValid) {
      this.setState({ isValid: true, loading: true });
      this.context.login(email, password)
        .then(response => {
          this.setState({ loading: false })

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
          <div className="row col-8 mx-auto pt-5 pb-4">
            {
              this.state.fields.map((fld, index) => {
                return <Input
                  key={fld.name}
                  {...fld}
                  onChange={val => this.onChangeInput(val, index)}
                  className={`col-12 col-md-8 col-lg-8`}
                />
              })
            }
          </div>
          <button
            type="submit"
            className="btn d-block main-link mb-4 mx-auto"
            onClick={(e) => this.onSubmit(e, this.prepareData())}
            disabled={this.state.loading ? true : false}
          >Log in</button>
        </form>
        <div className="row mx-auto pb-4">
          <p className='mx-auto'>Need an account ? <Link to='/signup'>Sign up</Link></p>
        </div>
      </div >
    );
  }
}


export default LoginPage;
