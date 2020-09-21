<template>
  <div class="tree">
    <div class="tree-content" @mousedown.stop="move">
      <tree-item :tree-data="treeData" :tree-first="true" />
    </div>
  </div>
</template>

<script>
import TreeItem from './components/TreeItem'
export default {
  name: 'Tree',
  components: {
    TreeItem
  },
  data() {
    return {
      treeData: [{
        name: '1',
        child: [
          { name: '2',
            child: [{ name: '1' }, { name: '2' }]
          },
          { name: '1',
            child: [{ name: '1' }, { name: '2' }]
          }
        ]
      }]
    }
  },
  methods: {
    // 拖拽移动
    move(e) {
      const odiv = e.currentTarget // 获取元素
      console.log(odiv)

      // 算出鼠标相对元素的位置
      const disX = e.clientX - odiv.offsetLeft
      const disY = e.clientY - odiv.offsetTop
      document.onmousemove = (e) => { // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        const left = e.clientX - disX
        const top = e.clientY - disY

        // 绑定元素位置到positionX和positionY上面
        this.positionX = top
        this.positionY = left

        // 移动当前元素
        odiv.style.left = left + 'px'
        odiv.style.top = top + 'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tree{
    background: #fff;
    min-height: calc(100vh - 110px);
    position: relative;
    &-content{
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }
}
</style>
