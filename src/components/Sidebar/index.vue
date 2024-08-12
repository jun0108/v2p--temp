<template>
  <nav class="sidebar" :class="{ 'is-open': isNavOpen }">
    <div class="sidebar__header">
      <router-link class="sidebar__title" to="/"> Pub Framework </router-link>
      <button class="sidebar__btn" @click="toggleSidebar">
        <i class="fas fa-bars"></i>
      </button>

    </div>
    <!-- Collapse -->
    <div class="sidebar__menu" v-bind:class="collapseShow">
      <!-- Collapse header -->
      <div
        class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
      >
        <div class="flex flex-wrap">
          <div class="w-6/12">
            <router-link
              class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              to="/"
            >
              Pub Framework
            </router-link>
          </div>
          <div class="w-6/12 flex justify-end">
            <button
              type="button"
              class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              v-on:click="toggleCollapseShow('hidden')"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Form -->
      <form class="mt-6 mb-4 md:hidden">
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Search"
            class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
          />
        </div>
      </form>
      <SidebarCollapse header-title="Components">
        <li>
          <router-link to="/example/buttons">
            <i class="fas fa-newspaper text-blueGray-300 mr-2 text-sm"></i>
            Buttons
          </router-link>
        </li>
        <li>
          <router-link to="/example/textfield">
            <i class="fas fa-newspaper text-blueGray-300 mr-2 text-sm"></i>
            Textfield
          </router-link>
        </li>
      </SidebarCollapse>
    </div>
  </nav>
</template>

<script>
import SidebarCollapse from './SidebarCollapse.vue';

export default {
  components: {

    SidebarCollapse,
  },
  data() {
    return {
      collapseShow: 'hidden',
    };
  },
  methods: {
    // toggleCollapseShow: function (classes) {
    //   this.collapseShow = classes;
    // },
  },
};
</script>
