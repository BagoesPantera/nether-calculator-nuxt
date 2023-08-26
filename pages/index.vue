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
<style>
@import url('~/assets/css/home.css');
</style>
<template>
    <main >
        <div class="d-flex flex-column min-vh-100 align-items-center justify-content-center body p-5">
            <div class="bg-secondary bg-opacity-50 rounded p-5">
                <div class="text-center">
                    <h1 class="text-white">Nether Calculator</h1>
                </div>
                <div class="container d-flex align-items-center justify-content-center">
                    <!-- ROW -->
                    <div class="row w-100"> 
                        <!-- COL Overworld -->
                        <div class="col custom-col w-100 d-flex align-items-center justify-content-center">
                            <div class="w-100 rounded px-5 py-5 overworld-card">
                                <h3 class="text-white">Overworld</h3>
                                <div class="input-group mb-1">
                                    <span class="input-group-text input">X</span>
                                    <input type="number" class="form-control input" v-model="xover" @keyup="calculateNether">
                                </div>
                                <div class="input-group mb-1">
                                    <span class="input-group-text input">Y</span>
                                    <input type="number" class="form-control input" v-model="yover" @keyup="calculateNether">
                                </div>
                                <div class="input-group mb-1">
                                    <span class="input-group-text input">Z</span>
                                    <input type="number" class="form-control input" v-model="zover" @keyup="calculateNether">
                                </div>
                            </div>
                            
                        </div>
                        <!-- COL Nether -->
                        <div class="col custom-col w-100 d-flex align-items-center justify-content-center">
                            <div class="w-100 rounded p-5 nether-card">
                                
                                    <h3 class="text-white">Nether</h3>
                                    <div class="input-group mb-1">
                                        <span class="input-group-text input">X</span>
                                        <input type="number" class="form-control input" v-model="xnether" @keyup="calculateOver">
                                    </div>
                                    <div class="input-group mb-1">
                                        <span class="input-group-text input">Y</span>
                                        <input type="number" class="form-control input" v-model="ynether" @keyup="calculateOver">
                                    </div>
                                    <div class="input-group mb-1">
                                        <span class="input-group-text input">Z</span>
                                        <input type="number" class="form-control input" v-model="znether" @keyup="calculateOver">
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-white">
                    <h3>Instructions</h3>
                    <ol>
                        <li>Build your nether portal in the overworld, <b> but do not light it yet.</b></li>
                        <li>Press F3 while inside your portal frame and note your portal's coordinates. Fill these overworld coordinates in in the calculator. The nether coordinates will automatically be calculated.</li>
                        <li>Light your portal and go into the Nether.</li>
                        <li>Go to your coordinates in the Nether: {{ `(${xnether},${ynether},${znether}).` }}</li>
                        <li>Place a obsidian block on these coordinates.</li>
                        <li>Use the obsidian as the base of your portal, finish your portal and light it.</li>
                        <li><b>Important! Remove/disable your old portal you came through in step 3.</b> </li>
                        <li>Go through your newly built portal in the nether at {{ `(${xnether},${ynether},${znether}).` }}</li>
                    </ol>
                </div>
            </div>
        </div>
        
        <div class="position-absolute bottom-0 start-50 translate-middle">
            <span>by: <a class="link-danger" href="https://github.com/BagoesPantera" target="_blank">pantera</a></span>
        </div>
    </main>
</template>