<template>
  <header
    class="w-full text-sm"
  >
    <div
      class="fixed top-0 left-0
             w-full h-16 bg-white"
    >
      <div
        class="flex flex-nowrap h-full
               border-b border-solid
               border-brand-gray-1 px-8"
      >
        <a
          :href="url"
          class="flex h-full
                 items-center text-xl"
        >
          {{company}}
        </a>

        <nav
          class="ml-12 h-full"
        >
          <ul
            class="flex h-full list-none space-x-4"
          >
            <li
              class="h-full"
              v-for="(menu, index) in menuItems"
              :key="index"
            >
              <a
                href=""
                class="flex h-full items-center py-2.5"
              >
                {{menu.name}}
              </a>
            </li>
          </ul>
        </nav>

        <div
          class="flex h-full items-center ml-auto"
        >
          <ProfileImage v-if="isLoggedIn"/>
          <ActionButton v-else @click="loginUser" type="primary" :isPrimary="false" text="Sign In" />
        </div>
      </div>

      <Subnav v-if="true" />
    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue';
import ProfileImage from './ProfileImage.vue';
import Subnav from './TheSubnav.vue';
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav
  },
  data() {
    return {
      company: "Nav Careers",
      url: "https://careers.google.com",
      menuItems: [
        {name: "Teams", link: ""},
        {name: "Locations", link: ""},
        {name: "Life at Bobo Corp", link: ""},
        {name: "How we hire", link: ""},
        {name: "Students", link: ""},
        {name: "Jobs", link: ""}
      ],
      isLoggedIn: false,
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    },
  },
}
</script>