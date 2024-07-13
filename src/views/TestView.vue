<script>
import ChildComponent from '../components/ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      userData: {
        name: 'Alice',
        age: 30
      }
    };
  },
  setup() {
  }
}
</script>

<template>
  <div class="test-view">
    <h2>
      test-view
    </h2>
    <ChildComponent :userData="userData" />
  </div>
</template>

<style scoped>

</style>
