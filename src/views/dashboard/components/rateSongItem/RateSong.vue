<template>
    <div class="rateSongItem">
        <v-list-item-avatar>
            <v-icon>$vuetify.icons.song</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="text-left">
            <v-list-item-title v-html="song.title" @click="onTitleClick" />
            <v-list-item-subtitle v-html="song.author" @click="onAuthorClick" />
        </v-list-item-content>
        <div>
            <v-rating
                v-model="rate"
                :length="5"
                empty-icon="mdi-heart-outline"
                full-icon="mdi-heart"
                half-icon="mdi-heart-half-full"
                :half-increments="true"
                :hover="true"
                :readonly="false"
                :size="15"
                :dense="false"
                color="red lighten-1"
                background-color="red lighten-3"
                @input="onRate"
            ></v-rating>
        </div>
    </div>
</template>
<script src="./RateSongScript.js"></script>
