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
        <button class="button">Подробнее</button>
      </div>
    </div>
    <whatitdialog/>
    <faceclub/>
    <calendare/>
    <publication/>
    <partners/>
    <connectionblock/>
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
        <div class="number">+7 921 740-49-84</div>
          <div class="Frame53">
            <div class="Info">info@itdialog.info</div>
            <div class="Info">anton.p@pr-factor.ru</div>
          </div>
        </div>
      </div>
    </footer>
  </div> 
</template>
<script>
import whatitdialog from '../components/WhatITdialog';
import connectionblock from '../components/Connection.vue';
import partners from '../components/Partners.vue';
import faceclub from '../components/FaceClub.vue';
import calendare from '../components/Calendare.vue';
import publication from '../components/Publication.vue';

export default {
  name: 'Home-page',
  components: {
    whatitdialog,
    connectionblock,
    partners,
    faceclub,
    calendare,
    publication,
  },
}
</script>
<style lang="scss">
$weit400: 400;
$weit600: 600;
$fullpr: 100%;
$wrap: break-word;
$f-s: flex-start;

.Homepage{
  max-width: $fullpr; 
  width: 1440px;
  background-color: white;
  flex-direction: column;
  justify-content: $f-s;
  align-items: $f-s;
  gap: 1px;
  display: inline-flex;
}

.Frame53{
  flex-direction: column; justify-content: $f-s; align-items: flex-end; gap: 8px; display: flex;
}

.Frame54{
  flex-direction: column; 
  justify-content: $f-s; 
  align-items: $f-s; 
  gap: 40px; 
  display: inline-flex;
}

.Frame55{
  flex-direction: column; 
  justify-content: $f-s; 
  align-items: flex-end; 
  gap: 28px; 
  display: inline-flex;
}

.Frame58{
  flex-direction: column; 
  justify-content: $f-s; 
  align-items: $f-s; 
  gap: 16px; 
  display: flex;
}

.Frame61{
  flex-direction: column; 
  justify-content: $f-s; 
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
  flex-direction: column; justify-content: $f-s; align-items: flex-end; gap: 16px; display: flex;
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
  word-wrap: $wrap;
  padding-top: 2vw;
}

.button{
  margin: 0 auto;
  width: 13.3%; 
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
  word-wrap: $wrap;
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
  word-wrap: $wrap;
}

.adres{
  text-align: center; 
  color: white; 
  font-size: 16px;  
  font-weight: $weit400; 
  line-height: 22.40px; 
  word-wrap: $wrap;
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
  align-items: $f-s; 
  display: inline-flex;
}

.text2023{
  color: white; font-size: 16px; font-weight: $weit400; line-height: 22.40px; word-wrap: $wrap;
}

.text33a2{
  color: white; font-size: 16px; font-weight: $weit400; line-height: 22.40px; word-wrap: $wrap;
}

.Social{
  justify-content: flex-end; align-items: $f-s; gap: 16px; display: inline-flex;
}

.number{
  text-align: right; color: white; font-size: 20px; font-weight: $weit600; line-height: 24px; word-wrap: $wrap;
}

.Info{
  text-align: right; color: white; font-size: 16px; font-weight: $weit400; line-height: 22.40px; word-wrap: $wrap;
}
</style>