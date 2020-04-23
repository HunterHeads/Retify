<template>
    <v-container fluid ma-0 pa-0 fill-height>
        <v-layout row fill-height>
            <v-flex lg7 fill-height>
                <v-card dark color="primary" height="100%">
                    <v-img
                        src="https://cdn.mos.cms.futurecdn.net/FUCaUWjnxVNkHrpZMwerSY-1200-80.jpg"
                        height="100%"
                    ></v-img>
                </v-card>
            </v-flex>
            <v-flex lg5 fill-height align-center>
                <v-container class="fill-height" fluid ma-0 pa-10>
                    <v-row>
                        <v-col>
                            <v-card class="elevation-12">
                                <v-toolbar color="primary" dark flat>
                                    <v-toolbar-title>Sign in</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field
                                            v-model="form.username"
                                            label="Login"
                                            name="login"
                                            type="text"
                                        ></v-text-field>
                                        <v-text-field
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
                                        <v-col md="2"></v-col>
                                        <v-col md="5" align-self="center">
                                            <v-spacer>
                                                <input
                                                    type="checkbox"
                                                    id="remember-me"
                                                    v-model="rememberMe"
                                                    style="margin:1%"
                                                />
                                                <label
                                                    for="remember-me"
                                                ></label>
                                                <span style="padding-left:2%"
                                                    >Remember me</span
                                                >
                                            </v-spacer>
                                        </v-col>
                                        <v-col md="5">
                                            <v-btn
                                                @click="onLogin"
                                                color="primary"
                                                >Login</v-btn
                                            >
                                        </v-col>
                                    </v-row>
                                </v-card-actions>
                            </v-card>
                            <v-row cols="12" align="center">
                                <v-col md="3" align-self="end">
                                    <a href="" style="margin-left:5%"
                                        >Forgot password?</a
                                    >
                                </v-col>
                                <v-col md="2" align-self="end">
                                    <v-btn
                                        @click="onRegister"
                                        depressed
                                        color="primary"
                                        >Sign up</v-btn
                                    >
                                </v-col>
                                <v-col md="4" align-self="end">
                                    <v-btn depressed color="primary"
                                        >Sign in with spotify</v-btn
                                    >
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script src="./LoginScript.js" />
