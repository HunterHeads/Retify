<template>
	<div class="loginCon">
		<div style="display: flex; flex: 1">
			<div class="image"></div>
			<div class="login">
				<v-col offset-md="1">
					<div class="header">{{ printables.WELCOME }}</div>
					<v-card class="elevation-12" width="90%" height="45%">
						<v-toolbar :color="primaryColor" dark flat>
							<v-toolbar-title>{{
								printables.SIGN_IN
							}}</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									@keydown.enter.native="onLogin"
									v-model="form.username"
									:label="printables.LOGIN"
									name="login"
									type="text"
								></v-text-field>
								<v-text-field
									@keydown.enter.native="onLogin"
									v-model="form.password"
									id="password"
									:label="printables.PASSWORD"
									name="password"
									type="password"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-row cols="12" align="center">
								<v-col md="1"></v-col>
								<v-col md="6" align-self="center">
									<v-spacer>
										<input
											type="checkbox"
											id="remember-me"
											v-model="rememberMe"
											style="margin:1%"
										/>
										<label for="remember-me"></label>
										<span style="padding-left:2%">{{
											printables.REMEMBER
										}}</span>
									</v-spacer>
								</v-col>
								<v-col md="5">
									<v-btn
										outlined
										x-large
										rounded
										@click="onLogin"
										:color="primaryColor"
										>{{ printables.LOGIN_BUTTON }}</v-btn
									>
								</v-col>
							</v-row>
						</v-card-actions>
					</v-card>
					<div class="buttons">
						<div class="button">
							<v-btn
								class="white--text"
								x-large
								rounded
								@click="onRegister"
								depressed
								:color="primaryColor"
								>{{ printables.SIGN_UP }}</v-btn
							>
						</div>
						<div>
							<v-btn
								x-large
								rounded
								class="white--text"
								medium
								@click="onLoginWithSpotify"
								depressed
								:color="primaryColor"
								>{{ printables.SIGN_UP_SPOTIFY }}</v-btn
							>
						</div>
					</div>
					<v-row cols="1">
						<v-col style="font-size: 20px; margin: 2%">
							<a href="">{{ printables.FORGOT_PASSWORD }}</a>
						</v-col>
					</v-row>
				</v-col>
			</div>
		</div>
	</div>
</template>
<script src="./LoginScript.js" />
<style src="./LoginStyle.css" />
