<template>
  <div>
    <p>STEP2</p>
    <p>お客様情報を入力してください</p>
    <p>現在、生命保険に加入されていますか</p>
    <label v-for="answer in answerArray" v-bind:key="answer.id">
      <input type="radio" name="firstAnswer" value="selected" v-model="firstAnswer"> {{ answer }}
    </label>
    <div v-if="firstAnswer === 'selected'">
      <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <label v-for="answer in answerArray" v-bind:key="answer.id">
        <input type="radio" name="secondAnswer" value="selected" v-model="secondAnswer"> {{ answer }}
      </label>
    </div>
    <div v-if="secondAnswer === 'selected'">
      <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
      <label v-for="answer in answerArray" v-bind:key="answer.id">
        <input type="radio" name="thirdAnswer"> {{ answer }}
      </label>
    </div>
    <p>
    <button v-on:click="moveBackToPage">前へ戻る</button>
    <button v-on:click="moveOnToPage">次へ進む</button>
    </p>
  </div>
</template>

<script>
  export default({
    data() {
      return {
        answerArray: ['はい','いいえ'],
        firstAnswer: false,
        secondAnswer: false,
      }
    },
    created() {

    },
    methods: {
      moveBackToPage () {
        this.$router.back();
      },
      moveOnToPage () {
        this.$router.push('/communicationform');
      },
    }
  })
</script>