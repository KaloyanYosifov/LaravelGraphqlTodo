<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Create ToDo</h5>

                        <form class="form-signin" @submit.prevent="onSubmit">
                            <div class="form-label-group mb-3">
                                <input type="text"
                                    id="inputEmail"
                                    class="form-control"
                                    placeholder="Add name"
                                    v-model="name"
                                    required
                                    autofocus>
                            </div>

                            <div class="form-label-group mb-3">
                                <textarea name="text" v-model="text"></textarea>
                            </div>

                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Create Todo</button>
                        </form>
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
import { createTodo } from '@/graphql/types/todos/mutations';

export default {
    name: 'CreateTodo',
    data() {
        return {
            name: '',
            text: '',
        };
    },
    methods: {
        onSubmit() {
            const { name, text } = this;

            void createTodo({ name, text });

            this.name = this.text = '';
        },
    },
};
</script>
