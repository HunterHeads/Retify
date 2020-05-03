<template>
	<v-list>
		<v-list-item v-for="(song, i) in songs" :key="i">
			<RateSong :song="song" />
		</v-list-item>
		<v-list-item>
			<MoreButton :title="titles.more" :onClick="onMoreSongs" />
		</v-list-item>
	</v-list>
</template>
<script src="./RateSongListScript.js"></script>
