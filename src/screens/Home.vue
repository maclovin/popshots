<template>
    <container class="home">
        <shots-list v-bind:shots="shots" />
    </container>
</template>

<script>
import { ShotsList } from '@/components';

export default {
  name: 'Home',
  components: { ShotsList },
  data() {
    return {
      shots: [
        {
          id: 1,
          title: 'My Shot Number 1',
          img: '',
        },
        {
          id: 2,
          title: 'My Shot Number 2',
          img: '',
        },
        {
          id: 3,
          title: 'My Shot Number 3',
          img: '',
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
  .home
    padding: 32px 0
</style>
