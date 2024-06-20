<template>
<div class="Frame38" style="max-width: 1440px; width:100%; height: 100%; padding-left: 108px; padding-right: 108px; padding-top: 56px; padding-bottom: 56px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 40px; display: inline-flex">
  <div style="align-self: stretch; color: #1D2329; font-size: 40px; font-weight: 700; line-height: 43.20px; word-wrap: break-word">Проекты экспертного клуба</div>
  <div class="Frame37" style="width: 100%; align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex">
    <div class="ItemProject" style="width: 392px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 28px; display: inline-flex">
      <div class="Frame36" style="align-self: stretch; height: 276px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
        <img style="width:95%" src="../../public/image/1img.jpg" />
        <div style="align-self: stretch; color: #1D2329; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Центр поддержки ИКТ компаний</div>
      </div>
      <button class="button1">Подробнее</button>
    </div>
    <div class="ItemProject" style="width: 392px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 28px; display: inline-flex">
      <div class="Frame36" style="align-self: stretch; height: 276px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
        <img style="width:95%" src="../../public/image/2img.jpg" />
        <div style="align-self: stretch; color: #1D2329; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Библиотека Цифровых стартапов</div>
      </div>
      <button class="button1">Подробнее</button>
    </div>
    <div class="ItemProject" style="width: 392px; height: 344px; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
      <div class="Frame36" style="align-self: stretch; height: 246px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: flex">
        <img style="width:95%" src="../../public/image/3img.jpg" />
        <div style="align-self: stretch; color: #1D2329; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Медиапроект</div>
      </div>
      <button class="button1">Подробнее</button>
    </div>
  </div>
</div>
</template>
<script>
export default{
    name: 'project-block',
}
</script>
<style lang="scss" scoped>
.button1{
  width: 162px; 
  height: 40px;
  padding-left: 20px; 
  padding-right: 20px; 
  border-radius: 12px; 
  text-align: center;
  font-size: 16px; 
  font-weight: 600; 
  line-height: 16px; 
  letter-spacing: 0.32px; 
  word-wrap: break-word;
  background: white;
  border: 1px #2B71C2 solid; 
  color: #1D2329;
  white-space: nowrap;
  cursor:pointer;
}

.button1:hover{
  border: none;  
  background: #2B71C2; 
  color: white; 
}
</style>