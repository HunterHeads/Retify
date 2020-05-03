<template>
	<v-list :flat="flat" :avatar="avatar">
		<v-list-item v-for="(artist, i) in artists" :key="i">
			<TopArtistItem :artist="artist" />
		</v-list-item>
		<v-list-item>
			<MoreButton :title="titles.more" onClick="" />
		</v-list-item>
	</v-list>
</template>
<script src="./TopArtistListScript.js"></script>