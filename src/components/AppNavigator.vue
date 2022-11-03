<template>
  <v-navigation-drawer app fixed v-model="showMenu">
    <v-list dense>
      <v-list-item :key="`menu-${menu.label}`" v-for="menu in menus" @click="move(menu.path)">
        <v-list-item-action>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ menu.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'app-navigator',
  data() {
    return {
      showMenu: false,
      menus: [
        {
          label: 'Board',
          path: '/',
          icon: 'mdi-dashboard',
        },
        {
          label: 'Todos',
          path: '/todos',
          icon: 'mdi-run',
        },
        {
          label: 'Login',
          path: '/login',
          icon: 'mdi-login',
        },
        {
          label: 'Logout',
          path: '/logout',
          icon: 'mdi-logout',
        },
        {
          label: 'Profile',
          path: '/profile',
          icon: 'mdi-account',
        },
        {
          label: 'Help',
          path: '/help',
          icon: 'mdi-help',
        },
      ],
    };
  },
  created() {
    this.$eventBus.$on('toggleSideBar', () => {
      this.showMenu = !this.showMenu;
    });
  },
  methods: {
    move(path) {
      if (path === '/logout' || path === '/help') return;
      this.$router.push(path);
    },
  },
  beforeDestroy() {
    this.$eventBus.$off('toggleSideBar');
  },
};
</script>
