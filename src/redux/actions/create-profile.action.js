import Moralis from 'moralis';

export async function ProfileImage(imageUri) {
    try {
        const user = await Moralis.User.current()
        user.set("profileImage", imageUri);
        const userCredential = await user.save();
        return Promise.resolve(userCredential);
    } catch (error) {
        return Promise.reject(error);
    }
}