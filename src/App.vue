<template>
  <div id="app">
    <header class="demo-header">
      <div><img id="vue-img" src="./assets/logo.png"></div>
      <div>
        <h1>Tree Vue</h1>
        <h3>An unlimited tree view component for vue.js 2.0</h3>
      </div>
    </header>
    <tree-vue :items="places" styling="dark" letters @drag-and-drop="dragged"></tree-vue>
   </div>
</template>

<script>
import places from './store/sampleData'
import TreeVue from './components/TreeVue'

export default {
  name: 'app',
  components: { TreeVue },
  data () {
    return {
      places: {}
    }
  },
  methods: {
    dragged (dragData) {
      // getting the whole nodes from the main tree
      const source = this.getNode(this.places, dragData.draggedItem.id)
      const oldParent = this.getNode(this.places, source.parent.id)
      const newParent = this.getNode(this.places, dragData.droppedOnto.id)
      // changing source's parent property
      source.parent = newParent
      // pushing source to the new parent's children
      newParent.children.push(source)
      // and removing it from the old parent's children
      for (let i = 0; i < oldParent.children.length; i++) {
        if (oldParent.children[i].id === source.id) {
          oldParent.children.splice(i, 1)
          break
        }
      }
      // TODO: no need to update in the main tree here, but it has to be done in the case of a state manager
    },
    /**
     * Returns the node with the given id in the given tree
     */
    getNode (tree, id) {
      // Iterates through the first level of the given tree
      for (const node of tree) {
        // if the node matches, then interrupt all and return it
        if (node.id === id) return node
        // Otherwise, if there are children, then make a recursive search in this new tree
        if (node.children.length > 0) {
          const subNode = this.getNode(node.children, id)
          // and if one is found in the subtree, then return it
          if (subNode) {
            if (subNode.id === id) return subNode
          }
        }
      }
      // if nothing has been found in the whole tree, then return undefined
      return undefined
    },
    /**
     * Returns a tree where the node with the same id has been replaced by newNode
     */
    updateNode (tree, newNode) {
      // We recreate the tree from scratch to be sure to not forget any branch
      const newTree = []
      // iteration through the first level of the tree
      for (const oldNode of tree) {
        if (oldNode.id === newNode.id) {
          // if the found node id matches, we add the new node in the new tree
          newTree.push(newNode)
        } else {
          // otherwise, after a recursive treatment, we add the original node in the new tree
          if (oldNode.children.length > 0) oldNode.children = this.updateNode(oldNode.children, newNode)
          newTree.push(oldNode)
        }
      }
      // at the end, the new tree is returned
      return newTree
    }
  },
  created () {
    this.places = places
  }
}
</script>

<style lang="scss">
  body {
    font-family: sans-serif;
    font-size: 0.875rem;
    margin: 5rem;
  }

  #vue-img {
    width: 100px;
    height: auto;
  }

  .demo-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;

    img {
      margin-right: 2rem;
    }
  }
</style>
