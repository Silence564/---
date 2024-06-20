<template>
<div class="Frame75">
  <div style="align-self: stretch; color: black; font-size: 40px; font-weight: 700; line-height: 43.20px; word-wrap: break-word">Свяжитесь с нами</div>
  <div class="Frame74">
    <div class="ItemContact">
      <div class="Frame73">
        <img src="../../public/image/svg/User.svg"/>
        <div class="Frame71">
          <div style="color: #1D2329; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Хохолева Александра</div>
          <div style="color: #78838F; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">Коммерческий директор</div>
        </div>
      </div>
      <div class="Frame72">
        <div class="AkItdigitalInfo">ak@itdigital.info</div>
        <div class="AkItdigitalInfo">+7 921 951-55-15</div>
        <div class="Frame70">
            <img src="../../public/image/svg/Telegram1.svg"/>
          <div class="Aqvada">@Aqvada</div>
        </div>
      </div>
    </div>
    <div class="ItemContact">
      <div class="Frame73">
        <img src="../../public/image/svg/User.svg"/>
        <div class="Frame71">
          <div style="color: #1D2329; font-size: 28px; font-weight: 600; line-height: 30.24px; word-wrap: break-word">Паулич Антон</div>
          <div style="color: #78838F; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">Исполнительный директор</div>
        </div>
      </div>
      <div class="Frame72">
        <div class="AkItdigitalInfo">ap@itdigital.info</div>
        <div class="AkItdigitalInfo">+7 921 740-49-84</div>
        <div class="Frame70">
            <img src="../../public/image/svg/Telegram1.svg"/>
          <div class="Aqvada">@AntonPaulich</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
name: 'connection-block'
}
</script>
<style lang="scss" scoped>
.Frame75{
     
    width:100%; 
    height: 100%; 
    padding-left: 108px; 
    padding-right: 108px; 
    padding-top: 56px; 
    padding-bottom: 56px; 
    background: #F5F8FC; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center; 
    gap: 40px; 
    display: inline-flex;
}

.Frame74{
  justify-content: flex-start; align-items: flex-start; gap: 24px; display: inline-flex; flex-wrap: wrap;
}

.Frame73{
    justify-content: flex-start; align-items: center; gap: 28px; display: inline-flex;
}

.Frame71{
    flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: inline-flex;
}

.Frame72{
    flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex;
}

.Frame70{
    justify-content: flex-start; align-items: center; gap: 8px; display: inline-flex;
}

.ItemContact{
  width: 40vw;  padding: 20px; background: white; border-radius: 20px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 28px; display: inline-flex;
}

.Aqvada{
    color: #1D2329; font-size: 20px; font-weight: 400; line-height: 28px; word-wrap: break-word;
}

.AkItdigitalInfo{
    color: #1D2329; font-size: 20px; font-weight: 400; line-height: 28px; word-wrap: break-word;
}
</style>