# custom-tree

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 树状说明（使用vue写）
+ 可动态添加、删除
+ 可整体拖拽
+ 如需内容也为动态，把组件内容自行使用input、select等组件替换
+ 数据结构
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