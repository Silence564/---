<template>
  <div class="Homepage">
    <div class="frame62">
      <div class="logo">
        <img src="../../public/image/svg/Group.svg">
      </div>
      <div class="Frame64">
        <div class="text1">Закрытое заседание <br />Экспертного клуба «ИТ-Диалог» <br />в СПбГЭТУ «ЛЭТИ»</div>
        <div class="Frame61">
          <div class="data">19 апреля 2024 года, Санкт-Петербург</div>
          <div class="adres">ул. Профессора Попова, д.5</div>
        </div>
      </div> 
      <div class="Frame63">
        <div class="Polygon1" style="width: 12px; height: 24px; border: 2px white solid"></div>
        <button class="button">Подробнее</button>
        <div class="Polygon1" style="width: 24px; height: 12px; transform: rotate(90deg); transform-origin: 0 0; border: 2px white solid"></div>
      </div>
    </div>
    <whatitdialog/>
    <footer>
      <div class="Frame54">
        <div><img src="../../public/image/svg/Logo.svg"></div>
        <div class="Frame58">
          <div class="text33a2">Санкт-Петербург,<br/>ул. Воронежская, 33A, 2-й этаж</div>
          <div class="text2023">© Ассоциация АПСИТИЦР, 2023.</div>
        </div>
      </div>
      <div class="Frame55">
        <div class="Social">
          <img src="../../public/image/svg/Vk.svg"/>
          <img src="../../public/image/svg/Tg.svg"/>
          <img src="../../public/image/svg/Wa.svg"/>
        </div>
        <div class="Frame77">
        <div class="79217404984" style="text-align: right; color: white; font-size: 20px; font-family: Wix Madefor Display; font-weight: 600; line-height: 24px; word-wrap: break-word">+7 921 740-49-84</div>
          <div class="Frame53" style="flex-direction: column; justify-content: flex-start; align-items: flex-end; gap: 8px; display: flex">
            <div class="InfoItdialogInfo" style="text-align: right; color: white; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">info@itdialog.info</div>
            <div class="AntonPPrFactorRu" style="text-align: right; color: white; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">anton.p@pr-factor.ru</div>
          </div>
        </div>
      </div>
    </footer>
  </div> 
</template>
<script>
import whatitdialog from '../components/WhatITdialog';

export default {
  name: 'Home-page',
  components: {
    whatitdialog,
  },
}
</script>
<style lang="scss">
$weit400: 400;
$weit600: 600;
$fullpr: 100%;

.Homepage{
  max-width: 1440px; 
  width: $fullpr;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1px;
  display: inline-flex;
}

.Frame54{
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 40px; 
  display: inline-flex;
}

.Frame55{
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-end; 
  gap: 28px; 
  display: inline-flex;
}

.Frame58{
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 16px; 
  display: flex;
}

.Frame61{
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  gap: 16px; 
  display: flex;
}

.frame62{
  max-width: 1440px; 
  width: $fullpr; 
  max-height: 720px; 
  height: $fullpr;
  padding-left: 108px; 
  padding-right: 108px; 
  padding-top: 80px; 
  padding-bottom: 80px; 
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) $fullpr), url('../../public/image/fon.jpeg');
  background-size: $fullpr $fullpr;
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center; 
  display: flex;
}

.Frame63{
  width: 1133px; 
  justify-content: space-between; 
  align-items: center; 
  display: inline-flex; 
  padding-top: 4.3vw; 
  padding-bottom: 3vw;
}

.Frame77{
  flex-direction: column; justify-content: flex-start; align-items: flex-end; gap: 16px; display: flex;
}

.logo{
 padding-bottom: 1.3vw; padding-right: 2.7vw;
}

.Frame64{
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  gap: 40px; 
  display: flex;
}

.text1{
  text-align: center; 
  color: white; 
  font-size: 56px;  
  font-weight: 700; 
  line-height: 60.48px; 
  word-wrap: break-word;
  padding-top: 2vw;
}

.button{
  width: 151px; 
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

  &:hover{
  background: white;
  border: 1px #2B71C2 solid; 
  color: #1D2329;}
}

.data{
  text-align: center; 
  color: white; 
  font-size: 16px;  
  font-weight: $weit600; 
  line-height: 19.20px; 
  word-wrap: break-word;
}

.adres{
  text-align: center; 
  color: white; 
  font-size: 16px;  
  font-weight: $weit400; 
  line-height: 22.40px; 
  word-wrap: break-word;
}


footer{
  max-width: 1440px; 
  width: $fullpr;
  height: 278px; 
  padding-left: 108px; 
  padding-right: 108px; 
  padding-top: 58px; 
  padding-bottom: 58px; 
  background: #1D2329;
  justify-content: space-between; 
  align-items: flex-start; 
  display: inline-flex;
}

.text2023{
  color: white; font-size: 16px; font-weight: $weit400; line-height: 22.40px; word-wrap: break-word;
}

.text33a2{
  color: white; font-size: 16px; font-weight: $weit400; line-height: 22.40px; word-wrap: break-word;
}

.Social{
  justify-content: flex-end; align-items: flex-start; gap: 16px; display: inline-flex;
}
</style>