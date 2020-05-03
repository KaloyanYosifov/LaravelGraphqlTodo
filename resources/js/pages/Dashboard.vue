<template>
    <div class="container">
        Hello there {{user.name}}

        <apollo-query v-if="loadTodosButtonClicked" :query="getTodosQuery" notify-on-network-status-change>
            <template #default="{ result: { loading, data }, query }">
                <ul v-if="data" class="list-group">
                    <li v-for="todo in data.user.todos.data" class="list-group-item">{{todo.name}}</li>
                </ul>

                <div v-if="loading" class="spinner-border"></div>

                <button
                    v-if="data && data.user.todos.paginatorInfo.hasMorePages"
                    type="button"
                    class="btn btn-primary"
                    @click="loadMoreTodos(query)">Load
                    More
                    Todos
                </button>
            </template>
        </apollo-query>

        <button v-if="!loadTodosButtonClicked" type="button" class="btn btn-primary" @click="loadTodosButtonClicked = true">Load Todos
        </button>

        <create-todo />
    </div>
</template>

<script>
/**
 * Internal dependencies.
 */
import Queries from '@/graphql/types/authentication/graphql-query/queries';
import TodoQueries from '@/graphql/types/todos/graphql-query/queries';
import CreateTodo from '@/components/CreateTodo';

export default {
    components: { CreateTodo },
    apollo: {
        user: Queries.getCurrentUser,
    },
    name: 'Dashboard',
    data() {
        return {
            loadTodosButtonClicked: false,
            page: 1,
        };
    },
    methods: {
        async loadMoreTodos(query) {
            await query.fetchMore({
                variables: {
                    page: ++this.page,
                },
                updateQuery: (previousState, { fetchMoreResult }) => {
                    if (!fetchMoreResult.user.todos.data.length) {
                        return previousState;
                    }

                    return {
                        user: {
                            ...previousState.user,
                            todos: {
                                data: [...previousState.user.todos.data, ...fetchMoreResult.user.todos.data],
                                paginatorInfo: { ...fetchMoreResult.user.todos.paginatorInfo },
                                __typename: previousState.user.todos.__typename,
                            },
                        },
                    };
                },
            });
        },
        getTodosQuery() {
            return TodoQueries.getTodos;
        },
    },
};
</script>
