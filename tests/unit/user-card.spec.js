import Vuetify from "vuetify";
import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import UserCard from "@/pages/Users/components/UserCard.vue";
import usersList from "@/assets/users.json";

const localVue = createLocalVue();
Vue.use(Vuetify);

describe("UserCard.vue", () => {
  let vuetify;
  beforeEach(() => vuetify = new Vuetify());

  const factory = (userData) => mount(UserCard, {
    localVue,
    vuetify,
    propsData: {
      user: { ...userData },
      handleClick: () => {},
    }
  });

  describe("rendering user-card with user prop as object from usersList", () => {
    it("with usersList.results[0]", () => {
      const user = { ...usersList.results[0] };
      const wrapper = factory(user);

      expect(wrapper.find(".jest-user-card-title").text()).toBe(`${user.name.title} ${user.name.first} ${user.name.last}`);
    });

    it("with usersList.results[1]", () => {
      const user = { ...usersList.results[1] };
      const wrapper = factory(user);

      expect(wrapper.find(".jest-user-card-title").text()).toBe(`${user.name.title} ${user.name.first} ${user.name.last}`);
    });
  });

  describe("testing user-card button", () => {
    it("button click", async () => {
      const user = { ...usersList.results[0] };
      const wrapper = factory(user);

      await wrapper.find(".jest-user-card-button").trigger("click");
    });
  });
});
