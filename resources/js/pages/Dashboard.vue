<template>
    <div class="container">
        Hello there {{user.name}}
    </div>
</template>

<script>
/**
 * Internal dependencies.
 */
import { getCurrentUser } from '@/graphql/types/authentication/graphql-query/queries';

export default {
    apollo: {
        user: getCurrentUser,
    },
    name: 'Dashboard',
};
</script>
