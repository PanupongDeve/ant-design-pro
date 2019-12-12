import FirebaseService from "@/services/firebaseService";
import FirebaseAuth from "@/services/firebaseService/FirebaseAuth";



class AuthRepository {
    private static instance: AuthRepository = new AuthRepository();

    private firebaseAuthManger: FirebaseAuth;

    private constructor() {
        this.firebaseAuthManger = FirebaseService.getFirebaseAuthApp();
    }

    public async register(username: string, password: string) {
        if (true) {
            return await this.firebaseAuthManger.registerWithUsername(username, password);
        }
    }

    public async login() {
        
    }

    public async isAuth() {
        if (true) {
            return await this.firebaseAuthManger.isAuth();
        }
    }

    public static getinstance() {
        return this.instance;
    }
}


const instance: AuthRepository = AuthRepository.getinstance();

export default instance;

