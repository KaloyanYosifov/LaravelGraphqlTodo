<template>
    <div class="container">
        Hello there {{user.name}}
    </div>
</template>

<script>
/**
 * Internal dependencies.
 */
import Queries from '@/graphql/types/authentication/graphql-query/queries';

export default {
    apollo: {
        user: Queries.getCurrentUser,
    },
    name: 'Dashboard',
};
</script>
