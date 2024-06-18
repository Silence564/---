<template>
  <div class="clubpage">
    <div class="fon">  
      <header style="width:90%;gap: 8vw; height: 88px; padding-left: 108px; padding-right: 108px; padding-top: 16px; padding-bottom: 16px; justify-content: space-between; align-items: center; display: inline-flex; flex-direction: row;">
          <img src="../../public/image/svg/Logo.svg">
          <div class="Frame59" style="justify-content: flex-start; align-items: flex-start; gap: 28px; display: flex">
            <div style="text-align: center; color: white; font-size: 16px; font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Направления</div>
            <div style="text-align: center; color: white; font-size: 16px; font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Участники</div>
            <div style="text-align: center; color: white; font-size: 16px; font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Мероприятия</div>
            <div style="text-align: center; color: white; font-size: 16px; font-weight: 600; line-height: 16px; letter-spacing: 0.32px; word-wrap: break-word">Проекты</div>
          </div>
          <button class="button">Вступить в клуб</button>
      </header>
      <div class="Frame7">   
        <div class="Frame78" style="align-self: stretch; height: 292px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 56px; display: flex; padding-bottom: 80px">
          <div class="Frame3" style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div style="color: white; font-size: 56px; font-weight: 700; line-height: 60.48px; word-wrap: break-word">ИТ-Диалог</div>
            <div class="Frame2" style="padding-left: 16px; padding-right: 16px; padding-top: 2px; padding-bottom: 2px; background: #D12A11; border-radius: 8px; justify-content: center; align-items: center; display: inline-flex">
              <div style="color: white; font-size: 20px; font-weight: 400; line-height: 28px; word-wrap: break-word">площадка для прямых коммуникаций власти и ИТ-бизнеса</div>
            </div>
          </div>
          <div class="Frame6" style="align-self: stretch; height: 128px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex">
            <div class="Frame4" style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
              <img src="../../public/image/svg/Checkmark.svg"/>
              <div style="flex: 1 1 0; color: white; font-size: 20px; font-weight: 400; line-height: 28px; word-wrap: break-word">Клуб развивает сотрудничество с органами власти, проектами, фондами и институтами развития, оказывающими меры поддержки;</div>
            </div>
            <div class="Frame5" style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
              <img src="../../public/image/svg/Checkmark.svg"/>
              <div style="flex: 1 1 0; color: white; font-size: 20px; font-weight: 400; line-height: 28px; word-wrap: break-word">Экспертное сообщество Клуба осуществляет отбор перспективных решений российских ИТ-компаний для включения в программы продвижения.</div>
            </div>
          </div>
        </div>
        <div class="bbutton"><button class="button">Вступить в клуб</button></div>
      </div>
    </div>
    <direction/>
    <faceclub/>
    <partners/>
    <exspert/>
    <calendare/>
    <project/>
    <document/>
    <join/>
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
import connectionblock from '../components/Connection.vue';
import partners from '../components/Partners.vue';
import exspert from '../components/ExpertCommunity.vue';
import faceclub from '../components/FaceClub.vue';
import calendare from '../components/Calendare.vue';
import direction from '../components/Directions.vue';
import project from '../components/Project.vue';
import document from '../components/Document.vue';
import join from '../components/Join.vue';

export default {
  name: 'Club-page',
  components: {
    connectionblock,
    partners,
    exspert,
    faceclub,
    calendare,
    direction,
    project,
    document,
    join,
  },
}
</script>
<style lang="scss" scoped>
$weit400: 400;
$weit600: 600;
$fullpr: 100%;

.clubpage{
  max-width: 1440px; 
  width: $fullpr;
  background-color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1px;
  display: inline-flex;
}

.fon{
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) $fullpr), url('../../public/image/fon1.jpeg');
  background-size: $fullpr $fullpr;
  max-width: 1440px; 
  width: $fullpr; 
  max-height: 800px; 
  height: $fullpr;
}

.Frame7{
  max-width: 1440px; 
  width: $fullpr; 
  max-height: 720px; 
  height: $fullpr;
  padding-left: 108px; 
  padding-right: 108px; 
  padding-top: 80px; 
  padding-bottom: 80px;
  flex-direction: column; 
  justify-content: space-between; 
  align-items: flex-start; 
  display: inline-flex;
}

.button{
  width: 187px; 
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

.bbutton{
  padding-left: 28px;
  padding-right: 28px;
  width: 187px; height: 56px;
  justify-content: center; align-items: center; display: inline-flex;
  padding-top: 1vw;
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