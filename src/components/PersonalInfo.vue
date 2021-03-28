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
  export default({
    // name: 'PersonalInfo',
    data() {
      return {
        sexArray: ['男性','女性'],
        yearArray: ['1968年（昭和43年）','1969年（昭和44年）','1970年（昭和45年）','1971年（昭和46年）','1972年（昭和47年）','1973年（昭和48年）','1974年（昭和49年）','1975年（昭和50年）','1976年（昭和51年）','1977年（昭和52年）','1978年（昭和53年）','1979年（昭和54年）','1980年（昭和55年）','1981年（昭和56年）','1982年（昭和57年）','1983年（昭和58年）','1984年（昭和59年）','1985年（昭和60年）','1986年（昭和61年）','1987年（昭和62年）','1988年（昭和63年）','1989年（平成1年）','1990年（平成2年）','1991年（平成3年）','1992年（平成4年）','1993年（平成5年）','1994年（平成6年）','1995年（平成7年）','1996年（平成8年）','1997年（平成9年）','1998年（平成10年）','1999年（平成11年）','2000年（平成12年）'],
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