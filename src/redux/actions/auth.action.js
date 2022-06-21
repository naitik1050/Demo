import Moralis from 'moralis';
const user = new Moralis.User();

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


export async function walletAddress(walletAddress) {
    try {
        const user = await Moralis.User.current()
        user.set("ethAddress", walletAddress);
        const userCredential = await user.save();
        return Promise.resolve(userCredential);
    } catch (error) {
        return Promise.reject(error);
    }
}
