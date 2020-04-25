<template>
	<v-list :flat="flat" :avatar="avatar">
		<v-list-item v-for="(song, i) in songs" :key="i">
			<TopSongItem :topSong="song" />
		</v-list-item>
		<v-list-item>
			<MoreButton :title="titles.more" onClick="" />
		</v-list-item>
	</v-list>
</template>
<script src="./TopSongListScript.js"></script>