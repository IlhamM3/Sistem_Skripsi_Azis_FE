<template>
  <!-- <section class="from-blue-900 to-blue-400 min-h-screen bg-gradient-to-b"> -->
  <section class="bg-gradient-to-b from-[#020618] via-[#162456] to-[#51a2ff] min-h-screen">
  <!-- <section class="bg-blue-900 min-h-screen"> -->
    <!-- === SECTION HERO === -->

    <!-- === CAROUSEL === -->
    <div  class="absolute inset-0 z-0 opacity-10 overflow-hidden rounded-b-[30px] pointer-events-none">
      <div class="w-full h-full relative">
        <img
          v-for="(img, i) in images"
          :key="i"
          :src="`/assets/${img}`"
          class="CarrosalItem absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          :class="{ 'opacity-100': i === currentIndex, 'opacity-0': i !== currentIndex }"
        />
      </div>
    </div>

    <div
      class="relative z-10 flex flex-col items-center justify-center pb-52 pt-72 text-white"
    >
      <h1 class="text-6xl font-extrabold">
        AI-Powered <span class="text-amber-600">Solar Forecasting</span>
      </h1>
      <p class="text-center text-xl pt-5">
        Optimalkan performa energi surya dengan prediksi akurat berbasis AI
        dengan membuat<br />sistem tenaga surya makin efisien dan handal!
      </p>
      <a
        href="#CobaAI"
        class="bg-amber-600 px-5 py-3 rounded-xl mt-10 shadow-xl hover:bg-amber-900 transition-all"
        >Coba Sekarang</a
      >
    </div>

    <!-- === SECTION PENJELASAN MODEL + PRODUK SOLUSI === -->
    <div class="w-full flex justify-center my-24 px-6">
      <div
        class="max-w-screen-xl flex flex-col md:flex-row items-stretch gap-10"
      >
        <!-- Bagian Model DGMH-TFT -->
        <div
          class="flex-1 bg-gradient-to-br from-white/90 to-amber-50 border border-gray-200 rounded-3xl shadow-2xl p-8 flex flex-col justify-start hover:shadow-blue-200/60 transition-all duration-500 pt-16"
        >
          <h1
            class="font-extrabold text-3xl md:text-4xl mb-10 text-center text-gray-900"
          >
            🧠 Tentang Model DGMH-TFT
          </h1>

          <p class="text-gray-700 text-lg leading-relaxed text-justify mb-6">
            Sistem prediksi ini dibangun menggunakan
            <strong class="text-blue-700">
              Dual-Gate Multi-Head Temporal Fusion Transformer (DGMH-TFT) </strong
            >, sebuah arsitektur
            <strong class="text-emerald-700">deep learning</strong> berbasis
            <code
              class="px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-800"
            >
              PyTorch
            </code>
            yang mampu memproses data deret waktu seperti keluaran panel surya
            dan data cuaca untuk menghasilkan prediksi daya 24 jam ke depan.
          </p>

          <ul class="list-none space-y-3 mb-6">
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1">✔</span>
              <p>
                <strong>Input:</strong> Data historis PV output, rekam cuaca
                masa lalu, dan prakiraan meteorologi.
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1">✔</span>
              <p>
                <strong>Evaluasi:</strong> Menggunakan metrik
                <code class="bg-gray-100 px-2 py-1 rounded-md text-sm">R²</code>
                dan
                <code class="bg-gray-100 px-2 py-1 rounded-md text-sm"
                  >MSE</code
                >
                untuk menilai performa model.
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1">✔</span>
              <p>
                <strong>Framework:</strong> Backend <code>Flask</code> dengan
                <code>scikit-learn</code> dan <code>pandas</code>.
              </p>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1">✔</span>
              <p>
                <strong>Interpretabilitas:</strong> Fungsi
                <code class="bg-gray-100 px-2 py-1 rounded-md text-sm"
                  >interpret_output()</code
                >
                menghasilkan visualisasi fitur dominan dalam prediksi.
              </p>
            </li>
          </ul>

          <p class="text-gray-700 text-lg leading-relaxed text-justify">
            Saat file CSV diunggah, sistem memproses data lewat
            <code class="bg-gray-100 px-2 py-1 rounded-md text-sm"
              >clean_data()</code
            >
            lalu model DGMH-TFT menghasilkan grafik prediksi & interpretasi.
          </p>
        </div>

        <!-- Bagian Solusi AI -->
        <div
          class="flex-1 bg-gradient-to-br from-white/90 to-amber-50 border border-gray-200 rounded-3xl shadow-2xl p-8 flex flex-col justify-start hover:shadow-blue-200/60 transition-all duration-500 pt-16"
        >
          <h2
            class="text-3xl md:text-4xl text-gray-900 text-center font-extrabold mb-10"
          >
            ☀️ Solusi <span class="text-amber-600">AI Solar Forecasting</span>
          </h2>

          <p class="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
            Dirancang untuk membantu
            <strong>operator energi surya</strong> dalam melakukan perencanaan
            dan pengelolaan daya secara efisien dengan kecerdasan buatan
            <strong>DGMH-TFT</strong>. Dengan prediksi hingga
            <strong>24 jam ke depan</strong>, sistem ini mengoptimalkan
            distribusi energi dan menekan kerugian produksi.
          </p>

          <ul class="space-y-3 text-gray-700 mb-6">
            <li class="flex gap-3 items-start">
              <span class="text-amber-600 mt-1">⚡</span>
              <p>
                <strong>Prediksi Daya Real-Time:</strong> Pembaruan tiap jam
                memantau performa panel secara dinamis.
              </p>
            </li>
            <li class="flex gap-3 items-start">
              <span class="text-amber-600 mt-1">📊</span>
              <p>
                <strong>Analisis Tren Energi:</strong> Menunjukkan pengaruh
                cuaca terhadap produksi energi.
              </p>
            </li>
            <li class="flex gap-3 items-start">
              <span class="text-amber-600 mt-1">🔍</span>
              <p>
                <strong>Integrasi API:</strong> Dapat terhubung ke dashboard
                monitoring & IoT.
              </p>
            </li>
            <li class="flex gap-3 items-start">
              <span class="text-amber-600 mt-1">🧭</span>
              <p>
                <strong>Decision Support:</strong> Membantu menentukan waktu
                maintenance & optimasi.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- === FORM UPLOAD === -->
    <div class="" id="CobaAI">
      <div class="flex justify-center py-20 w-full md:px-0 px-8">
        <div class="max-w-screen-md w-full relative">
          <form
            @submit.prevent="submitForm"
            enctype="multipart/form-data"
            class="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-md w-full mx-auto"
          >
            <div class="flex flex-col gap-2">
              <label for="file" class="text-sm font-medium text-gray-700">
                Upload File (CSV Only)
              </label>
              <input
                ref="fileInput"
                type="file"
                name="file"
                id="file"
                required
                accept=".csv"
                class="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                class="cursor-pointer px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold border border-blue-600 shadow hover:bg-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Detection
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- === HASIL PREDIKSI === -->
      <div
        id="PopHasil"
        aria-hidden="true"
        class="hidden items-center justify-center relative -top-16 md:-top-12"
      >
        <div class="max-w-screen-xl flex flex-col gap-5 w-full px-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="w-full flex flex-col gap-2">
              <h1 class="font-bold text-xl md:text-3xl">Hasil Prediksi</h1>
              <img :src="ImagePred" alt="Prediction Image" />
            </div>
            <div class="w-full flex flex-col gap-2">
              <h1 class="font-bold text-xl md:text-3xl">Hasil Interpretasi</h1>
              <img :src="ImageInter" alt="Interpretation Image" />
            </div>
          </div>
          <h1 class="font-bold text-xl md:text-3xl">Hasil Prediksi Horizon</h1>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="relative w-full min-w-[500px]">
              <table class="w-full text-sm md:text-lg text-left rtl:text-right">
                <thead class="text-xs uppercase bg-gray-700 text-white">
                  <tr>
                    <th class="md:px-4 md:py-2 px-2 py-1">Horizon</th>
                    <th class="md:px-4 md:py-2 px-2 py-1">Prediction</th>
                    <th class="md:px-4 md:py-2 px-2 py-1">Tanggal</th>
                    <th class="md:px-4 md:py-2 px-2 py-1">Jam</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(data, index) in rows"
                    :key="index"
                    class="bg-white border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td
                      class="md:px-4 md:py-2 px-2 py-1 font-medium text-gray-900"
                    >
                      {{ data.horizon }}
                    </td>
                    <td class="md:px-4 md:py-2 px-2 py-1">
                      {{ data.prediction }}
                    </td>
                    <td class="md:px-4 md:py-2 px-2 py-1">
                      {{ data.timestamp.split(" ")[0] }}
                    </td>
                    <td class="md:px-4 md:py-2 px-2 py-1">
                      {{ data.timestamp.split(" ")[1].split("+")[0] }}
                    </td>
                  </tr>
                  <tr v-if="rows.length === 0">
                    <td
                      colspan="4"
                      class="md:px-4 md:py-2 px-2 py-1 text-center text-gray-900"
                    >
                      Data tidak tersedia
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- === POPUP LOADING === -->
    <div
      id="PopupAnalisis"
      tabindex="-1"
      class="hidden fixed inset-0 z-50 justify-center items-center bg-black/50 px-6 md:px-0 overflow-y-auto"
    >
      <div class="relative w-full max-w-sm">
        <div class="bg-white rounded-2xl shadow-lg p-4">
          <div class="flex flex-col justify-center items-center">
            <div
              class="w-full flex justify-center items-center bg-black/20 rounded-2xl"
            >
              <div
                ref="lottieContainerSoil"
                class="lottie-animation w-full md:w-96"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";
