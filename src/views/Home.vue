<template>
  <div class="home">
    <!-- section.section>(.section-header>(.section-title+.section-more>(.more-text+.more-icon))+.section-content>.section-item>(.item-title+.item-time)) -->
    <section class="section">
      <div class="section-header">
        <div class="header-title">
          header-title1111111111111111111111111111111111111
        </div>
        <div class="header-more">
          <div class="more-text">
            more-text11111111111111111111111111111111111111111111
          </div>
          <div class="more-icon">
            more-icon111111111111111111111111111111111111111111111111111111
          </div>
        </div>
      </div>
      <div class="section-content">
        <div class="content-item">
          <div class="item-title">item-title</div>
          <div class="item-time">item-time</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import '../assets/css/part/section.scss';
</style>
