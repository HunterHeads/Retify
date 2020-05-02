<template>
	<div class="container">
		<div class="card">
			<v-card width="100%" height="100vw">
				<div class="picker">
					<div class="text">
						Wybierz aktualne tło w aplikacji
					</div>
					<v-color-picker v-model="color" />
				</div>
			</v-card>
		</div>
	</div>
</template>
<script src="./SettingsScript.js"></script>
<style src="./SettingsStyle.css" />