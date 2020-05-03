import { register } from "../../api";

export default {
    data: function() {
        return {
            form: {
                email: null,
                username: null,
                password: null,
                dateOfBirth: null,
            },
            printables: {
                MAIL: "Adres e-mail",
                CONFIRM_MAIL: "Potwierdź adres e-mail",
                PASSWORD: "Hasło",
                NICK: "Nazwa użytkownika",
                SELECT_BIRTHDATE: "Zaznacz datę urodzenia",
            },
            visible: false,
        };
    },
    methods: {
        onRegister() {
            register(this.form.email, this.form.password);
        },
    },
};
