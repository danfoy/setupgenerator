Vue.component('lineitem', {
  template: `
    <tr>
      <td class="output-line">
        {{ line }}
        <div class="tickbox">
          <span class="tick">&#10004;</span>
        </div>
      </td>
    </tr>
  `,
  props: {
    line: String,
    prechecked: {
      type: Boolean,
      default: false
    }
  }
});

Vue.component('form-section', {
  template: `
      <transition enter-active-class="animated fadein" leave-active-class="animated fadeout">
      <fieldset :name="name" :class="'input-section ' + name">
        <legend class="section-label" :for="name">{{ title }}</legend>
        <slot>

        </slot>
      </fieldset>
    </transition>
  `,
  props: {
    name: String,
    title: String
  }
});

/*
Vue.component('checkboxItem', {
  template: '<label><input type="checkbox" v-bind:true-value="{ name: value, required: true }" v-bind:false-value="{ name: value, required: false }">{{ value }}</label>',
  props: {
    checked: Boolean,
    value: String
  }
});
*/
