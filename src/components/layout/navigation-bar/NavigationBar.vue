<template>
	<v-navigation-drawer
		app
		permanent
		width="200"
		hide-overlay
		persistent
		clipped
		:color="color"
		:expand-on-hover="expandOnHover"
		:src="bg"
		absolute
		dark
	>
		<v-btn text @click="loginWithSpotify">
			{{ printables.LOGIN_WITH_SPOTIFY }}
		</v-btn>
		<v-list dense nav class="py-0">
			<v-list-item two-line :class="miniVariant && 'px-0'">
				<v-list-item-avatar>
					<img
						src="https://image.winudf.com/v2/image1/Y29tLmVyZ2VjLnJhbmRvbXVzZXJnZW5lcmF0b3JfaWNvbl8xNTYzOTgzNjI4XzAxMg/icon.png?w=170&fakeurl=1"
					/>
				</v-list-item-avatar>

				<v-list-item-content>
					<v-list-item-title>Zalogowano</v-list-item-title>
					<v-list-item-subtitle>{{ username }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list-item
				v-for="item in items"
				v-show="!item.isHidden"
				:key="item.title"
				link
				:to="item.to"
			>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script src="./NavigationBarScript.js" />
