<template>
  <div class="card">
    <ul>
      <li v-for="(item,index) in treeData" :key="index">
        <div class="item" :class="{'line-left':index!==0,'line-right':index!=treeData.length-1}">
          <div class="item-name" :class="{'line-bottom':item.child&&item.child.length>0,'line-top':!treeFirst}">
            <div v-if="!treeFirst" class="reduce" @click="delChild(index)">-</div>
            <div>
              {{item.name}}
            </div>
            <div class="plus" @click="addChild(index)">+</div>
          </div>
        </div>
        <tree-item v-if="item.child&&item.child.length>0" :tree-data="item.child" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    treeData: {
      type: Array,
      default: () => []
    },
    treeFirst: { //判断是否第一个
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {
    // 添加子元素
    addChild(index) {
      if (this.treeData[index].child) {
        this.treeData[index].child.push({ name: '1' })
      } else {
        this.$set(this.treeData[index], 'child', [{ 'name': '1' }])
      }
    },
    // 删除子元素
    delChild(index) {
      this.treeData.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
$line-length:20px; //线长
$spacing:20px; //间距
$extend:calc(#{$spacing} + 2px); //延长线

// 线样式
@mixin line{
    content: "";
    display: block;
    width: 3px;
    height: $line-length;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background: rgb(6, 183, 253);
}
// 加减号icon
@mixin icon{
  position: absolute;
  border: solid 1px #666;
  border-radius: 100%;
  bottom:-5px;
  width: 12px;
  height: 12px;
  line-height: 10px;
  text-align: center;
  color:#666;
  z-index: 100;
  cursor: pointer;
  margin: 0;
  padding: 0;
  // opacity: 0;
}

.card{
    ul{
        display: flex;
        justify-content: center;
        li{
            .item{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                &-name{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100px;
                    height:50px;
                    padding: 5px;
                    margin: $spacing;
                    background: coral;
                    color: #fff;
                    .plus{
                      @include icon();
                      &:hover{
                        opacity: 100%;
                      }
                    }
                    .reduce{
                      @include icon();
                      top:-5px;
                      &:hover{
                        opacity: 100%;
                      }
                    }
                }
            }
        }

    }
    // 向下的线
    .line-bottom{
        &::after{
            @include line();
            bottom: -$line-length;
        }
    }
    // 向上的线
    .line-top{
        &::before{
            @include line();
            top: -$line-length;
        }
    }
    // 向左的线
    .line-left{
        &::after{
            @include line();
            width: calc(50% + #{$spacing});
            height: 3px;
            left: calc(-50% - #{$extend});
            top: 0;
        }
    }
    // 向右的线
    .line-right{
        &::before{
            @include line();
            width: calc(50% + #{$spacing});
            height: 3px;
            right: calc(-50% - #{$extend});
            top: 0;
        }
    }
}
</style>
