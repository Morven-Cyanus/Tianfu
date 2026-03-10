<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
</script>

<template>
  <PageLayout
    bg="url(../../../images/e1.png)"
    title="神域天府吟"
    subtitle="Verse of the Celestial Divine"
  >
    <GlassPanel>
      <div class="poem-content">
        <p class="poet">归元道人 阳辰</p>
        
        <div class="poem-text">
          <p>苍茫古事出太玄，造化天府思归元</p>
          <p>四象两仪陈精气，乾阳丹心为炼天</p>
          <p>龙腾七圣立道府，志定八荒聚神源</p>
          <p>余阳凡城得仙降，苍暮神迹望剑悬</p>
          <p>楚水芒生九天曜，赤城劫起苍梧烟</p>
          <p>天枢混沌沉星处，诸仙尽集展笑颜</p>
          <p>天匠荆山欲铸鼎，神尊幻海心纵玄</p>
          <p>玄机纶经通万载，星主英气御千年</p>
          <p>奇谋归巧龙镜士，道法绝巅玉阳仙</p>
          <p>玉仙春朝游破晓，鬼客秋夜梦孤寒</p>
          <p>无边道隐藏剑意，永夜仙瑶梦云间</p>
          <p>白衣出尘江枫落，朔刃森寒素剑旋</p>
          <p>梦皇苍穹释天地，宗师玄气耀世篇</p>
          <p>因果道引乾坤意，焚天焰生金刚言</p>
          <p>无极六库生百策，圣邦万法镇云巅</p>
          <p>真仙惊雷葬落叶，帝君阎令镇黄泉</p>
          <p>仙名同吾才喷薄，神号大我念翩跹</p>
          <p>绝域存王刀剑棘，三渡逢生问清涟</p>
          <p>太平四都囷域广，冥古千狂黯灵颠</p>
          <p>圣将天军兵甲锐，醍醐道老玄音绵</p>
          <p>归尘迷途今何待，造化无感向山间</p>
          <p>天暗揆星称无良，药尊炼世同昊天</p>
          <p>和光一梦知百世，愁云一语诉千年</p>
          <p>神机衍术开万古，道尊虚舟生星盘</p>
          <p>缥缈虚风生楚水，轮回暮雪落千山</p>
          <p>天府群英修神道，齐游万界战天潭</p>
          <p>曾入九幽威炼狱，复至冥土惊忘川</p>
          <p>诸雄豪气荡楚庭，天府威名震诸天</p>
          <p>仙魔并驱神朝惧，元宗远征帝殿还</p>
          <p>世事苍茫何所似，畴昔辉煌已经年</p>
          <p>天府道统永不灭，再续神域前世缘</p>
          <p>欲知天道语归处，苍生万物尽朝渊</p>
          <p>天罡天玄天清士，天道重归天府前</p>
        </div>
      </div>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.poem-content {
  text-align: center;
}

.poet {
  font-size: 16px;
  color: var(--text-dim);
  letter-spacing: 2px;
  margin-bottom: 24px;
  font-style: italic;
}

.poem-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 60vh;
  overflow-y: auto;
  padding: 12px;
}

.poem-text p {
  color: var(--star-light);
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.poem-text p:hover {
  color: var(--gold);
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
  transform: translateX(4px);
}

.poem-text::-webkit-scrollbar {
  width: 6px;
}

.poem-text::-webkit-scrollbar-track {
  background: rgba(0, 212, 255, 0.05);
}

.poem-text::-webkit-scrollbar-thumb {
  background: rgba(0, 212, 255, 0.2);
  border-radius: 3px;
}

.poem-text::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 212, 255, 0.4);
}
</style>
