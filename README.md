# tree-vue

> A operational tree-view with events and drag'n'drop

### How to use

Install the module in your project :
`npm install --save tree-vue` or `yarn add tree-vue`

Then register the component if in your main.js file :
```javascript
import Vue from 'vue'
import TreeVue from 'tree-vue'

Vue.use(TreeVue)
```

You can now use it everywhere in your application :
```
<tree-vue :items="tree" v-on:drag-and-drop="dndHandling"></tree-vue>
```

`ìtems` has to be a recursive tree of nodes as an array with this structure :
```javascript
[
  {
    id: 1,
    name: rootNode1,
    parent: {
      id: null
    },
    children: [
      {
        id: 2,
        name: childNode1,
        parent: {
          id: 1
        },
        children: []
      },
      {
        id: 3,
        name: childNode2,
        parent: {
          id: 1
        },
        children: []
      }
    ]
  },
  {
    id: 4,
    name: rootNode2,
    parent: {
      id: null
    },
    children: []
  }
]
```

On a drag and drop event, the payload transmitted to the callback function is an object containing two simplified nodes :
`draggedItem` and `droppedOnto`, containing only the id and the name of the source and destination nodes.
