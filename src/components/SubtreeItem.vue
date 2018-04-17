<template>
  <span class="item"
        :class="{ 'dragged-over': over }"
        draggable
        @dragstart="dragStart"
        @dragover="dragOver"
        @drop="drop"
        @dragenter="dragEnter"
        @dragleave="dragLeave">
    {{ item.name }}
  </span>
</template>

<script>
export default {
  name: 'SubtreeItem',
  props: {
    item: { type: Object, required: true }
  },
  data () {
    return {
      over: false
    }
  },
  methods: {
    dragStart (e) {
      const draggedItem = {
        id: this.item.id,
        name: this.item.name,
        parent: {
          id: this.item.parent.id
        }
      }
      e.dataTransfer.setData('text/plain', JSON.stringify(draggedItem))
    },
    dragOver (e) {
      e.preventDefault()
    },
    drop (e) {
      e.preventDefault()
      this.over = false
      const transfered = JSON.parse(e.dataTransfer.getData('text/plain'))
      if (transfered.id && transfered.name) {
        const dragData = {
          draggedItem: transfered,
          droppedOnto: this.item
        }
        this.$emit('drag-and-drop', dragData)
      }
    },
    dragEnter (e) {
      this.over = true
    },
    dragLeave (e) {
      this.over = false
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .dragged-over {
    font-weight: bold;
    color: yellow;
  }
</style>
