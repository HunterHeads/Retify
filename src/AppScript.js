import LoadingOverlay from "./components/layout/loading/LoadingOverlay.vue";
import NotificationComponent from "./components/layout/notification/Notification.vue";
import NavigationBar from "./components/layout/navigation-bar/NavigationBar.vue";
import { mapState } from "vuex";

export default {
    components: {
        NotificationComponent,
        NavigationBar,
        LoadingOverlay,
    },
    computed: {
        ...mapState("authenticationStore", ["isLogged"]),
        ...mapState("commonStore", ["backgroundColor"]),
    },
};
