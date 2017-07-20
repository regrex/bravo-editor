<template>
  <div class="Home">
    <div class="guide">
      <h1>Input url which you want to edit!</h1>
      <input type="url" v-model="url" />
      <button>Goto Edit</button>
    </div>
    <div class="edit">
      <div class="editor-wrap">
        <!-- <iframe id="editor" v-bind:src="url" frameborder="0"></iframe> -->
        <div id="editor">
          <h1>
            Creating editable content with DesignMode
          </h1>
          <p>
            Turning <code>document.designMode</code> on creates a page that is editable inline, by the user, on their browser! No text boxes needed at all.
          </p>
        </div>
      </div>
      <div class='toolbar'>
        <h3>Options</h3>
        <button class="command command-bold" v-on:click="command('bold')">
          <span class="icon-bold"></span>
        </button>
        <button class="command command-italic" v-on:click="command('italic')">
          <span class="icon-italic"></span>
        </button>
        <button class="command command-underline" v-on:click="command('underline')">
          <span class="icon-underline"></span>
        </button>
        <button class="command command-superscript" v-on:click="command('superscript')">
          <span class="icon-superscript"></span>
        </button>
        <button class="command command-subscript" v-on:click="command('subscript')">
          <span class="icon-subscript"></span>
        </button>
        <button class="command command-super" v-on:click="command('increaseFontSize')">
          <span class="icon-super"></span>
        </button>
        <button class="command command-sub" v-on:click="command('decreaseFontSize')">
          <span class="icon-sub"></span>
        </button>
      </div>
      <button>Save & Preview</button>
    </div>
    <div class="preview">
      <button>ScreenShot</button>
      <button>Download</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      url: 'https://regrex.github.io/'
    }
  },
  mounted () {
    console.log('mounted');
    const editor = document.querySelector('#editor');
    editor.designMode = 'on';
    editor.contentEditable = true;
    editor.focus();
  },
  methods: {
    command: function (name) {
      let success;

      try {
        success = document.execCommand(name, false, null);
      } catch (err) {
        console.log(err);
      }

      if (!success) {
        let msg = document.queryCommandSupported(name) ? 'Unknown Error' : 'Not Supported';
        console.log(msg);
      }
    }
  }
}
</script>

<style scoped>
@import url('../assets/iconfont.css');
.toolbar .command {
  font-size: 1.2rem;
  padding: 0.5rem;
  border: 0;
  background: none;
  outline: 0;
}
.toolbar .command:hover {
  color: #009688;  
}
</style>
