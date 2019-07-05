<template>
  <div class="tree-root" :class="styling">
    <div v-for="letter in headLetters" :key="letter">
      <div v-if="letters" class="letter-separator">{{ letter }}</div>
      <subtree-vue :items="itemsByLetter(letter)" :opened="opened" @toggle="toggleItem" @drag-and-drop="bubble"></subtree-vue>
    </div>
  </div>
</template>

<script>
import SubtreeVue from './SubtreeVue'

export default {
  name: 'TreeVue',
  components: { SubtreeVue },
  props: {
    items: { type: Array, default: () => [] },
    letters: { type: Boolean, default: false },
    styling: { type: String, default: 'light' }
  },
  data () {
    return {
      lastName: '',
      opened: []
    }
  },
  computed: {
    sortedItems () {
      return this.items.slice(0).sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    },
    headLetters () {
      const letters = []
      const list = this.sortedItems
      for (let i = 0; i < list.length; i++) {
        if (i === 0) {
          letters.push(list[i].name.substr(0, 1))
        } else {
          if (list[i].name.substr(0, 1) !== list[i - 1].name.substr(0, 1)) {
            letters.push(list[i].name.substr(0, 1))
          }
        }
      }
      return letters
    }
  },
  methods: {
    itemsByLetter (letter) {
      const list = this.sortedItems
      const result = []
      for (const element of list) {
        if (element.name.substr(0, 1) === letter) {
          result.push(element)
        }
      }
      return result
    },
    toggleItem (item) {
      this.$set(this.opened, item.id, (!this.opened[item.id]))
      this.$emit(this.opened[item.id] ? 'open-item' : 'close-item', item)
    },
    bubble (dragData) {
      this.$emit('drag-and-drop', dragData)
    }
  }
}
</script>

<style lang="scss" scoped>
  .light {
    background-color: white;
    color: inherit;
  }
  .dark {
    background-color: #333;
    color: white;
  }
  .tree-root {
    text-align: left;
    padding: 1rem;
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
  .letter-separator {
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
