<template>
  <grid class="shots-list">
    <grid-item class="shots-list__item" size="1/3" :rwd="{compact: '1/1', tablet: '1/2', desktop: '1/3'}" v-for="shot in shots" :key="shot.id">
      <md-card md-with-hover>
        <md-card-header>
          <md-avatar>
            <img src="assets/avatar.png" alt="People">
          </md-avatar>

          <div class="md-title">{{shot.title}}</div>
          <!-- <div class="md-subhead">Subtitle here</div> -->
        </md-card-header>

        <md-card-media>
          <img src="assets/card-image-1.jpg" alt="People">
        </md-card-media>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
        </md-card-content>

        <md-card-actions>
          <md-button>
            <md-icon>visibility</md-icon>
          </md-button>
        </md-card-actions>
      </md-card>
    </grid-item>
  </grid>
</template>

<script>
export default {
  name: 'ShotsList',
  props: ['shots'],
};
</script>

<style lang="sass" scoped>
  .md-card
    background: white !important

  .shots-list
    list-style: none

    &__item
      display: inline-block
      padding-bottom: 32px
</style>
