<template>
  <div class="home">
    <div class="test fontSize40">我是</div>
    <!-- <section class="section-block">
      <div class="section-header flex flex-start">
        <div class="section-title">title</div>
        <div class="section-more">
          <div class="more-text">more</div>
          <div class="more-icon">
            <img src="" a /lt="">
          </div>
        </div>
      </div>
      <div class="section-content flex justify-content_flex-justify">
        <div class="section-article ">
          <div class="rec"></div>
          <div class="article-title">title</div>
        </div>
        <div class="section-time">time</div>
      </div>
    </section> -->
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import '../assets/css/mixin/base';
$section-box-width: 580px;
$section-header-height: 40px;
$section-title-border: 4px solid #ea3e3e;
$section-more-border: 4px solid #e6e6e6;
%display-flex {
  @include display-flex;
}
.home {
  @extend %center-block;
  @extend %display-flex;
  background: #ea3e3e;
}
// .section-block {
//   width: $section-box-width;
//   .section-header {
//     .section-title {
//       height: $section-header-height;
//       line-height: $section-header-height;
//       // @include boxSize($height);
//       border-bottom: $section-title-border;
//     }
//     .section-more {
//       width: 100%;
//       height: $section-header-height;
//       line-height: $section-header-height;
//       border-bottom: $section-more-border;
//       text-align: right;
//     }
//   }
//   .section-content {
//     width: 100%;
//     .section-article {
//       width: 100%;
//     }
//   }
// }
// @import url('../assets/css/part/section.scss');
</style>
