import firebase from 'firebase/app';

class FirebaseAuth {
    private authApp: firebase.auth.Auth;

    constructor(firebaseApp: firebase.app.App) {
        this.authApp = firebaseApp.auth()
    }

    public async register(email: string, password: string): Promise<any> {
        try {
            const response = await this.authApp.createUserWithEmailAndPassword(email, password);
            const data = {
                email: email,
                user: response.user
            }

            console.log('data', data);
            
            if (await this.isAuth()) {
                return data;
                // await this.saveUserProfileToDatabase(data);
                // console.log('STATUS ---> REGISTER SUCCESS')
                // return await user.getByUID(response.user.uid);
            } else {
                throw "Authentication Fail"
            }
        } catch (error) {
            console.log(error);
        }
    }

    public async registerWithUsername(username: string, password: string) {
        const email = this.migrateToEmail(username);
        const data = await this.register(email, password);
        return data;

    }

    public login() {

        
    }

    public loginWithUsername() {

    }

    public  async logout() {
        await this.authApp.signOut();
        console.log('logout success!');
    }

    async isAuth(): Promise<boolean> {
        let isAuth: boolean;
        await this.authApp.onAuthStateChanged(function (user) {
            if (user) {
                isAuth = true;
            } else {
                isAuth = false;
            }
        });
        return isAuth;
    }

    private migrateToEmail(username: string) {
        return `${username}@${username}.com`
    }

}


export default FirebaseAuth;
