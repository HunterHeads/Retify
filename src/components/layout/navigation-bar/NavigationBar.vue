<template>
    <v-navigation-drawer
        app
        permanent
        width="200"
        hide-overlay
        persistent
        clipped
        :color="color"
        :expand-on-hover="expandOnHover"
        :src="bg"
        absolute
        dark
    >
        <button @click="loginWithSpotify">
            LOGIN WITH SPOTIFY
        </button>
        <button @click="getMyRecentlyPlayedTracks">
            getMyRecentlyPlayedTracks
        </button>
        <button @click="getMyData">
            getMyData
        </button>
        <v-list dense nav class="py-0">
            <v-list-item two-line :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/men/81.jpg" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Zalogowano</v-list-item-title>
                    <v-list-item-subtitle>Username</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.to"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script src="./NavigationBarScript.js" />
