# vue2-cli 기반 composition-api

<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Vue CLI Install(Default)</summary>

- ### vue project 생성

  ```bash
  vue create {프로젝트명}
  ```

- ### 개발 환경 구축 옵션 선택
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset:
    Default ([Vue 3] babel, eslint)
  > Default ([Vue 2] babel, eslint)
    Manually select features
  ```
</details>

<details>
<summary style="font-size:30px; font-weight:bold; font-style:italic;">Composition API install</summary>

- ### composition API - node module 추가

  ```bash
  npm install @vue/composition-api
  ```

- ### 루트 모듈 composition API 플러그인 추가

- `main.js`
  ```js
  /* 생략 */
  import VueCompositionAPI from '@vue/composition-api';

  Vue.use(VueCompositionAPI); // npm install 후 전역 등록
  /* 생략 */
  ```

  플러그인을 전역으로 등록 하더라도 reactive와 computed같은 composition-api 함수를 사용하기 위해서는 사용할 각 컴포넌트에서 플러그인과 동일한 경로인 `@vue/composition-api`로 부터 import해야 한다.

- `Triple.vue` 예제
  ```vue
  <template>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </template>
  <script>
  import { reactive, computed } from '@vue/composition-api';

  export default {
    setup() {
      const state = reactive({
        count: 0,
        double: computed(() => state.count * 2)
      })

      function increment() {
        state.count++
      }
      return {
        state,
        increment
      }
    }
  }
  </script>
  ```
</details>