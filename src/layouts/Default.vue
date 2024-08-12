<script setup lang="ts"></script>
<template>
  <section class="layout">
    <Header />
    <main>
      <Sidebar />
      <div class="layout__content">
        <router-view />
      </div>
    </main>
  </section>
</template>
<style lang="scss" scoped></style>
