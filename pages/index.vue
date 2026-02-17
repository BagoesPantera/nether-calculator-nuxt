<script setup>
const xover = ref(0);
const yover = ref(65);
const zover = ref(0);

const xnether = ref(0);
const ynether = ref(65);
const znether = ref(0);

function calculateNether() {
  xnether.value = Math.floor(xover.value / 8);
  ynether.value = yover.value;
  znether.value = Math.floor(zover.value / 8);
}

function calculateOver() {
  xover.value = xnether.value * 8;
  yover.value = ynether.value;
  zover.value = znether.value * 8;
}
</script>
<style>
@import url("~/assets/css/home.css");
</style>
<template>
  <main class="calculator-page">
    <div class="calculator-frame">
      <header class="calculator-header text-center">
        <h1 class="app-title">Nether Calculator</h1>
        <p class="app-subtitle">
          Calculate linked portal coordinates between the Overworld and the
          Nether
        </p>
      </header>

      <section class="world-panels">
        <div class="world-card overworld-card">
          <div class="world-label">
            <span class="world-pill overworld-pill">Overworld</span>
            <span class="world-meta">Main world coordinates</span>
          </div>
          <div class="coords-grid">
            <div class="coord-field">
              <span class="coord-label">X</span>
              <input
                type="number"
                class="coord-input"
                v-model="xover"
                @input="calculateNether"
              />
            </div>
            <div class="coord-field">
              <span class="coord-label">Y</span>
              <input
                type="number"
                class="coord-input"
                v-model="yover"
                @input="calculateNether"
              />
            </div>
            <div class="coord-field">
              <span class="coord-label">Z</span>
              <input
                type="number"
                class="coord-input"
                v-model="zover"
                @input="calculateNether"
              />
            </div>
          </div>
        </div>

        <div class="world-card nether-card">
          <div class="world-label">
            <span class="world-pill nether-pill">Nether</span>
            <span class="world-meta">Portal coordinates in the Nether</span>
          </div>
          <div class="coords-grid">
            <div class="coord-field">
              <span class="coord-label">X</span>
              <input
                type="number"
                class="coord-input"
                v-model="xnether"
                @input="calculateOver"
              />
            </div>
            <div class="coord-field">
              <span class="coord-label">Y</span>
              <input
                type="number"
                class="coord-input"
                v-model="ynether"
                @input="calculateOver"
              />
            </div>
            <div class="coord-field">
              <span class="coord-label">Z</span>
              <input
                type="number"
                class="coord-input"
                v-model="znether"
                @input="calculateOver"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="instructions-card">
        <h2 class="instructions-title">How to use</h2>
        <ol class="instructions-list">
          <li>
            Build a portal frame in the Overworld, but do not light it yet.
          </li>
          <li>
            Press F3 while standing in the frame, note the coordinates, and fill
            them into the Overworld section above.
          </li>
          <li>
            The Nether coordinates on the right will be calculated
            automatically.
          </li>
          <li>Light the Overworld portal and go into the Nether.</li>
          <li>
            Go to the Nether coordinates:
            {{ `(${xnether}, ${ynether}, ${znether})` }}.
          </li>
          <li>
            Place an obsidian block at that position, build a new portal around
            it, and light it.
          </li>
          <li>
            Disable the old Overworld portal so your link always stays
            consistent.
          </li>
          <li>
            Use the new Nether portal to return to the Overworld at the exact
            linked location.
          </li>
        </ol>
      </section>

      <footer class="app-footer">
        <span class="footer-note"
          >by
          <a
            class="footer-link"
            href="https://github.com/BagoesPantera"
            target="_blank"
            >pantera</a
          ></span
        >
        <span class="footer-hint">Minecraft portal helper</span>
      </footer>
    </div>
  </main>
</template>
