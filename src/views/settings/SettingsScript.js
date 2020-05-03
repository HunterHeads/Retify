import store from "../../store";

export default {
    data: function() {
        return {
            color: store.state.commonStore.backgroundColor,
        };
    },

    watch: {
        color() {
            store.dispatch("commonStore/setBackgroundColor", this.color);
        },
    },
};
