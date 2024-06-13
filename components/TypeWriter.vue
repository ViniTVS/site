<script setup lang="ts">
/* that's just a copy & paste of a Typewriter made by Gayathri R adapted to the new API & ts 
 original: https://dev.to/gayathri_r/how-to-add-a-typewriter-animation-in-vuejs-43kj 
*/
import { onMounted } from 'vue';

const props = defineProps({
  displayText: {
    type: Array<String>,
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


let typeValue: Ref<string> = ref("");
let typeStatus: boolean = false;
let arrayIndex: number = 0;
let charIndex: number = 0;


function typeText() {
  if (charIndex < props.displayText[arrayIndex].length) {
    if (!typeStatus) typeStatus = true;
    typeValue.value += props.displayText[arrayIndex].charAt(
      charIndex
    );
    charIndex += 1;
    setTimeout(typeText, props.typingSpeed);
  } else {
    typeStatus = false;
    setTimeout(eraseText, props.newTextDelay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    if (!typeStatus) typeStatus = true;
    typeValue.value = props.displayText[arrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex -= 1;
    setTimeout(eraseText, props.erasingSpeed);
  } else {
    typeStatus = false;
    arrayIndex += 1;
    if (arrayIndex >= props.displayText.length)
      arrayIndex = 0;
    setTimeout(typeText, props.typingSpeed + 1000);
  }
}

onMounted(() => {
  setTimeout(typeText, props.newTextDelay + 200);
});

</script>

<template>
  <span>
    <span class="typed-text">{{ typeValue }}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }"></span>
  </span>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 6rem;
  font-weight: normal;

  span.typed-text {
    color: #d2b94b;
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 1.5rem;
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