<template>
  <div>
    <input class="checkBox" type="checkbox" name="" value=""><label class="label">{{label}}<span class="subLabel">{{subLabel}}</span></label></input>
  </div>
</template>
<script>
  export default {
    name: 'ax-checkbox',
    props: {
      label: String,
      subLabel: String
    }
  }
</script>
<style>
input[type="checkbox"] {
  height: 35px;
  width: 35px;
  vertical-align: middle;
  margin: 0 1.1em 0.4em 0;
  border: 2px solid #0d578c;
  border-radius: 8px;
  background: #FCFCFC;
  -webkit-appearance: none;
  -webkit-transition: box-shadow 200ms;
  box-shadow:inset 1px 1px 0 #fff, 0 1px 1px rgba(0,0,0,0.1);
  outline: none;

  &:checked {
    border-color:#0d578c
  }
  &:active:not(:disabled) {
    box-shadow:inset 1px 1px 0 rgba(0,0,0,0.2), inset -1px -1px 0 rgba(255,255,255,0.6);
    border-color:rgba(0,0,0,0.5);
  }

  &:checked:before {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
    content: '\2713';
    -webkit-margin-start: 0;
    margin-left: 2px;
    font-size: 2.5em;
  }
}
.arrow {
  position: absolute;
  right: 20px;
  font-size: 1.5em;
  font-weight:normal;
}
.label {
  font-weight: 500;
  font-size: 1.1rem;
  color:#3d4143;
}
.subLabel {
  margin-left: 5px;
  font-size: 0.9rem;
  font-weight: normal;
}
</style>
