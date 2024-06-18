<template>
<div class="Frame10">
  <div style="align-self: stretch; color: #1D2329; font-size: 40px; font-weight: 700; line-height: 43.20px; word-wrap: break-word">Направления деятельности клуба</div>
  <div class="Frame9">
    <div class="ItemDir">
      <div style="flex: 1 1 0; color: white; font-size: 16px; font-weight: 600; line-height: 24px; word-wrap: break-word">«Голос ИТ-отрасли»</div>
      <div class="Frame8" style="width: 28px; height: 28px; padding-top: 9px; padding-bottom: 9px; background: rgba(255, 255, 255, 0.28); border-radius: 100px; overflow: hidden; justify-content: center; align-items: center; display: flex">
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
    </div>
    <div class="ItemDir">
      <div style="flex: 1 1 0; color: white; font-size: 16px; font-weight: 600; line-height: 24px; word-wrap: break-word">PR поддержка</div>
      <div class="Frame8" style="width: 28px; height: 28px; padding-top: 9px; padding-bottom: 9px; background: rgba(255, 255, 255, 0.28); border-radius: 100px; overflow: hidden; justify-content: center; align-items: center; display: flex">
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
    </div>
    <div class="ItemDir">
      <div style="flex: 1 1 0; color: white; font-size: 16px; font-weight: 600; line-height: 24px; word-wrap: break-word">Пилотирование импортоопережающих решений</div>
      <div class="Frame8" style="width: 28px; height: 28px; padding-top: 9px; padding-bottom: 9px; background: rgba(255, 255, 255, 0.28); border-radius: 100px; overflow: hidden; justify-content: center; align-items: center; display: flex">
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
    </div>
    <div class="ItemDir">
      <div style="flex: 1 1 0; color: white; font-size: 16px; font-weight: 600; line-height: 24px; word-wrap: break-word">Библиотека цифровых стартапов и драйверов импортоопережения</div>
      <div class="Frame8" style="width: 28px; height: 28px; padding-top: 9px; padding-bottom: 9px; background: rgba(255, 255, 255, 0.28); border-radius: 100px; overflow: hidden; justify-content: center; align-items: center; display: flex">
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
    </div>
    
    <div class="ItemDir">
      <div style="flex: 1 1 0; color: white; font-size: 16px; font-weight: 600; line-height: 24px; word-wrap: break-word">Неформальные встречи участников отрасли</div>
      <div class="Frame8" style="width: 28px; height: 28px; padding-top: 9px; padding-bottom: 9px; background: rgba(255, 255, 255, 0.28); border-radius: 100px; overflow: hidden; justify-content: center; align-items: center; display: flex">
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
    </div>
    <div class="ItemDir">
      <div style="flex: 1 1 0; color: white; font-size: 16px; font-weight: 600; line-height: 24px; word-wrap: break-word">Экспертная работа для членов Клуба</div>
      <div class="Frame8" style="width: 28px; height: 28px; padding-top: 9px; padding-bottom: 9px; background: rgba(255, 255, 255, 0.28); border-radius: 100px; overflow: hidden; justify-content: center; align-items: center; display: flex">
        <img src="../../public/image/svg/pol1.svg" style="cursor: pointer"/>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default{
    name: 'directions-block',
}
</script>
<style lang="scss" scoped>
.Frame10{
  max-width: 1440px; 
  width:100%; 
  height: 100%; 
  padding-left: 108px; 
  padding-right: 108px; 
  padding-top: 56px; 
  padding-bottom: 56px; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 40px; display: inline-flex;
}

.Frame9{
  align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex; flex-wrap: wrap;
}

.ItemDir{
  width: 31%; height: 120px; padding-left: 40px; padding-right: 40px; background: #2B71C2; border-radius: 12px; justify-content: flex-start; align-items: center; gap: 20px; display: flex; 
}

.Frame9 > .ItemDir{
  flex: 30;
}
</style>