import lottie from "lottie-web";
import { toast } from "vue3-toastify";

const images = ref([
  "image4.png",
  "image1.png",
  "image2.png",
  "image3.png",
  "image5.png",
]);
const currentIndex = ref(0);
const ImagePred = ref("");
const ImageInter = ref("");
const rows = ref([]);
const fileInput = ref(null);
const lottieContainerSoil = ref(null);

onMounted(() => {
  // Lottie Loading
  lottie.loadAnimation({
    container: lottieContainerSoil.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/Loading.json",
  });

  // Carousel reactive
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 6000); // Ganti interval sesuai selera

});

onBeforeUnmount(() => {
  lottie.destroy();
});

// === Submit CSV ===
const submitForm = async () => {
  const PopupAnalisis = document.getElementById("PopupAnalisis");
  const PopHasil = document.getElementById("PopHasil");

  PopupAnalisis.classList.remove("hidden");
  PopupAnalisis.classList.add("flex");

  try {
    const formData = new FormData();
    formData.append("file", fileInput.value.files[0]);

    const { data } = await axios.post(
      import.meta.env.VITE_BASE_URL + "predict",
      formData
    );

    toast.success(data.message || "Prediksi berhasil!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    ImagePred.value = `${import.meta.env.VITE_BASE_URL}FileUpload/${
      data.prediction_files
    }`;
    ImageInter.value = `${import.meta.env.VITE_BASE_URL}FileUpload/${
      data.interpretation_file
    }`;
    rows.value = data.rows;

    PopHasil.classList.remove("hidden");
    PopHasil.classList.add("flex");
  } catch (error) {
    toast.error(error.message || "Gagal melakukan prediksi.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } finally {
    PopupAnalisis.classList.add("hidden");
    PopupAnalisis.classList.remove("flex");
  }
};
</script>
