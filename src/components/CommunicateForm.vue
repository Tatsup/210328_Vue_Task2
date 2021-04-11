<template>
  <div>
    <p>STEP3</p>
    <p>ご相談内容をご記入ください</p>
    <p>-ご相談内容-</p>
    <textarea name="content" rows="15" cols="60" v-model="formContents"></textarea>
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
      }
    },
    created() {

    },
    methods: {
      moveBack () {
        this.$router.back();
      },
      moveOn () {
        this.$router.push('/confirm');
        // storeのmutationsをコミット
        this.$store.commit( 'selectStep3Info', this.formContents );
      },
    }
  })
</script>