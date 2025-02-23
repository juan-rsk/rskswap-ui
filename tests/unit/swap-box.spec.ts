import { shallowMount } from "@vue/test-utils";
import SwapBox from "@/components/swap/SwapBox.vue";
import { createStore } from "vuex";
import { session } from "@/store/session";

const store = createStore({
  mutations: {},
  actions: {},
  modules: {
    session,
  },
});

describe("SwapBox.vue", async () => {
  it("box-body is rendered", async () => {
    const wrapper = shallowMount(SwapBox, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find("box-body")).toBeDefined();
  });
});
