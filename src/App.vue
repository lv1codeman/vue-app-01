<template>
  <div id="outer" class="my-20 flex items-center justify-center">
    <!-- 外部 div，背景顏色為灰色，高度為 64px，居中顯示 -->
    <div id="inner" class="w-11/12 sm:w-full md:w-3/5 lg:w-2/5 text-center">
      <!-- 內部 div，背景顏色為紅色，寬度佔父元素的一半 -->
      <form class="w-full mx-auto bg-white p-8 rounded form-shadow">
        <h2 class="text-2xl font-semibold mb-6">登記資料</h2>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="id"
          >
            <span class="mr-1">{{ id }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="id"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="college"
          >
            <span class="mr-1">{{ college }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="college"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="collegeFullName"
          >
            <span class="mr-1">{{ collegeFullName }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="collegeFullName"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="dept"
          >
            <span class="mr-1">{{ dept }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="dept"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="deptFullName"
          >
            <span class="mr-1">{{ deptFullName }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="deptFullName"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="agent"
          >
            <span class="mr-1">{{ agent }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="agent"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="agentExt"
          >
            <span class="mr-1">{{ agentExt }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="agentExt"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="agentEmail"
          >
            <span class="mr-1">{{ agentEmail }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="agentEmail"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="curriAgent"
          >
            <span class="mr-1">{{ curriAgent }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="curriAgent"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="curriAgentExt"
          >
            <span class="mr-1">{{ curriAgentExt }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="curriAgentExt"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="agentEmail"
          >
            <span class="mr-1">{{ agentEmail }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="agentEmail"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>
        <div class="mb-4 flex flex-col md:flex-row md:items-center">
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            for="curriAgentEmail"
          >
            <span class="mr-1">{{ curriAgentEmail }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            id="curriAgentEmail"
            type="text"
            placeholder="請輸入{{}}"
          />
        </div>

        <!-- 以下按鈕 -->
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="btnSubmitClick"
          >
            登記
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "ID",
      college: "學院",
      collegeFullName: "學院全名",
      dept: "系所",
      deptFullName: "系所全名",
      agent: "系辦助理",
      agentExt: "系辦助理分機",
      agentEmail: "系辦助理email",
      curriAgent: "課務組承辦人",
      curriAgentExt: "課務組承辦人分機",
      curriAgentEmail: "課務組承辦人email",
    };
  },
  methods: {
    btnSubmitClick() {
      alert("submit button clicked.");
    },
  },
};
</script>
