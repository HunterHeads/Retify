<template>
    <v-overlay :value="isLoading">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
    </v-overlay>
</template>
<script src="./LoadingOverlayScript.js" />
