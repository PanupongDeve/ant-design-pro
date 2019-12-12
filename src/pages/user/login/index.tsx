import { Alert, Checkbox } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';

import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Dispatch } from 'redux';
import Link from 'umi/link';
import { StateType } from './model';
import LoginComponents from './components/Login';
import styles from './style.less';
import FirebaseService from '@/services/firebaseService';
import authRepository from '@/repository/authRepository';



const { UserName, Password, Submit } = LoginComponents;

interface LoginProps {
  dispatch: Dispatch<any>;
  userAndlogin: StateType;
  submitting: boolean;
  history: any;
}
interface LoginState {
  username: string;
  password: string;
  autoLogin: boolean;
}

class Login extends Component<LoginProps, LoginState> {


  state: LoginState = {
    username: '',
    password: '',
    autoLogin: false
  };

  changeAutoLogin = (e: CheckboxChangeEvent) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  handleSubmit = async (error: any, values: any) => {
    if (!error) {
      const { username, password } = values;
      this.setState({
        username,
        password
      })

      const response = await authRepository.register(username, password);

      console.log('response', response);


      // this.props.history.push('/dashboard/home');
    }
    
  };


  renderMessage = (content: string) => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <LoginComponents
          onSubmit={this.handleSubmit}
        >

            { false ? this.renderMessage( formatMessage({ id: 'userandlogin.login.message-invalid-credentials' })) : ''}
            <UserName
              name="username"
              placeholder={`${formatMessage({ id: 'userandlogin.login.userName' })}: admin or user`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'userandlogin.userName.required' }),
                },
              ]}
            />
            <Password
              name="password"
              placeholder={`${formatMessage({ id: 'userandlogin.login.password' })}: ant.design`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'userandlogin.password.required' }),
                },
              ]}
            />
        
        
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="userandlogin.login.remember-me" />
            </Checkbox>
          </div>
          <Submit loading={false}>
            <FormattedMessage id="userandlogin.login.login" />
          </Submit>
          <div className={styles.other}>

            <Link className={styles.register} to="/user/register">
              <FormattedMessage id="userandlogin.login.signup" />
            </Link>
          </div>
        </LoginComponents>
      </div>
    );
  }
}

export default Login;
