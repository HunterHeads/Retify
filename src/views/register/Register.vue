<template>
	<div class="container">
		<div class="register">
			<div class="header">
				Rejestracja
			</div>
			<div class="content">
				<v-form>
					<v-text-field
						label="E-mail"
						name="mail"
						type="text"
					></v-text-field>
					<v-text-field
						label="Potwierdź adres e-mail"
						name="mail_confirm"
						type="text"
					></v-text-field>
					<v-text-field
						label="Hasło"
						name="password"
						type="password"
					></v-text-field>
					<v-text-field
						label="Jak mamy się do Ciebie zwracać ?"
						name="nick"
						type="text"
					></v-text-field>
				</v-form>
				<div class="date">
					Zaznacz datę urodzenia
				</div>
				<v-date-picker v-model="picker" color="blue" dark="" />
			</div>
			<div class="button">
				<v-btn
					class="white--text"
					large
					rounded=""
					elevation="3"
					@click="onRegister"
					color="blue"
					>Zarejestruj</v-btn
				>
			</div>
		</div>
	</div>
</template>
<script src="./RegisterScript.js"></script>
<style src="./RegisterStyle.css" />
