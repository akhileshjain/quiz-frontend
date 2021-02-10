import * as Constants from '../common/constants';

export const userSignup = async (signupData) => {
    const response = await fetch(Constants.BASE_URL + '/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(signupData)
    });
    const json = await response.json();
    return json;
}

export const userSignIn = async(signInData) => {
    const response = await fetch(Constants.BASE_URL + '/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInData)
    }); 
    const json = await response.json();
    return json;
}