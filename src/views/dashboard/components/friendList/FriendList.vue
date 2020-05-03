<template>
	<v-list>
		<v-list-item v-for="(friend, i) in friends" :key="i">
			<FriendItem :friend="friend" />
		</v-list-item>
		<v-list-item>
			<MoreButton :title="titles.more" :onClick="onMoreFriends" />
		</v-list-item>
	</v-list>
</template>
<script src="./FriendListScript.js"></script>
