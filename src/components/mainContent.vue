<template>
    <main>
        <div id="Carrosal" class="relative w-full">
            <div class="relative h-[450px] overflow-hidden">
            <div class="absolute inset-0 md:top-0 -top-10 z-20 flex justify-center text-white">
                <div class="flex flex-col gap-2 text-center justify-center w-full px-5 max-w-screen-xl">
                <h1 class="font-bold md:text-2xl text-lg lg:text-4xl" id="CobaAI">
                    Temukan Tanaman Terbaik untuk Tanah Anda dengan SoilMatched! 🌱
                </h1>
                <h1 class="lg:px-32 text-semibold md:text-xl text-sm lg:text-2xl capitalize">
                    "Dengan menggunakan teknologi Artificial Intelligence (AI), SoilMatch menganalisis Nitrogen, Fosfor, Kalium, Suhu, pH,
                    Kelembapan, dan tingkat curah hujan di lingkungan tanah Anda untuk merekomendasikan tanaman yang paling sesuai"
                </h1>
                </div>
            </div>

            <div v-for="(image, index) in images" :key="index" :class="['duration-700 ease-in-out  w-full h-full', currentIndex === index ? 'block' : 'hidden']">
                <div class="absolute inset-0 bg-black opacity-70 z-10"></div>
                <img :src="`/assets/${image}`" class="CarrosalItem object-cover w-full h-full" :alt="`Image ${index + 1}`" />
            </div>
            </div>
        </div>
        <div class="bg-white md:rounded-t-[2.5rem] rounded-t-[3rem] -top-14 relative md:-top-8 z-20" id="CobaAI">
            <div class="flex justify-center w-full">
                <div class="max-w-screen-xl flex flex-col-reverse md:flex-row gap-5 md:gap-14 pt-4 md:pt-10 px-5 md:px-0">
                    <div class="w-full p-4 md:p-7 border-gray-300 border rounded-lg shadow-md shadow-green-400/50 space-y-5">
                        <h1 class="text-center text-2xl font-semibold">Silakan Inputkan Data</h1>
                        <form @submit.prevent="submitForm">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="number" step="any"  name="floating_nitrogen" v-model="formData.nitrogen" id="floating_nitrogen"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#006534] peer"
                                    placeholder=" " required />
                                <label for="floating_nitrogen"
                                    class="peer-focus:font-medium absolute text-md text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006534] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rasio
                                    kandungan Nitrogen dalam tanah</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="number" step="any"  name="floating_Fosfor" id="floating_Fosfor" v-model="formData.fosfor"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#006534] peer"
                                    placeholder=" " required />
                                <label for="floating_Fosfor"
                                    class="peer-focus:font-medium absolute text-md text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006534] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rasio
                                    kandungan Fosfor dalam tanah</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="number" step="any"  name="floating_Kalium" id="floating_Kalium" v-model="formData.kalium"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#006534] peer"
                                    placeholder=" " required />
                                <label for="floating_Kalium"
                                    class="peer-focus:font-medium absolute text-md text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006534] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rasio
                                    kandungan Kalium dalam tanah</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="number" step="any"  name="floating_Suhu" id="floating_Suhu" v-model="formData.suhu"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#006534] peer"
                                    placeholder=" " required />
                                <label for="floating_Suhu"
                                    class="peer-focus:font-medium absolute text-md text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006534] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Suhu
                                    dengan satuan derajat Celcius</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="number" step="any"  name="floating_Kelembapan" id="floating_Kelembapan" v-model="formData.kelembapan"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#006534] peer"
                                    placeholder=" " required />
                                <label for="floating_Kelembapan"
                                    class="peer-focus:font-medium absolute text-md text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006534] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kelembapan
                                    relatif dalam satuan %</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="number" step="any"  name="floating_pH" id="floating_pH" v-model="formData.pH"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#006534] peer"
                                    placeholder=" " required />
                                <label for="floating_pH"
                                    class="peer-focus:font-medium absolute text-md text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006534] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nilai
                                    pH dalam tanah</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="number" step="any"  name="floating_CurahHujan" id="floating_CurahHujan" v-model="formData.curahHujan"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#006534] peer"
                                    placeholder=" " required />
                                <label for="floating_CurahHujan"
                                    class="peer-focus:font-medium absolute text-md text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#006534] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Curah
                                    Hujan dalam satuan mm</label>
                            </div>
                            <div class="flex justify-start items-center text-xs text-gray-700">
                                <p><span class="font-bold">Note:</span> Gunakan titik jika data berbentuk desimal</p>
                            </div>
                            <div class="flex justify-end">
                                <button type="submit"
                                    class="cursor-pointer hover:bg-[#006534] hover:text-white hover:border-[#006534] text-lg text-black px-3 py-1 font-semibold text-center border border-gray-400 rounded-lg shadow-sm">Periksa</button>
                            </div>
                        </form>
                    </div>
                    <div class="w-full px-5 pl-0 rounded-lg space-y-2 ">
                        <h1 class="text-center text-2xl font-semibold">Contoh Inputan Data</h1>
                        <h1 class="text-xl font-semibold mb-3">Pilih Tanaman</h1>
                        <div class="flex gap-2 flex-wrap text-justify mb-5">
                            <div v-for="tanaman in DataTanaman" :key="tanaman.id" >
                                <ButtonLabel :title="tanaman.name"/>
                            </div>
                        </div>
                        <div v-for="tanaman in DataTanaman" :key="tanaman.id">
                            <CardContoh :data="tanaman" @dataPrediction="handleDataPrediction" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="PopupAnalisis"
            tabIndex="-1"
            className="hidden fixed inset-0 z-50 flex justify-center items-center bg-black/40 px-6 md:px-0 overflow-y-auto">
            <div className="relative w-full max-w-sm ">
            <div className="bg-white rounded-2xl shadow-lg  ">
                <div className="flex flex-col justify-center items-center relative pb-10 space-y-3">
                    <div className="w-full h-full flex justify-center items-center relative bg-black/10 rounded-t-2xl">
                        <div ref="lottieContainerSoil" class="lottie-animation w-96" ></div>
                        <div className="absolute h-full flex justify-center items-center md:top-32 top-28 left-14 md:left-20">
                            <div className="w-full h-full">
                                <div ref="lottieContainerSearch" class="lottie-animation" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div
            id="HasilAnalisis"
            tabindex="-1"
            class="hidden fixed inset-0 z-50 flex justify-center items-center bg-black/40 px-4 md:px-0 overflow-y-auto"
        >
            <div class="relative w-full max-w-6xl">
            <div class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                <!-- Judul -->
                <h1 class="text-center font-bold text-lg md:text-2xl uppercase md:px-60">
                Saran Tanaman yang cocok untuk ditanami pada Tanah anda adalah
                </h1>

                <!-- Flex Wrap Result -->
                <div class="flex w-full justify-center items-center flex-col gap-4">
                    <!-- Jika prediction tidak null -->
                    <div v-if="prediction !== null && prediction !== undefined">
                        <div v-for="(Prob, index) in DataProbabilitas"
                            :key="index"
                            v-show="index == prediction"
                            class="border rounded-lg text-xl text-white font-semibold bg-[#006534] px-10 py-2 shadow text-center"
                        >
                            <div class="capitalize">
                                {{ labelList[index] ?? '-' }}
                            </div>
                            <div>
                                {{ Prob ?? '-' }}
                            </div>
                        </div>
                    </div>

                    <!-- Jika prediction null -->
                    <div v-else  class="border rounded-lg text-xl text-white font-semibold bg-[#006534] px-10 py-2 shadow text-center">
                        <div class="capitalize">
                            Tidak Ada Yang Cocok
                        </div>
                        <div>
                            -
                        </div>
                    </div>

                    <h1 class="text-center font-bold text-lg md:text-2xl uppercase">
                        Saran Jenis Tanaman Lainnya Sebagai berikut:
                    </h1>
                </div>
                <div class="flex flex-wrap justify-center gap-3">

                    <template v-if="probabilitasHigh !== '0,0%' && probabilitasHigh !== '0,00%'">
                        <div
                            v-for="(Prob, index) in DataProbabilitas"
                            :key="'normal-' + index"
                            v-show="Prob !== probabilitasHigh"
                            :class="[
                                'border rounded-lg px-4 py-2 border-black shadow text-center min-w-[120px]',
                                parseFloat(Prob.replace(',', '.')) > 0
                                    ? 'bg-[#006534]/60 text-white'
                                    : 'bg-gray-50 text-black'
                            ]"
                        >
                            <div class="font-semibold capitalize text-base">
                                {{ labelList[index] ?? '-' }}
                            </div>
                            <div class="text-lg font-bold">
                                {{ Prob ?? '-' }}
                            </div>
                        </div>
                    </template>

                    <template v-else>
                        <div
                            v-for="(Prob, index) in DataProbabilitas"
                            :key="'zero-' + index"
                            :class="[
                                'border rounded-lg px-4 py-2 border-black shadow text-center min-w-[120px]',
                                parseFloat(Prob.replace(',', '.')) > 0
                                    ? 'bg-[#006534]/60 text-white'
                                    : 'bg-gray-50 text-black'
                            ]"
                        >
                            <div class="font-semibold capitalize text-base">
                                {{ labelList[index] ?? '-' }}
                            </div>
                            <div class="text-lg font-bold">
                                {{ Prob ?? '-' }}
                            </div>
                        </div>
                    </template>

                </div>


                <!-- Tombol Tutup -->
                <div class="flex justify-center">
                <button
                    type="button"
                    @click="closePopUpHasil"
                    class="cursor-pointer w-32 text-white bg-red-600 hover:bg-red-500 text-lg px-4 py-2 rounded-lg shadow-md"
                >
                    Tutup
                </button>
                </div>
            </div>
            </div>
        </div>

    </main>
