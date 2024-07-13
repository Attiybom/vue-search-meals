<script>
export default {
  props: {
    userData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    console.log(props.userData)
    return {
    };
  }
}
</script>

<template>
  <div class="children-component">
    <h2>
      children-component
    </h2>
    <p>User Name: {{ userData.name }}</p>
    <p>User Age: {{ userData.age }}</p>
  </div>
</template>

<style scoped></style>
