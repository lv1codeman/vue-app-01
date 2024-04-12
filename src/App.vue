<template>
  <div id="outer" class="my-20 flex items-center justify-center">
    <!-- 外部 div，背景顏色為灰色，高度為 64px，居中顯示 -->
    <div id="inner" class="w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 text-center">
      <!-- 內部 div，背景顏色為紅色，寬度佔父元素的一半 -->
      <form class="w-full mx-auto bg-white p-8 rounded form-shadow">
        <h2 class="text-2xl font-semibold mb-6">登記資料</h2>
        <div
          class="mb-4 flex flex-col md:flex-row md:items-center"
          v-for="(value, key, index) in dataFields"
          :key="key"
        >
          <label
            class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
            :for="key"
          >
            <span class="mr-1">{{ value }}</span>
          </label>
          <input
            class="shadow appearance-none border-2 border-indigo-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
            :id="key"
            type="text"
            :placeholder="'請輸入' + value"
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
      // dataFields: [
      //   // { id: "id", field: "ID" },
      //   { id: "college", field: "學院" },
      //   { id: "collegeFullName", field: "學院全名" },
      //   { id: "dept", field: "系所" },
      //   { id: "deptFullName", field: "系所全名" },
      //   { id: "agent", field: "系辦助理" },
      //   { id: "agentExt", field: "系辦助理分機" },
      //   { id: "agentEmail", field: "系辦助理email" },
      //   { id: "curriAgent", field: "課務組承辦人" },
      //   { id: "curriAgentExt", field: "課務組承辦人分機" },
      //   { id: "curriAgentEmail", field: "課務組承辦人email" },
      // ],
      dataFields: {
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
      },
    };
  },
  computed: {},
  methods: {
    btnSubmitClick() {
      alert("submit button clicked.");
    },
  },
};
</script>
