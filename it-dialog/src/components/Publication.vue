<template>
<div class="Frame69" style="max-width: 1440px; width: 100%; height: 100%; padding-top: 56px; padding-left: 108px; padding-right: 108px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex">
  <div style="align-self: stretch; color: #1D2329; font-size: 40px; font-weight: 700; line-height: 43.20px; word-wrap: break-word">Публикации</div>
  <div class="Frame68">
    <div class="ItemBlog">
      <img style="width: 100%" src="../../public/image/publication1.jpg" />
      <div class="Frame67">
        <div class="info2" style="">Поставить человека на первое место: эволюция государственных услуг через клиентоцентричности</div>
        <div class="info1">В рамках конференции «ИТ-диалог — Белые ночи» участники финальной дискуссии обсудили внедрение принципов клиентоцентричности в деятельность органов власти всех уровней...</div>
      </div>
      <button class="button1">Читать дальше</button>
    </div>
    <div class="ItemBlog">
      <img style="width: 100%" src="../../public/image/publication2.jpg" />
      <div class="Frame67">
        <div class="info2">Поставить человека на первое место: эволюция государственных услуг через клиентоцентричности</div>
        <div class="info1">В рамках конференции «ИТ-диалог — Белые ночи» участники финальной дискуссии обсудили внедрение принципов клиентоцентричности в деятельность органов власти всех уровней...</div>
      </div>
      <button class="button1">Читать дальше</button>
    </div>
    <div class="ItemBlog">
      <img style="width: 100%" src="../../public/image/publication3.jpg" />
      <div class="Frame67">
        <div class="info2">Поставить человека на первое место: эволюция государственных услуг через клиентоцентричности</div>
        <div class="info1">В рамках конференции «ИТ-диалог — Белые ночи» участники финальной дискуссии обсудили внедрение принципов клиентоцентричности в деятельность органов власти всех уровней...</div>
      </div>
      <button class="button1">Читать дальше</button>
    </div>
  </div>
  <button class="button">Читать все</button>
</div>
</template>
<script>
export default{
    name: 'publication-block',
}
</script>
<style lang="scss" scoped>
$weit400: 400;
$weit600: 600;
$fullpr: 100%;

.Frame68{
    width:100%; 
    align-self: stretch; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 2vw; 
    display: inline-flex;
    flex-wrap: wrap;
}

.ItemBlog{
    width: 31.7%; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 28px; 
    display: inline-flex;
}

.Frame67{
    width: 30%;flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;
}

.info1{
    width: 27vw; color: #78838F; font-size: 1.2vw; font-weight: 400; line-height: 22.40px; word-wrap: break-word;
}

.info2{
    width: 28vw; color: #1D2329; font-size: 1.5vw; font-weight: $weit600; line-height: 24px; word-wrap: break-word
}

.button{
  width: 144px; 
  height: 56px;
  padding-left: 28px; 
  padding-right: 28px; 
  background: #2B71C2; 
  border-radius: 12px; 
  text-align: center;
  color: white; 
  font-size: 16px; 
  font-weight: $weit600; 
  line-height: 16px; 
  letter-spacing: 0.32px; 
  word-wrap: break-word;
  border: none; 
  cursor: pointer;
  white-space: nowrap;

  &:hover{
  background: white;
  border: 1px #2B71C2 solid; 
  color: #1D2329;}
}

.button1{
  width: 163px; 
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
  
  &:hover{
    border: none;  
    background: #2B71C2; 
    color: white; 
    }
}


</style>