import Vue from 'vue';
import ContextMenu from '../components/ContextMenu';

let nodeExist = null;

const createNodeByComp = (component, props) => {
  const app = Vue.extend(component);
  // Append div to <body>
  // Mount componet to div
  const div = document.createElement('div');
  document.body.appendChild(div);
  new app({
    propsData: {
      ...props
    }
  }).$mount(div);

  return div;
}

const removeNodeIfExist = (nodeId) => {
  if (nodeExist) {
    document.body.removeChild(
      document.getElementById(nodeId)
    );
    nodeExist = null;
  }
}

// Click anywhere else target element to remove context menu
document.body.addEventListener('click', () => {
  removeNodeIfExist('context-menu');
})

document.body.addEventListener('contextmenu', () => {
  removeNodeIfExist('context-menu');
})

Vue.directive('contextMenu', (el, binding) => {
  if (!el) {
    throw '元素未绑定!';
  }
  el.oncontextmenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Right click twice to remove context menu
    removeNodeIfExist('context-menu');

    const props = {
      top: e.clientY + 'px',
      left: e.clientX + 'px',
      items: binding.value
    }
    nodeExist = createNodeByComp(ContextMenu, props);
  }
})
