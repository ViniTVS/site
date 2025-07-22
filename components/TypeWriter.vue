<script setup lang="ts">
/* that's just an addaptation of a Typewriter made by Gayathri R 
 original: https://dev.to/gayathri_r/how-to-add-a-typewriter-animation-in-vuejs-43kj 
*/
import { onMounted } from 'vue';

const props = defineProps({
  displayText: {
    type: Array<string>,
    required: true
  },
  typingSpeed: {
    type: Number,
    default: 100,
  },
  erasingSpeed: {
    type: Number,
    default: 100,
  },
  newTextDelay: {
    type: Number,
    default: 2000,
  },
});


let typeValue: Ref<string> = ref(props.displayText[0]);
let arrayIndex: number = 0;
let charIndex: number = props.displayText[0].length - 1;


function typeText() {
  if (charIndex < props.displayText[arrayIndex].length) {
    typeValue.value += props.displayText[arrayIndex].charAt(
      charIndex
    );
    charIndex += 1;
    setTimeout(typeText, props.typingSpeed);
  } else {
    setTimeout(eraseText, props.newTextDelay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typeValue.value = props.displayText[arrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex -= 1;
    setTimeout(eraseText, props.erasingSpeed);
  } else {
    arrayIndex = (arrayIndex + 1) % props.displayText.length;
    setTimeout(typeText, props.typingSpeed + 1000);
  }
}

onMounted(() => {
  setTimeout(eraseText, props.newTextDelay + 200);
});

</script>

<template>
  <span>
    <span class="typed-text">{{ typeValue }}</span>
    <span class="blinking-cursor">|</span>
  </span>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* // Cursor blinking CSS Starts... */
.blinking-cursor {
  font-size: 1.25rem;
  color: oklch(var(--bc));
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: oklch(var(--bc));
  }
}

@-moz-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: oklch(var(--bc));
  }
}

@-webkit-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: oklch(var(--bc));
  }
}

@-ms-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: oklch(var(--bc));
  }
}

@-o-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: oklch(var(--bc));
  }
}
</style>