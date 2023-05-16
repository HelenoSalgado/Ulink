<script setup lang="ts">
import AnalyticsPost from '../components/AnalyticsPost.vue';
import AnalyticsRegion from '../components/AnalyticsRegion.vue';
import BlocksInfoGeneral from '../components/BlocksInfoGeneral.vue';
import CommentsRecent from '../components/CommentsRecent.vue';
import PostsRecent from '../components/PostsRecent.vue';
import UsedDeviceVue from '../components/UsedDevice.vue';
</script>
<template>
    <div class="group-analytics-comments">
        <div class="blocks-analytics">
            <div class="blocks-info">
            <BlocksInfoGeneral 
            name="Clicks"
            action="5000k"
            icon="pi pi-external-link"
            />
            <BlocksInfoGeneral 
            name="Links"
            action="300k"
            icon="pi pi-chart-line"
            />
            <BlocksInfoGeneral 
            name="Curtidas"
            action="300k"
            icon="pi pi-heart-fill"
            />
            <BlocksInfoGeneral 
            name="Visualizações"
            action="8000k"
            icon="pi pi-eye"
            />
            </div>
            <AnalyticsPost />
        </div>
        <div class="comments-recent">
            <CommentsRecent />
        </div>
    </div>
    <!-- <AnalyticsRegion /> -->
    <div class="group-posts-devices">
        <!-- <PostsRecent /> -->
        <UsedDeviceVue />
    </div>
</template>
<style scoped>
.blocks-info{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.group-analytics-comments, .group-posts-devices{
    margin-top: 0rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    border-radius: 15px;
    color: var(--color-font-box);
}
.group-analytics-comments{
    margin-top: 6rem;
}
.group-posts-devices{
    color: var(--color-font-box);
    padding-bottom: 2rem; 
}
</style>