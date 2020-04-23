import NotificationComponent from "./components/layout/notification/Notification.vue";
import NavigationBar from "./components/layout/navigation-bar/NavigationBar.vue";
import { mapState } from "vuex";

export default {
    components: {
        NotificationComponent,
        NavigationBar,
    },
    computed: {
        ...mapState("authenticationStore", ["isLogged"]),
    },
};
