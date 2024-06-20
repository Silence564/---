<template>
    <div class="Frame30" style=" width:100%; height: 527px; padding-left: 108px; padding-right: 108px; padding-top: 56px; padding-bottom: 56px; background: #1D2329; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
        <div style="align-self: stretch; color: white; font-size: 40px; font-weight: 700; line-height: 43.20px; word-wrap: break-word">Экспертное сообщество</div>
        <div class="Frame29" style="width: 100%; align-self: stretch; justify-content: flex-start; align-items: flex-start;  display: inline-flex; flex-wrap: wrap;">
            <div class="ItemExp">
      <div class="Frame28" style="align-self: stretch; height: 102px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
        <img src="../../public/image/svg/Checkmark.svg"/>
        <div style="align-self: stretch; color: white; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Руководители органов власти</div>
      </div>
      <div class="Frame26" style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
        <div style="color: white; font-size: 16px;font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Узнать подробнее</div>
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
            </div>
            <div class="ItemExp">
      <div class="Frame28" style="align-self: stretch; height: 102px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
        <img src="../../public/image/svg/Checkmark.svg"/>
        <div style="align-self: stretch; color: white; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">ИТ директора предприятий</div>
      </div>
      <div class="Frame26" style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
        <div style="color: white; font-size: 16px; font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Узнать подробнее</div>
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
            </div>
            <div class="ItemExp">
      <div class="Frame28" style="align-self: stretch; height: 102px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
        <img src="../../public/image/svg/Checkmark.svg"/>
        <div style="align-self: stretch; color: white; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Руководители ИКТ-бизнеса</div>
      </div>
      <div class="Frame26" style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
        <div style="color: white; font-size: 16px; font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Узнать подробнее</div>
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
            </div>
            <div class="ItemExp">
      <div class="Frame28" style="align-self: stretch; height: 102px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
        <img src="../../public/image/svg/Checkmark.svg"/>
        <div style="align-self: stretch; color: white; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Ректоры профильных вузов</div>
      </div>
      <div class="Frame26" style="justify-content: flex-start; align-items: center; gap: 16px; display: inline-flex">
        <div style="color: white; font-size: 16px; font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Узнать подробнее</div>
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Expert-community-block',
}
</script>
<style lang="scss" scoped>
.ItemExp{
    width: 600px;
    gap: 28px; 
    padding-top: 28px;
}

.Frame29 > .ItemExp{
    flex: 50%;
}
</style>