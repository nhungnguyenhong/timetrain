<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 mt-10">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <alert type="danger" :message="errors.message"></alert>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control"
                                       :class="{ 'is-invalid': errors && errors.email }" name="email"
                                       v-model="credentials.email"
                                       required autocomplete="email" autofocus @input="resetError">
                                <span class="invalid-feedback" role="alert" v-if="errors && errors.email">
                                        <strong>{{ errors.email[0] }}</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control"
                                       :class="{ 'is-invalid': errors && errors.password }" name="password"
                                       required autocomplete="current-password" v-model="credentials.password"
                                       @input="resetError">
                                <span class="invalid-feedback" role="alert" v-if="errors && errors.password">
                                        <strong>{{ errors.password[0] }}</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember"
                                           v-model="credentials.remember_me" @input="resetError">
                                    <label class="form-check-label" for="remember">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" @click="login" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="#">
                                    Forgot password ?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseAlert from '@/components/partials/BaseAlert';

export default {
    components: {
        'alert': BaseAlert
    },
    data() {
        return {
            credentials: {
                email: '',
                password: '',
                remember_me: false
            },
            errors: {}
        }
    },
    methods: {
        login() {
            this.resetError();
            this.$auth.login({
                data: this.credentials,
                remember: this.credentials.remember_me,
                staySignedIn: true,
                fetchUser: false,
            }).then(response => {
                try {
                    let responseJson = response.data.data;
                    this.addAccessToken(response.headers, responseJson.access_token);
                    this.$auth.user(responseJson);
                    this.redirectByRole();
                } catch (error) {
                    throw new Error(`Problem handling something: ${error}.`);
                }
            }).catch(error => {
                this.resetError();

                if (error.response.status === 422) {
                    this.errors = error.response.data.meta.errors

                    return
                }

                this.errors = error.response.data.meta
            })
        },
        resetError() {
            this.errors = {}
        },
        addAccessToken(header, accessToken) {
            header.authorization = accessToken;
            this.$auth.token(null, accessToken, false);
        },
        redirectWithRouteName(routeName) {
            this.$router.push({
                name: routeName
            }).catch((err) => {
                throw new Error(`Problem handling something: ${err}.`);
            });
        },
        redirectByRole() {
            if (this.$auth.check('Admin')) {
                this.redirectWithRouteName('admin-dashboard');

                return;
            }

            this.redirectWithRouteName('dashboard');
        }
    }
}
</script>
