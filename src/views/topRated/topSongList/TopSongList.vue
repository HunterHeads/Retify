<template>
	<v-list>
		<v-list-item v-for="(song, i) in songs" :key="i">
			<TopSongItem :topSong="song" />
		</v-list-item>
		<v-list-item>
			<MoreButton :title="titles.more" :onClick="onMoreButtonClick" />
		</v-list-item>
	</v-list>
</template>
<script src="./TopSongListScript.js"></script>
