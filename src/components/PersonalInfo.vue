<template>
  <div>
    <p>STEP1</p>
    <p>お客様情報を入力してください</p>
    <p>-性別-</p>
    <label v-for="sex in sexArray" v-bind:key="sex">
      <input type="radio" name="sex">{{ sex }}
    </label>
    <br>
    <p>-生年月日-</p>
    <select v-model="yearString" v-on:change="getMaxDays"> <!-- v-model="year"とすることでVueのdataを更新 -->
      <option v-for="n in yearArray" v-bind:key="n">{{ n }}</option>
    </select>
    年
    <select v-model="month" v-on:change="getMaxDays">
      <option v-for="n in 12" v-bind:key="n">{{ n }}</option>
    </select>
    月
    <select v-model="day">
      <option v-for="n in maxDays" v-bind:key="n">{{ n }}</option>
    </select>
    日
    <p>
    <button v-on:click="moveBackToPage">前へ戻る</button>
    <button v-on:click="moveOnToPage">次へ進む</button>
    </p>
  </div>
</template>

<script>
// 年月日をインポート
import { yearArray } from '../utils/definition' 

  export default({
    // name: 'PersonalInfo',
    data() {
      return {
        sexArray: ['男性','女性'],
        yearArray,
        yearString: '1990年（平成2年）', // yearArrayに存在する要素出ないとエラー発生
        year: '',
        month: 1,
        day: 1,
        maxDays: 31
      }
    },
    created() {
      this.getYear();
      this.getMaxDays();
    },
    methods: {
      getYear: function () {
        this.year = Number(this.yearString.slice(0,4));
      },
      getMaxDays: function () {
        this.maxDays = new Date(this.year, this.month, 0).getDate();
      },
      moveBackToPage: function() {
        this.$router.back;
      },
      moveOnToPage: function() {
        this.$router.push('/questions');
      },
    }
  });
</script>

<style>
</style>