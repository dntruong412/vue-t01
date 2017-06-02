<template>
    <div class="media mb-3">
        <img class="d-flex mr-3" src="http://placehold.it/64x64" alt="Generic placeholder image">
        <div class="media-body">
            <router-link :to="{ name:'post.item', params:{id:post.id} }">
                <h5 class="mt-0">{{post.title}}</h5>
            </router-link>
            <small class="text-muted">{{post.description}}</small>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['post']
    }
</script>