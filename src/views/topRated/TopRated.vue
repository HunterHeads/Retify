<template>
    <div class="container">
        <v-row>
            <Card class="card" :cardTitle="titles.topSongs">
                <TopSongList :songs="topSongs" />
            </Card>
            <!-- <Card class="card" :cardTitle="titles.topArtists">
                <TopArtistList :artists="topArtists" />
            </Card> -->
        </v-row>
    </div>
</template>
<script src="./TopRatedScript.js"></script>
<style src="./TopRatedStyle.css" />
