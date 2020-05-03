<template>
    <div class="registerCon">
        <div class="register">
            <div class="header">
                Rejestracja
            </div>
            <div class="content">
                <v-form>
                    <v-text-field
                        autofocus
                        full-width
                        v-model="form.email"
                        :label="printables.MAIL"
                        name="mail"
                        type=""
                    ></v-text-field>
                    <v-text-field
                        full-width
                        :label="printables.CONFIRM_MAIL"
                        name="mail_confirm"
                        type="e-mail"
                    ></v-text-field>
                    <v-text-field
                        full-width
                        v-model="form.password"
                        :label="printables.PASSWORD"
                        name="password"
                        type="password"
                    ></v-text-field>
                    <v-text-field
                        full-width
                        v-model="form.username"
                        :label="printables.NICK"
                        name="nick"
                        type="text"
                    ></v-text-field>
                </v-form>
                <div class="date">
                    {{ printables.SELECT_BIRTHDATE }}
                </div>
                <v-date-picker v-model="form.dateOfBirth" color="blue" dark />
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
