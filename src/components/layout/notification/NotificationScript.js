import { mapState } from "vuex";
export default {
    computed: {
        ...mapState("notificationStore", ["message", "type", "isVisible"]),
    },
};
