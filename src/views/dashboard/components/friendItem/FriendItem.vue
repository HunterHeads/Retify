<template>
	<div class="friend">
		<v-list-item-avatar>
			<v-img :src="friend.avatar"></v-img>
		</v-list-item-avatar>
		<v-list-item-content class="text-left">
			<v-list-item-title v-html="friend.name" />
			<v-list-item-subtitle
				v-if="friend.nowListening"
				v-html="musicNote + friend.nowListening"
			/>
		</v-list-item-content>
	</div>
</template>
<script src="./FriendItemScript.js"></script>
