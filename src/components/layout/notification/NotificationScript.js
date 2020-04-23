import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState("notificationStore", ["message", "type", "isVisible"]),
    },
    mounted() {
        // this is only example how to display notification
        // needs to be removed later
        // setTimeout(
        //     () =>
        //         this.showNotification({
        //             message: "READ MESSAGE",
        //             type: "success",
        //         }),
        //     0
        // );
    },
    methods: {
        ...mapActions("notificationStore", ["showNotification"]),
    },
};
