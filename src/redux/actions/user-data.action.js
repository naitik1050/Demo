import Moralis from 'moralis';

export async function userData() {
    try {
        const user = await Moralis.User.current()
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
}