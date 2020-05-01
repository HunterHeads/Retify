<template>
	<div style="container">
		<div style="display: flex; flex: 1">
			<div class="image">
				<v-img
					src="https://cdn.mos.cms.futurecdn.net/FUCaUWjnxVNkHrpZMwerSY-1200-80.jpg"
					height="100%"
				/>
			</div>
			<div class="login">
				<v-col offset-md="1">
					<v-card class="elevation-12" width="90%" height="75%">
						<v-toolbar :color="primaryColor" dark flat>
							<v-toolbar-title>Sign in</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									@keydown.enter.native="onLogin"
									v-model="form.username"
									label="Login"
									name="login"
									type="text"
								></v-text-field>
								<v-text-field
									@keydown.enter.native="onLogin"
									v-model="form.password"
									id="password"
									label="Password"
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
										<span style="padding-left:2%"
											>Remember me</span
										>
									</v-spacer>
								</v-col>
								<v-col md="5">
									<v-btn
										text
										@click="onLogin"
										:color="primaryColor"
										>Login</v-btn
									>
								</v-col>
							</v-row>
						</v-card-actions>
					</v-card>
					<div class="buttons">
						<div class="button">
							<v-btn
								class="white--text"
								medium
								@click="onRegister"
								depressed
								:color="primaryColor"
								>Sign up</v-btn
							>
						</div>
						<div>
							<v-btn
								class="white--text"
								medium
								width="200px"
								@click="onLoginWithSpotify"
								depressed
								:color="primaryColor"
								>Sign in with spotify</v-btn
							>
						</div>
					</div>
					<v-row cols="1">
						<v-col>
							<a href="">Forgot password?</a>
						</v-col>
					</v-row>
				</v-col>
			</div>
		</div>
	</div>
</template>
<script src="./LoginScript.js" />
<style>
.container {
	display: flex;
	flex: 1;
	overflow: hidden;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
}

.image {
	position: absolute;
	top: 0%;
	align-self: flex-start;
	display: flex;
	width: 50%;
	height: 100vh;
}

.login {
	position: absolute;
	display: flex;
	top: 10%;
	right: 0;
	width: 50%;
	height: 87vh;
}

.buttons {
	margin-top: 25px;
	display: flex;
	flex-direction: row;
	flex: 1;
	align-items: center;
	justify-content: start;
}

.button {
	margin-right: 15px;
}
</style>
