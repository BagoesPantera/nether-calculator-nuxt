<script setup>
const xover = ref(0);
const yover = ref(65);
const zover = ref(0);

const xnether = ref(0);
const ynether = ref(65);
const znether = ref(0);

function calculateNether() {
    xnether.value = Math.floor(xover.value/8);
    ynether.value = yover.value;
    znether.value = Math.floor(zover.value/8);
}

function calculateOver() {
    xover.value = xnether.value*8;
    yover.value = ynether.value;
    zover.value = znether.value*8;
}
</script>
<template>
    <main style="background: rgb(90,160,125);
background: linear-gradient(90deg, rgba(90,160,125,1) 1%, rgba(0,255,231,1) 100%); height: 100vh;">
        <div class="text-center">
            <h1>Nether Calculator</h1>
        </div>
        <div class="container d-flex bg-danger align-items-center justify-content-center">
            <!-- ROW -->
            <div class="row w-100"> 
                 <!-- COL Overworld -->
                <div class="col overworld w-100 bg-primary d-flex align-items-center justify-content-center" style="height: 30vh;">
                    <div class="w-75 bg-danger rounded px-5 py-1 ">
                        <h3>Overworld</h3>
                        <div class="input-group mb-1">
                            <span class="input-group-text">X</span>
                            <input type="number" class="form-control" v-model="xover" @keyup="calculateNether">
                        </div>
                        <div class="input-group mb-1">
                            <span class="input-group-text">Y</span>
                            <input type="number" class="form-control" v-model="yover" @keyup="calculateNether">
                        </div>
                        <div class="input-group mb-1">
                            <span class="input-group-text">Z</span>
                            <input type="number" class="form-control" v-model="zover" @keyup="calculateNether">
                        </div>
                    </div>
                    
                </div>
                <!-- COL Nether -->
                <div class="col nether bg-warning w-100 d-flex align-items-center justify-content-center" style="height: 30vh;">
                    <div class="w-75 bg-danger">
                        <h3>Nether</h3>
                        <div class="input-group mb-3">
                            <span class="input-group-text">X</span>
                            <input type="number" class="form-control" v-model="xnether" @keyup="calculateOver">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Y</span>
                            <input type="number" class="form-control" v-model="ynether" @keyup="calculateOver">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Z</span>
                            <input type="number" class="form-control" v-model="znether" @keyup="calculateOver">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h3>Instructions</h3>
            <ol>
                <li>Build your nether portal in the overworld, but do not light it yet.</li>
                <li>Press F3 while inside your portal frame and note your portal's coordinates. Fill these overworld coordinates in in the calculator. The nether coordinates will automatically be calculated.</li>
                <li>Light your portal and go into the Nether.</li>
                <li>Go to your coordinates in the Nether: {{ `(${xnether},${ynether},${znether}).` }}</li>
                <li>Place a obsidian block on these coordinates.</li>
                <li>Use the obsidian as the base of your portal, finish your portal and light it.</li>
                <li>Important! Remove/disable your old portal you came through in step 3</li>
                <li>Go through your newly built portal in the nether at {{ `(${xnether},${ynether},${znether}).` }}</li>
            </ol>
        </div>
        <div class="position-absolute bottom-0 start-50 translate-middle">
        <span>By: <a class="link-info" href="https://github.com/BagoesPantera" target="_blank">pantera</a></span>
    </div>
    </main>
</template>