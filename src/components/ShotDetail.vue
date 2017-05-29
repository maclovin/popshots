<template>
  <grid class="shot-detail">
    <div class="shot-detail__loader" v-if="detailStatus === 'WAITING'">
      <spinner :enable="true" />
    </div>

    <grid-item class="shot-detail__main-view" size="1/1" :rwd="{ compact: '1/1', tablet: '2/3', desktop: '2/3' }" v-if="detailStatus === 'DONE'">
      <md-card>
        <md-card-header>
          <h2 class="md-title">{{ shot.title }}</h2>

          <label class="md-subhead">{{ shot.created_at | formatDate }}</label>
        </md-card-header>

        <md-card-media>
          <img class="shot-detail__image" :src="shot.images.normal" />
        </md-card-media>

        <md-card-content v-html="shot.description" v-if="shot.description" />

        <md-chips md-static v-model="shot.tags" v-if="shot.tags">
          <template scope="tag">{{ tag.value }}</template>
        </md-chips>

       <md-card-actions class="shot-detail__main-view__actions">
        <md-icon class="md-size-1x">visibility</md-icon> {{ shot.views_count }}

        <md-icon class="md-size-1x">favorite</md-icon>{{ shot.likes_count }}

        <md-icon class="md-size-1x">speaker_notes</md-icon>{{ shot.comments_count }}
       </md-card-actions>
      </md-card>
    </grid-item>
    <grid-item size="1/1" :rwd="{ compact: '1/1', tablet: '1/3', desktop: '1/3' }" v-if="detailStatus === 'DONE'">
      <user-detail :user="shot.user" />
    </grid-item>
  </grid>
</template>

<script>
  export default {
    name: 'ShotDetail',
    props: ['shot', 'detailStatus'],
  };
</script>

<style lang="sass" scoped>
  .shot-detail
    text-align: left

    &__loader
      display: flex
      align-items: center
      justify-content: center
      width: 100%
      height: calc(100vh - 90px)
      text-align: center

    &__main-view
      &__actions
        display: block
        text-align: left
        margin-bottom: 16px

</style>
