<template>
  <LayoutAsideMain>
    <template v-slot:sidebar>
      <nav>
        <ol>
          <li>ABC</li>
          <li>123</li>
          <li>(*&)</li>
        </ol>
      </nav>
    </template>
    <template v-slot:main>
      <h1>Zano</h1>
      <Button />
      <div class="card">
        <Dropdown />
      </div>
    </template>
  </LayoutAsideMain>
</template>

<script>
import Button from './Button.vue';
import Dropdown from './components/Dropdown.vue';
import LayoutAsideMain from './components/LayoutAsideMain.vue';
export default {
  data() {
    return { message: 'Hello Vue!' };
  },
  components: {
    Button,
    LayoutAsideMain,
    Dropdown,
  },
};
</script>

<style>
.card {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  padding: 1rem;
}
</style>
