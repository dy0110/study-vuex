# study-vuex

Vuexの学習目的

## ステート

状態を定義し、保存する。  
下記の要素を使って更新、取得を行う。

### 定義

state ブロック内に記述

```
state: {
   count: 0 // 初期値
  },
```

### 直接参照する

以下のように記述

```
 this.$store.state.count
 
 // ダメな例
 this.$store.state.count = 5 // 直接更新しないこと！

```
### mapStateで呼び出す

上記のように長く記述したくない場合は mapState で参照する  
これを呼び出すことでstateにthis.$store.stateが代入される

```
computed: {
    ...mapState({
      // count1というオブジェクトにstate.countの値を代入する
      count1: state => state.count,
    }),
    hello () {
      return "Hello" + this.count1;　// this.〇〇の形式でアクセスできる
    },
    ...mapState(["count"]), //  this.$store.state.countと同義
  },
```

## ミューテーション

stateの更新を行う。  
**ミューテーションは同期的でなければならない**

### 定義

mutations ブロック内に記述

```
 mutations: {
    setCount(state, value){
      // 同期的な更新処理
      state.count = value
    },
  },
```

### 呼び出し

下記のように呼び出し。

```
 store.commit('メソッド名', 与える引数1, 引数2....)

```

## アクション

非同期でstateを更新するときに呼び出す。  
内部的にはミューテーションを実行する。  

### 定義

actions ブロック内に記述

```
 actions: {
    buttonActionA({ commit, state })  {
        // ajax通信 や promise、 async await を使った非同期処理を書く
        commit('setCount', someValue )
    },
    buttonActionB({ dispatch, state })  {
        // 他のアクションからアクションを呼び出せる
        dispatch('buttonActionA')
    }
  },
```

### 直接呼び出す

直接storeから呼び出すには dispatch を実行する
```
 store.dispatch('メソッド名')
```
### mapActionsで呼び出す

コンポーネントから呼び出すときは mapActions を使うと便利
```
<script>
   import { mapActions } from "vuex"; // vuexから依存性の注入

   export default {
       //----省略
       methods: {
         ...mapActions([
            // コンポーネント上の　buttonAction　にアクションをマップする
           'buttonAction'
        ]),

        ...mapActions({
            // アクションを異なる名前(addButton)でマッピング
            addButton: 'buttonAction'
        })
    }
   }
</script>

```

## ゲッター

state の内容の取得

### 定義

getters ブロック内に記述

```
 getters: {
    getCount(state, getters)  { // 第1引数(state) 第2引数(getters)が定義できる
        // stateに対する加工もここで行う
        return state.count
    },
  },
```
### 直接呼び出す

直接storeから呼び出すにはプロパティとしてアクセスする
```
 store.getters.getCount
```
### mapGettersで呼び出す

コンポーネントから呼び出すときは mapGetters を使うと便利
```
<script>
   import { mapGetters } from "vuex"; // vuexから依存性の注入

   export default {
       //----省略
       computed: {
         ...mapGetters([
            // コンポーネント上の　getCount　にゲッターの戻り値をマッピング
           'getCount'
        ]),

        ...mapGetters({
            // ゲッターの戻り値を異なる名前(somePropaty)でマッピング
            somePropaty: 'getCount'
        })
    }
   }
</script>

```

### 参考
[Vuex公式](https://vuex.vuejs.org/ja/)
[vue.js＋Vuexチュートリアル](https://qiita.com/_P0cChi_/items/ebf8fbf035b36218a37e)
[https://qiita.com/Statham/items/046649bff81c00ba275e](https://qiita.com/Statham/items/046649bff81c00ba275e)
