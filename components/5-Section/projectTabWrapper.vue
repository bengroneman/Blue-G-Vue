<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active': tab.isActive }" :key="tab.href">
          <a :ref="tab.href" @click="selectTab(tab)"></a>
        </li>
      </ul>
    </div>

    <section class="tabs-details">
      <slot></slot>
    </section>
  </div>
</template>
<script>
export default {
  name: 'bprojecttabwrapper',
  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.href == selectedTab.href)
      });
    }
  }
}
</script>
