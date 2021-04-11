<template>
  <div>
    <p>STEP2</p>
    <p>お客様情報を入力してください</p>
    <p>現在、生命保険に加入されていますか</p>
    <label><input type="radio" value="はい" v-model="firstAnswer">はい</label>
    <label><input type="radio" value="いいえ" v-model="firstAnswer">いいえ</label>
    <div v-if="firstAnswer != ''">
      <p>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
    <label><input type="radio" value="はい" v-model="secondAnswer">はい</label>
    <label><input type="radio" value="いいえ" v-model="secondAnswer">いいえ</label>
    </div>
    <div v-if="secondAnswer != ''">
      <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
    <label><input type="radio" value="はい" v-model="thirdAnswer">はい</label>
    <label><input type="radio" value="いいえ" v-model="thirdAnswer">いいえ</label>
    </div>
    <p>
    <button v-on:click="moveBack">前へ戻る</button>
    <button v-on:click="moveOn">次へ進む</button>
    </p>
  </div>
</template>

<script>
  export default({
    data() {
      return {
        answerArray: ['はい','いいえ'],
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: ''
      }
    },
    created() {

    },
    methods: {
      moveBack () {
        this.$router.back();
      },
      moveOn () {
        this.$router.push('/communicationform');
        // storeのmutationsをコミット
        this.$store.commit(
          'selectStep2Info',
          { answer1 : this.firstAnswer ,
            answer2 : this.secondAnswer ,
            answer3 : this.thirdAnswer
          });
      },
    }
  })
</script>