import { register, login, loginWithSpotify } from "../../api/loginService";

export default {
    data() {
        return {
            rememberMe: false,
            primaryColor: '#5e81f7',
            form: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        onLogin() {
            login(this.form.username, this.form.password);
        },
        onLoginWithSpotify() {
            loginWithSpotify();
        },
        onRegister() {
            register(this.form.username, this.form.password);
        },
    },
};
