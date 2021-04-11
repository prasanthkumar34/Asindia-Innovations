import React, {Component} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { GoogleLoginButton } from 'ts-react-google-login-component';
import Calendar from './Calender'

const useStyles = makeStyles((theme: Theme) =>



  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);

//state type



class App extends Component {

  preLoginTracking(): void {
    console.log('Attemp to login with google');
}

errorHandler(error: string): void{
    // handle error if login got failed...
    console.error(error)
}

responseGoogle(googleUser: gapi.auth2.GoogleUser): void {
    const id_token = googleUser.getAuthResponse(true).id_token
    const googleId = googleUser.getId()
    const pObj = googleUser.getBasicProfile()

    console.log({ googleId })
    console.log({accessToken: id_token})
    console.log(pObj)
    // Make user login in your system
    // login success tracking...
}
  render(): JSX.Element {  
    const clientConfig = { client_id: '489872391984-u4i0k0ab4obsj9t2mm09mmrk9d5sm30a.apps.googleusercontent.com' }
      return (
        <form className='login' noValidate autoComplete="off">

          <Card >
            <CardHeader className='login card' title="Login App" />
            <CardContent>
              <div>
                <TextField
                  fullWidth
                  id="username"
                  type="email"
                  label="Username"
                  placeholder="Username"
                  margin="normal"

                />
                <TextField
                  fullWidth
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  margin="normal"
                />
              </div>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                color="secondary"
              >
                Login
              </Button>
              <GoogleLoginButton
                    responseHandler={this.responseGoogle}
                    clientConfig={clientConfig}
                    preLogin={this.preLoginTracking}
                    failureHandler={this.errorHandler}
                />
            </CardActions>

                
          </Card>
          <Calendar />
          
        </form>
      );
  }
}

export default App;