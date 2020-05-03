import { login, loginWithSpotify } from "../../api/loginService";

export default {
    data() {
        return {
            rememberMe: false,
            primaryColor: "#5e81f7",
            form: {
                username: "",
                password: "",
            },
            printables: {
                WELCOME: "Witaj w Retify!",
                SIGN_IN: "Zaloguj się",
                LOGIN: "Login",
                PASSWORD: "Hasło",
                REMEMBER: "Pamiętaj mnie",
                LOGIN_BUTTON: "Zaloguj",
                SIGN_UP: "Zarejestruj się",
                SIGN_UP_SPOTIFY: "Zaloguj się ze Spotify",
                FORGOT_PASSWORD: "Zapomniałeś hasła?"
            }
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
            this.$router.push("register");
        },
    },
};
