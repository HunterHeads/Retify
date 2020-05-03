<template>
	<div class="topItem" @click="onClick">
		<v-list-item-avatar>
			<v-icon color="blue" large>$vuetify.icons.account</v-icon>
		</v-list-item-avatar>
		<v-list-item-content class="text-left">
			<v-list-item-title v-html="artist.artist" />
			<v-list-item-subtitle v-html="ratesCountPrintable" />
		</v-list-item-content>
		<v-rating
			v-model="artist.average"
			:length="5"
			empty-icon="mdi-heart-outline"
			full-icon="mdi-heart"
			half-icon="mdi-heart-half-full"
			:half-increments="true"
			:hover="false"
			:readonly="true"
			:size="12"
			:dense="false"
			color="red lighten-1"
			background-color="red lighten-3"
		></v-rating>
	</div>
</template>
<script src="./TopArtistItemScript.js"></script>
