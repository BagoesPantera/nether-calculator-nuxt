<script setup>
const xover = ref(0);

function tes() {
    console.log(xover.value);
}
</script>
<template>
    <main >
        <div class="text-center">
            <h1>Nether Calculator</h1>
        </div>
        <div class="container d-flex bg-danger align-items-center justify-content-center">
            <!-- ROW -->
            <div class="row w-100"> 
                 <!-- COL Overworld -->
                <div class="col overworld w-100 bg-primary d-flex align-items-center justify-content-center" style="height: 45vh;">
                    <div class="w-75 bg-danger">
                        <h3>Overworld</h3>
                        <div class="input-group mb-3 bg-success ">
                            <span class="input-group-text">X</span>
                            <input type="number" class="form-control" v-model="xover" @keyup="tes">
                        </div>
                        <div class="input-group mb-3 bg-success ">
                            <span class="input-group-text">Y</span>
                            <input type="number" class="form-control" v-model="xove" @keyup="tes">
                        </div>
                        <div class="input-group mb-3 bg-success ">
                            <span class="input-group-text">Z</span>
                            <input type="number" class="form-control" v-model="xovr" @keyup="tes">
                        </div>
                    </div>
                    
                </div>
                <!-- COL Nether -->
                <div class="col nether bg-warning w-100 d-flex align-items-center justify-content-center" style="height: 45vh;">
                    <div class="w-75 bg-danger">
                        <h3>Nether</h3>
                        <div class="input-group mb-3 bg-success ">
                            <span class="input-group-text">X</span>
                            <input type="number" class="form-control" v-model="xover" @keyup="tes">
                        </div>
                        <div class="input-group mb-3 bg-success ">
                            <span class="input-group-text">Y</span>
                            <input type="number" class="form-control" v-model="xove" @keyup="tes">
                        </div>
                        <div class="input-group mb-3 bg-success ">
                            <span class="input-group-text">Z</span>
                            <input type="number" class="form-control" v-model="xovr" @keyup="tes">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>