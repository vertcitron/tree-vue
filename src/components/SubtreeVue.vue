<template>
  <div class="tree">
    <div v-for="item in items" :key="item.id">
      <div>
        <span class="toggle" @click="toggleItem(item)">
          <span v-if="hasChildren(item)">
            <icon class="down" :name="opened[item.id] ? 'caret-down' : 'caret-right'"></icon>
          </span>
        </span>
        <subtree-item :item="item" @drag-and-drop="bubble"></subtree-item>
        <div v-show="hasChildren(item) && opened[item.id]" class="indent">
          <subtree-vue :items="item.children" :opened="opened" @toggle="toggleItem" @drag-and-drop="bubble"></subtree-vue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubtreeItem from './SubtreeItem'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'SubtreeVue',
  components: { SubtreeItem, Icon },
  props: {
    items: { type: Array, default: () => [] },
    opened: { type: Array, required: true }
  },
  methods: {
    hasChildren (item) {
      // eslint-disable-next-line
      return (item.children) ? ((item.children.length > 0) ? true : false) : false
    },
    toggleItem (item) {
      this.$emit('toggle', item)
    },
    bubble (dragData) {
      this.$emit('drag-and-drop', dragData)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tree {
    text-align: left;
  }
  .indent {
    margin-left: 1rem;
  }
  .toggle {
    display: inline-block;
    width: 0.75rem;
    cursor: pointer;
  }
  .down {
    position: relative;
    top: 2px;
  }
  .item {
    cursor: default;
  }
</style>
