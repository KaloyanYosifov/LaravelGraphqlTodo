<template>
    <div class="d-flex flex-column align-items-center justify-content-center position-ref h-100">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Sign In</h5>
                            <form class="form-signin" @submit.prevent="onSubmit">
                                <div class="form-label-group mb-3">
                                    <input type="email"
                                        id="inputEmail"
                                        class="form-control"
                                        placeholder="Email address"
                                        v-model="email"
                                        required
                                        autofocus>
                                </div>

                                <div class="form-label-group mb-3">
                                    <input type="password"
                                        id="inputPassword"
                                        class="form-control"
                                        placeholder="Password"
                                        v-model="password"
                                        required>
                                </div>

                                <div class="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                    <label class="custom-control-label" for="customCheck1">Remember password</label>
                                </div>
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Internal dependencies.
 */
import SignIn from '@/features/authentication/mutations/signIn.graphql';
import getCurrentUser from '@/features/authentication/queries/getCurrentUser.graphql';

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            loading: false,
        };
    },
    methods: {
        async onSubmit() {
            if (!this.email || !this.password || this.loading) {
                return;
            }

            this.loading = true;

            try {
                const { data: { signIn: user } } = await this.$apollo.mutate({
                    mutation: SignIn,
                    variables: {
                        input: {
                            email: this.email,
                            password: this.password,
                        },
                    },
                    update(cache, { data: { signIn: user } }) {
                        cache.writeQuery({
                            query: getCurrentUser,
                            data: { user },
                        });
                    },
                });

                window.localStorage.setItem('laravel_api_token', user.api_token);

                this.$router.push({ name: 'dashboard' });
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }

        },
    },
};
</script>