</template>

<script>
import axios from "axios";
import CardContoh from './CardContoh.vue';
import ButtonLabel from './ButtonLabel.vue';
import { DataTanaman } from '../data/data';
import lottie from 'lottie-web';
import { toast } from "vue3-toastify";

export default {
    mounted() {
        lottie.loadAnimation({
            container: this.$refs.lottieContainerSearch,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: "/assets/search.json"
        });
        lottie.loadAnimation({
            container: this.$refs.lottieContainerSoil,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: "/assets/soilLoad.json"
        });

    },
    components: {
        CardContoh,
        ButtonLabel
    },
    data() {
        return {
            images: ['image1.png', 'image2.png', 'image3.png','image4.png','image5.png'],
            currentIndex: 0,
            DataTanaman,
            prediction: null,
            probabilitasHigh: null,
            DataProbabilitas: [],
            labelList: [
                'apel', 'pisang', 'kacang hitam', 'kacang arab', 'kelapa', 'kopi',
                'kapas', 'anggur', 'Jerami', 'kacang merah', 'lentil', 'jagung',
                'mangga', 'kacang ngengat', 'kacang hijau', 'melon', 'jeruk', 'pepaya',
                'kacang gude', 'delima', 'padi', 'semangka'
            ],
            formData: {
                nitrogen: "",
                fosfor: "",
                kalium: "",
                suhu: "",
                pH: "",
                kelembapan: "",
                curahHujan: "",
            },
        };
    },
    methods: {
        handleDataPrediction(data) {
            this.DataProbabilitas = data.classProbas;
            this.prediction = data.prediction;
            this.probabilitasHigh = data.probabilitasHigh;
        },
        closePopUpHasil() {
            const HasilAnalisis = document.getElementById('HasilAnalisis');
            HasilAnalisis.classList.add('hidden');
        },
        async submitForm() {
            try {
                const response = await axios.post(import.meta.env.VITE_BASE_URL + "predict", this.formData, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": import.meta.env.VITE_TOKEN
                    },
                });
                const PopupAnalisis = document.getElementById('PopupAnalisis');
                const HasilAnalisis = document.getElementById('HasilAnalisis');
                PopupAnalisis.classList.remove('hidden');
                console.log(response.data);
                if (response.data) {
                    toast("Model Sedang Membaca Data", {
                        position: toast.POSITION.TOP_RIGHT,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                    setTimeout(() => {
                        toast.clearAll();
                        this.DataProbabilitas = response.data.classProbas;
                        this.probabilitasHigh = response.data.probabilitasHigh;
                        this.prediction = response.data.prediction;
                        PopupAnalisis.classList.add('hidden');
                        HasilAnalisis.classList.remove('hidden');
                    }, 3000);
                } else {
                    toast("Tidak Ada Data yang diterima", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'foo-bar',
                    pauseOnHover: false,
                });
                }
            } catch (error) {
                toast(error.response?.data?.error || error, {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'foo-bar',
                    pauseOnHover: false,
                });
            }
        }
    },
    beforeDestroy() {
        lottie.destroy();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("Carrosal");
    const items = carousel.querySelectorAll(".CarrosalItem");
    let currentIndex = 0;
    let interval;

    const updateActiveSlide = (newIndex) => {
        items[currentIndex].parentNode.classList.add("hidden");
        items[currentIndex].parentNode.classList.remove("block");

        items[newIndex].parentNode.classList.remove("hidden");
        items[newIndex].parentNode.classList.add("block");

        currentIndex = newIndex;
    };

    const showNextSlide = () => {
        const nextIndex = (currentIndex + 1) % items.length;
        updateActiveSlide(nextIndex);
    };

    const startAutoSlide = () => {
        interval = setInterval(showNextSlide, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(interval);
    };

    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
});
</script>