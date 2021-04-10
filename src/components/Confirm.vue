<template>
  <div>
    <p>STEP4</p>
    <p>以下の内容をご確認ください</p>
    <p>-性別-</p>
    <p>{{this.$store.state.sex}}</p>
    <p>-生年月日-</p>
    <p>{{this.$store.state.birthday}}</p>
    <p>-現在、生命保険に加入されていますか？-</p>
    <p>{{this.$store.state.answer1}}</p>
    <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
    <p>{{this.$store.state.answer2}}</p>
    <p>-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
    <p>{{this.$store.state.answer3}}</p>
    <p>-ご相談内容-</p>
    <p>{{this.$store.state.formContents}}</p>
    <p>
      <button v-on:click="moveBackToPage">前へ戻る</button>
      <button v-on:click="submit">送信</button>
    </p>
  </div>
</template>

<script>
  export default({
    data() {

    },
    methods: {
      moveBackToPage () {
        this.$router.back();
      },
      submit () {
      },
    }
  })
</script>