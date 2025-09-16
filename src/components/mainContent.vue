<template>
  <main class="bg-white">
    <div id="Carrosal" class="relative w-full">
      <div class="relative md:h-[520px] h-[500px] overflow-hidden">
        <div
          class="absolute inset-0 md:-top-24 -top-32 z-20 flex justify-center text-white"
        >
          <div
            class="flex flex-col gap-2 text-center justify-center w-full px-5 max-w-screen-xl"
          >
            <h1 class="font-bold md:text-xl text-2xl lg:text-4xl" id="CobaAI">
              Where AI Meets the Sun ☀️⚡
            </h1>
            <h1
              class="md:px-14 text-semibold md:text-xl text-xs lg:text-xl capitalize"
            >
              "Powered by the Dual-Gate Multi-Head Temporal Fusion Transformer
              (DGMH-TFT), this system delivers highly accurate 24-hour ahead
              solar power predictions. By leveraging historical PV output, past
              weather records, and meteorological forecasts, it provides
              actionable insights to maximize renewable energy efficiency and
              grid stability."
            </h1>
          </div>
        </div>

        <div
          v-for="(image, index) in images"
          :key="index"
          :class="[
            'duration-700 ease-in-out  w-full h-full',
            currentIndex === index ? 'block' : 'hidden',
          ]"
        >
          <div class="absolute inset-0 bg-black opacity-70 z-10"></div>
          <img
            :src="`/assets/${image}`"
            class="CarrosalItem object-cover w-full h-full"
            :alt="`Image ${index + 1}`"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-white md:rounded-t-[2.5rem] rounded-t-[2rem] -top-14 relative md:-top-8 z-20"
      id="CobaAI"
    >
      <div class="flex justify-center w-full md:px-0 px-8">
        <div class="max-w-screen-md w-full relative -top-28 md:-top-20">
          <form
            @submit.prevent="submitForm"
            enctype="multipart/form-data"
            class="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-md w-full mx-auto"
          >
            <div class="flex flex-col gap-2">
              <label for="file" class="text-sm font-medium text-gray-700"
                >Upload File (CSV Only)</label
              >
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
      <div
        id="PopHasil"
        aria-hidden="true"
        class="hidden items-center justify-center relative -top-16 md:-top-12"
      >
        <div class="max-w-screen-xl flex flex-col gap-5 w-full px-5">
          <h1 class="font-bold text-xl md:text-3xl">Hasil Interpretation</h1>
          <div class="w-full">
            <img :src="ImageInter" alt="ImageInter" srcset="" />
          </div>
          <h1 class="font-bold text-xl md:text-3xl">Hasil Prediksi</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <img
              v-for="(item, index) in ImagePred"
              :key="index"
              :src="item"
              alt=""
              srcset=""
            />
          </div>
          <h1 class="font-bold text-xl md:text-3xl">Hasil Prediksi Tensor</h1>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="relative w-full min-w-[500px]">
              <table class="w-full text-sm md:text-lg text-left rtl:text-right">
                <thead class="text-xs uppercase bg-gray-700 text-white">
                  <tr>
                    <th class="md:px-4 md:py-2 px-2 py-1">horizon</th>
                    <th class="md:px-4 md:py-2 px-2 py-1">prediction</th>
                    <th class="md:px-4 md:py-2 px-2 py-1">Tanggal</th>
                    <th class="md:px-4 md:py-2 px-2 py-1">Jam</th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr
                    v-for="(data, index) in rows"
                    :key="index"
                    class="bg-white border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td
                      class="md:px-4 md:py-2 px-2 py-1 font-medium text-gray-900 whitespace-nowrap"
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

                  <tr v-if="rows?.length === 0">
                    <td
                      colspan="6"
                      class="md:px-4 md:py-2 px-2 py-1 text-center text-gray-900 md:text-base text-sm"
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
    <div
      id="PopupAnalisis"
      tabIndex="-1"
      className="hidden fixed inset-0 z-50 justify-center items-center bg-black/50 px-6 md:px-0 overflow-y-auto"
    >
      <div className="relative w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col justify-center items-center relative ">
            <div
              className="w-full h-full flex justify-center items-center relative bg-black/20 rounded-2xl pl-2"
            >
              <div
                ref="lottieContainerSoil"
                className="lottie-animation w-full md:w-96"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";
import lottie from "lottie-web";
import { toast } from "vue3-toastify";

const images = ref([
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
]);
const currentIndex = ref(0);
const ImagePred = ref([]);
const ImageInter = ref("");
const rows = ref([]);

const fileInput = ref(null);
const lottieContainerSoil = ref(null);

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainerSoil.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/Loading.json",
  });

  // Carousel
  const carousel = document.getElementById("Carrosal");
  const items = carousel.querySelectorAll(".CarrosalItem");
  let index = 0;
  let interval;

  const updateActiveSlide = (newIndex) => {
    items[index].parentNode.classList.add("hidden");
    items[index].parentNode.classList.remove("block");

    items[newIndex].parentNode.classList.remove("hidden");
    items[newIndex].parentNode.classList.add("block");

    index = newIndex;
  };

  const showNextSlide = () => {
    const nextIndex = (index + 1) % items.length;
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

onBeforeUnmount(() => {
  lottie.destroy();
});

// methods
const submitForm = async () => {
  const PopupAnalisis = document.getElementById("PopupAnalisis");
  const PopHasil = document.getElementById("PopHasil");

  PopupAnalisis.classList.add("flex");
  PopupAnalisis.classList.remove("hidden");

  try {
    const formData = new FormData();
    formData.append("file", fileInput.value.files[0]);

    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + "predict",
      formData
    );
    const data = response.data;

    toast.success(data.message, {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
      pauseOnHover: false,
    });

    ImagePred.value = data.prediction_files.map(
      (file) => `${import.meta.env.VITE_BASE_URL}FileUpload/${file}`
    );
    ImageInter.value = `${import.meta.env.VITE_BASE_URL}FileUpload/${
      data.interpretation_file
    }`;
    rows.value = data.rows;

    PopHasil.classList.add("flex");
    PopHasil.classList.remove("hidden");
    PopHasil.setAttribute("aria-hidden", "false");
  } catch (error) {
    console.log("error:", error);
    toast.error(error.message || error, {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
      pauseOnHover: false,
    });
  } finally {
    PopupAnalisis.classList.remove("flex");
    PopupAnalisis.classList.add("hidden");
  }
};
</script>
