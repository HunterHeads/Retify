<template>
    <v-app style="background-color: #e8f1f7;">
        <notification-component />
        <navigation-bar v-if="isLogged"/>

        <v-content>
            <v-container fluid>
                <div id="app">
                    <div id="nav"></div>
                </div>
            </v-container>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>
<script src="./AppScript.js">