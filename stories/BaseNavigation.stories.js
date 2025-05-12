import BaseNavigation from "../components/base/BaseNavigation.vue";

export default {
  title: "Design System/Base Components/Navigation",
  component: BaseNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    controls: { expanded: true },
  },
};

export const Navigation = {
  render: (args) => ({
    components: { BaseNavigation },
    setup() {
      const menuOptions = ref([
        {
          label: "Home",
          key: "home",
          // to: "/"
        },
        {
          label: "About",
          key: "about",
          //   to: "/about",
          children: [
            {
              label: "Our Team",
              key: "team",
              //   to: "/about/our-team"
            },
            {
              label: "Our Mission",
              key: "mission",
              //   to: "/about/our-mission"
            },
          ],
        },
        {
          label: "Services",
          key: "services",
          //  to: "/services"
        },
        {
          label: "Contact",
          key: "contact",
          //  to: "/contact"
        },
      ]);

      const verticalOptions = ref([
        {
          type: "group",
          label: "Main Menu",
          children: [
            {
              label: "Home",
              key: "home",
              icon: "dashboard",
              //  to: "/",
            },
            {
              label: "About",
              key: "about",
              icon: "person",
              //   to: "/about",
              children: [
                {
                  label: "Our Team",
                  key: "team",
                  // to: "/about/our-team",
                },
                {
                  label: "Our Mission",
                  key: "mission",
                  // to: "/about/our-mission",
                },
              ],
            },
            {
              label: "Services",
              key: "services",
              icon: "privacy_tip",
              //   to: "/services",
            },
            {
              label: "Contact",
              key: "contact",
              icon: "alternate_email",
              //   to: "/contact",
            },
          ],
        },
        {
          type: "group",
          label: "Other Menu",
          children: [
            {
              label: "Billing",
              key: "billing",
              icon: "credit_card",
              //   to: "/services",
            },
            {
              label: "Settings",
              key: "settings",
              icon: "settings",
              //   to: "/contact",
            },
          ],
        },
      ]);
      const secondaryMenuOptions = ref([
        {
          label: "Login",
          //  to: "/login",
        },
        {
          label: "Register",
          //  to: "/register",
        },
      ]);
      const ctaOptionsVertical = ref([
        {
          label: "Logout",
          action: () => alert("actionnn"),
          icon: "logout",
          text: true,
        },
      ]);
      const ctaOptions = ref([
        {
          label: "Logout",
          //  to: "/logout",
          icon: "logout",
          type: "primary",
        },
      ]);
      const searchQuery = ref("");

      const mode = computed(() => args.mode === "horizontal");

      const optionsLoaded = computed(() =>
        mode.value ? menuOptions.value : verticalOptions.value,
      );
      const ctaOptionsLoaded = computed(() =>
        mode.value ? ctaOptions.value : ctaOptionsVertical.value,
      );
      return {
        args,
        optionsLoaded,
        secondaryMenuOptions,
        ctaOptionsLoaded,
        searchQuery,
      };
    },
    methods: {},
    template: `
      <base-navigation
         :logo="args.logo"
         :menu="optionsLoaded"
         :secondary-menu="secondaryMenuOptions"
         :cta-buttons="ctaOptionsLoaded"
         v-model:search="searchQuery"
         :mode="args.mode"
      />
  `,
  }),

  args: {
    logo: "https://app.digitaltolk.se/assets/images/brand-logo.svg",
    mode: "horizontal",
  },

  argTypes: {
    mode: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
      description: "The layout mode of the navigation bar",
    },
  },
};
