<template>
    <div class="container">
        <v-card width="100%" height="100%">
            <v-card-title>
                {{ title }}
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="songs"
                :search="search"
            ></v-data-table>
        </v-card>
    </div>
</template>
<script src="./BrowseSongsScript.js"></script>
<style src="./BrowseSongsStyle.css" />
