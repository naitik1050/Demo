import Moralis from 'moralis';
import axios from 'axios';
const user = new Moralis.User();

const headers = {
    'X-RapidAPI-Host': 'google-authenticator.p.rapidapi.com',
    'X-RapidAPI-Key': 'f575d7558cmsh3ab62885e81e236p1d5edejsn9e654e63f93e'
}

export async function logIn({ email, password }) {
    try {
        user.set("username", email);
        user.set("password", password);
        const userCredential = await user.logIn();
        return Promise.resolve(userCredential);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function signUp({ firstName, email, password }) {
    try {
        user.set("username", firstName);
        user.set("email", email);
        user.set("password", password);
        const userCredential = await user.signUp();
        return Promise.resolve(userCredential);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function googleAuthenticatorFlag(payload) {
    try {
        console.log("google auenticator action", payload);
        const user = await Moralis.User.current()
        user.set("googleAuthApp", payload);
        const userCredential = await user.save();
        return Promise.resolve(userCredential);
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function googleAuthenticatorsecret() {
    return axios.get('https://google-authenticator.p.rapidapi.com/new_v2/', { headers: { ...headers } })
}

export async function googleAuthenticatorQRcode(secretCode) {
    console.log("secretCode==>", secretCode);
    return axios.get(`https://google-authenticator.p.rapidapi.com/enroll/?secret=${secretCode}`, { headers: { ...headers } })
}

export async function googleAuthenticatorverify(payload) {
    const { otp, secret } = payload;
    return axios.get(`https://google-authenticator.p.rapidapi.com/validate/?code=${otp}&secret=${secret}`, { headers: { ...headers } })
}


export async function sendVerificationEmail() {
    // try {
    //     return await sendEmailVerification(authentication.currentUser);;
    // } catch (error) {
    //     return Promise.reject(error);
    // }
}

export async function forgot({ email }) {
    try {
        const userCredential = await Moralis.User.requestPasswordReset(email)
        return Promise.resolve(userCredential);
    } catch (error) {
        return Promise.reject(error);
    }
}


export async function walletAddress(payload) {
    try {
        const user = await Moralis.User.current()
        user.set("ethAddress", payload.walletAddress);
        user.set("LQDA_Balance", payload.lqda_token);
        const userCredential = await user.save();
        return Promise.resolve(userCredential);
    } catch (error) {
        return Promise.reject(error);
    }
}
