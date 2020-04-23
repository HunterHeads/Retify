import { register, login } from "../../api/loginService";

export default {
    data() {
        return {
            rememberMe: false,

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
        onRegister() {
            register(this.form.username, this.form.password);
        },
    },
};
