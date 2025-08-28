<template>
    <div class="TableContohInput hidden relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-700 border border-gray-300">
            <caption class="p-3 text-lg font-semibold text-left text-gray-900 bg-white">
                {{ data.name }}
                <p class="mt-1 text-sm font-normal text-gray-500">Beberapa contoh inputan data tanah yang cocok ditanami {{ data.name }}</p>
                <button type="button" class="ButtonCloseInfo absolute right-4 top-4 cursor-pointer text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-300">
                <tr>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">Nitrogen</th>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">Fosfor</th>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">Kalium</th>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">Suhu</th>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">Kelembapan</th>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">pH</th>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">Curah Hujan</th>
                    <th scope="col" class="px-2 py-1.5 border border-gray-300">Coba</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tanah in data.tanah" :key="tanah.id" class="bg-white border-b border-gray-300">
                    <td class="px-2 py-1 border border-gray-300">{{ tanah.nitrogen }}</td>
                    <td class="px-2 py-1 border border-gray-300">{{ tanah.fosfor }}</td>
                    <td class="px-2 py-1 border border-gray-300">{{ tanah.kalium }}</td>
                    <td class="px-2 py-1 border border-gray-300">{{ tanah.suhu }}</td>
                    <td class="px-2 py-1 border border-gray-300">{{ tanah.kelembapan }}</td>
                    <td class="px-2 py-1 border border-gray-300">{{ tanah.ph }}</td>
                    <td class="px-2 py-1 border border-gray-300">{{ tanah.hujan }}</td>
                    <td class="px-4 py-1.5 border border-gray-300">
                        <div class="flex justify-center items-center">
                            <form @submit.prevent="submitFormCoba(tanah)">
                                <button class="bg-[#006534] px-1.5 pt-0.5 rounded-lg border border-[#006534] hover:bg-[#006534]/70 cursor-pointer text-base text-white"><i class="ri-send-plane-fill"></i></button>
                            </form>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
    name: 'CardContoh',
    props: {
        data: {
            type: Object,
        },
    },
    data() {
        return {
            formDataCoba: {
                nitrogen: "",
                fosfor: "",
                kalium: "",
                suhu: "",
                kelembapan: "",
                pH: "",
                curahHujan: "",
            },
        };
    },
    methods: {
        async submitFormCoba(tanah) {
            this.formDataCoba.nitrogen = tanah.nitrogen;
            this.formDataCoba.fosfor = tanah.fosfor;
            this.formDataCoba.kalium = tanah.kalium;
            this.formDataCoba.suhu = tanah.suhu;
            this.formDataCoba.kelembapan = tanah.kelembapan;
            this.formDataCoba.pH = tanah.ph;
            this.formDataCoba.curahHujan = tanah.hujan;
            try {
                const response = await axios.post(import.meta.env.VITE_BASE_URL + "predict", this.formDataCoba, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": import.meta.env.VITE_TOKEN
                    },
                });
                const PopupAnalisis = document.getElementById('PopupAnalisis');
                const HasilAnalisis = document.getElementById('HasilAnalisis');
                PopupAnalisis.classList.remove('hidden');
                if (response.data) {
                    toast("Model Sedang Membaca Data", {
                        position: toast.POSITION.TOP_RIGHT,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                    setTimeout(() => {
                        toast.clearAll();
                        this.$emit('dataPrediction', response.data)
                        PopupAnalisis.classList.add('hidden');
                        HasilAnalisis.classList.remove('hidden');
                    }, 2000);
                }
                console.log(response.data);
            } catch (error) {
                toast(error.response?.data?.error || error, {
                    position: toast.POSITION.TOP_RIGHT,
                    className: 'foo-bar',
                    pauseOnHover: false,
                });
            }
        }
    }
}
</script>
