<template>
	<v-hover v-slot:default="{ hover }">
		<v-card class="ml-8" :elevation="hover ? 8 : 2">
			<div class="cardTitle">{{ cardTitle }}</div>
			<v-divider></v-divider>
			<div class="cardContent">
				<slot />
			</div>
		</v-card>
	</v-hover>
</template>
<script src="./CardScript.js" />
