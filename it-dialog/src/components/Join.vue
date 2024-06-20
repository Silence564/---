<template>
<div class="Frame52">
  <div class="Frame49">
    <div style="width: 600px; color: black; font-size: 40px; font-weight: 700; line-height: 43.20px; word-wrap: break-word">Вступите в Клуб<br/>и получите преимущества уже сегодня</div>
    <div class="Puzzle1" style="width: 320px; height: 320px; position: relative">
      <img src="../../public/image/puzzle.png" />
    </div>
  </div>
  <div class="Frame51">
    <div class="Frame50">
      <input placeholder="Ваше имя" class="Input"/>
      <input placeholder="Телефон" class="Input"/>
      <input placeholder="Организация, которую вы представляете" class="Input"/>
      <input placeholder="E-mail" class="Input"/>
      <div style="align-self: stretch; color: black; font-size: 16px; font-weight: 400; line-height: 22.40px; word-wrap: break-word">Нажимая на кнопку вы соглашаетесь с политикой обработки<br/>персональных данных</div>
    </div>
    <button class="button">Подать заявку</button>
  </div>
</div>
</template>
<script>
export default{
    name: 'join-in-club-block',
}
</script>
<style lang="scss" scoped>
$weit400: 400;
$weit600: 600;
$fullpr: 100%;

.Frame52{
   
  width:100%; 
  height: 100%; 
  padding-top: 56px; padding-left: 108px; padding-right: 108px; background: #F5F8FC; justify-content: flex-start; align-items: flex-start; display: inline-flex; gap:4.1vw;
}

.Frame49{
  width: 40vw; flex: 1 1 0; align-self: stretch; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex;
}

.Frame51{
  width: 52vw; flex: 1 1 0; padding: 40px; background: white; border-radius: 40px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 28px; display: inline-flex;
}

.Frame50{
  width: 40vw; align-self: stretch; height: 332px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 16px; display: flex;
}

.button{
  width: 40vw; 
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



.Input{ 
    width: 40vw;
    height: 56px; 
    padding-top: 17px; 
    padding-bottom: 17px; 
    padding-left: 16px; 
    padding-right: 428px; 
    background: #F7F9FA; 
    border-radius: 12px; 
    border: 1px #E1E6EB solid;
    color: #1D2329; 
    font-size: 16px; font-weight: 400; 
    line-height: 22.40px; word-wrap: break-word;

    &::placeholder{
        overflow: visible;
    }
}
</style>