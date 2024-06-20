<template>
<div class="Frame53">
  <div style="align-self: stretch; color: #1D2329; font-size: 40px; font-weight: 700; line-height: 43.20px; word-wrap: break-word">Календарь мероприятий</div>
  <div class="Frame34">
    <div class="ItemEvent">
      <div class="Frame33">
        <div class="Frame76">
          <img class="Rectangle11" style="width: 100%; height: 70px; mix-blend-mode: darken" src="../../public/image/events/11.png" />
        </div>
        <div class="Frame31">
          <div class="5" style="text-align: center; color: #D12A11; font-size: 20px; font-weight: 600; line-height: 24px; word-wrap: break-word">3-5 апреля</div>
          <div style="text-align: center; color: #D12A11; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">2024</div>
        </div>
      </div>
      <div style="align-self: stretch; color: #1D2329; font-size: 20px; font-weight: 600; line-height: 24px; word-wrap: break-word">Конференция "Цифровая безопасность" и секция "Безопасная городская среда" в рамках выставки "ЭкспоТехностраж"</div>
    </div>
    <div class="ItemEvent">
      <div class="Frame33">
        <div class="Frame76">
          <img class="Rectangle11" style="width: 100%; height: 70px; mix-blend-mode: darken" src="../../public/image/events/123.png" />
        </div>
        <div class="Frame31">
          <div class="5" style="text-align: center; color: #D12A11; font-size: 20px; font-weight: 600; line-height: 24px; word-wrap: break-word">19 мая</div>
          <div style="text-align: center; color: #D12A11; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">2024</div>
        </div>
      </div>
      <div style="align-self: stretch; color: #1D2329; font-size: 20px; font-weight: 600; line-height: 24px; word-wrap: break-word">Закрытое заседание Экспертного клуба «ИТ-Диалог» в СПбГЭТУ «ЛЭТИ»<br/><br/></div>
    </div>
    <div class="ItemEvent">
      <div class="Frame33">
        <div class="Frame76">
          <img class="Rectangle11" style="width: 100%; height: 70px; mix-blend-mode: darken" src="../../public/image/events/123.png" />
        </div>
        <div class="Frame31">
          <div class="5" style="text-align: center; color: #D12A11; font-size: 20px; font-weight: 600; line-height: 24px; word-wrap: break-word">17-18 мая</div>
          <div style="text-align: center; color: #D12A11; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">2024</div>
        </div>
      </div>
      <div style="align-self: stretch; color: #1D2329; font-size: 20px; font-weight: 600; line-height: 24px; word-wrap: break-word">Заседание Экспертного клуба "ИТ-Диалог"<br/><br/><br/></div>
    </div>
  </div>
  <button class="button">Показать все</button>
</div>
</template>
<script>
export default{
    name: 'calendare-event',
}
</script>
<style lang="scss" scoped>
$weit400: 400;
$weit600: 600;
$fullpr: 100%;

.Frame53{
  max-width: 1440px; width:100%; height: 100%; padding-left: 108px; padding-right: 108px; padding-top: 56px; padding-bottom: 56px; background: white; flex-direction: column; justify-content: flex-start; align-items: center; gap: 40px; display: inline-flex;
}

.Frame34{
  max-width: 1224px; width:100%; align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 1.5vw; display: inline-flex; flex-wrap: wrap;
}

.ItemEvent{
  width:32%; height: 344px;  padding: 20px; border-radius: 20px; border: 1px #E1E6EB solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 28px; display: inline-flex;
}

.Frame33{
  align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex;
}

.Frame76{
  width: 150px; height: 150px; padding-left: 14px; padding-right: 14px; padding-top: 44px; padding-bottom: 44px; background: #F5F8FC; border-radius: 100px; justify-content: center; align-items: center; display: flex;
}

.Frame31{
  width: 150px; height: 150px; background: #FAE9E6; border-radius: 100px; flex-direction: column; justify-content: center; align-items: center; gap: 7px; display: inline-flex;
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
</style>