<template>
  <div id="outer" class="my-20 flex items-center justify-center">
    <!-- 外部 div，背景顏色為灰色，高度為 64px，居中顯示 -->
    <div id="inner" class="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/3 text-center">
      <!-- 內部 div，背景顏色為紅色，寬度佔父元素的一半 -->

      <form class="w-full mx-auto bg-white p-8 rounded form-shadow">
        <h2 class="text-2xl font-semibold mb-6">登記資料</h2>
        <div
          class="mb-4 flex flex-col md:flex-row md:items-center"
          v-for="(value, key, index) in dataFields"
          :key="index"
        >
          <template v-if="key === 'curriAgent'">
            <!-- 顯示課務組承辦人下拉選單 -->
            <label
              class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
              :for="key"
            >
              <span class="mr-1">{{ value }}</span>
            </label>
            <select
              class="shadow border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
              :id="key"
              v-model="selectedOption"
              @change="curriAgentOnChange($event)"
            >
              <option
                v-for="(option, index) in curriAgentOptions"
                :key="index"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </template>
          <template v-else>
            <label
              class="text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left"
              :for="key"
            >
              <span class="mr-1">{{ value }}</span>
            </label>

            <input
              class="shadow appearance-none border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
              :id="key"
              type="text"
              :placeholder="'請輸入' + value"
              ref="inputs"
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            ></div>
          </template>
        </div>

        <!-- 以下按鈕 -->
        <div class="flex items-center justify-around">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="btnSubmitClick"
          >
            登記
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="show"
          >
            show in console
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="clearInputs"
          >
            清除
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

// import users from "./assets/js/getAgents";
import { gogo } from "./assets/js/getAgents";
import { addAgent } from "./assets/js/setAgent";

import firebaseConfig from "./assets/js/getFirebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default {
  created() {},
  mounted() {
    document.getElementById("curriAgentExt").placeholder = "請選擇課務組承辦人";
    document.getElementById("curriAgentEmail").placeholder =
      "請選擇課務組承辦人";
    document.getElementById("curriAgentExt").disabled = true;
    document.getElementById("curriAgentEmail").disabled = true;
  },
  data() {
    return {
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
      selectedOption: "", // Initially empty
      curriAgentOptions: [
        {
          name: "鍾博凱",
          value: 0,
          disabled: false,
          ext: "#5626",
          email: "s26153@cc.ncue.edu.tw",
        },
        {
          name: "黃思嘉",
          value: 1,
          disabled: false,
          ext: "#5622",
          email: "loria@cc.ncue.edu.tw",
        },
        {
          name: "黃嘉玲",
          value: 2,
          disabled: false,
          ext: "#5623",
          email: "chialing@cc.ncue.edu.tw",
        },
        {
          name: "范豈瑗",
          value: 3,
          disabled: false,
          ext: "#5624",
          email: "ang3188@cc.ncue.edu.tw",
        },
      ],
    };
  },
  computed: {},
  methods: {
    curriAgentOnChange() {
      document.getElementById("curriAgentExt").value =
        this.curriAgentOptions[this.selectedOption].ext;
      document.getElementById("curriAgentEmail").value =
        this.curriAgentOptions[this.selectedOption].email;
    },
    async show() {
      gogo(db)
        .then((users) => {
          console.log("取得使用者資料成功：", users);
          console.log("取得使用者資料成功：", users.length);
        })
        .catch((error) => {
          console.error("取得使用者資料失敗：", error);
        });
    },
    getInputs() {
      const inputdata = [];
      // console.log(this.$refs.inputs);
      // console.log(typeof this.$refs.inputs[0].value);
      for (let i = 0; i < this.$refs.inputs.length; i++) {
        // console.log(this.$refs.inputs[i]);
        console.log(this.$refs.inputs[i].value);
        inputdata.push(this.$refs.inputs[i].value);
      }

      return inputdata;
    },
    clearInputs() {
      for (let i = 0; i < this.$refs.inputs.length; i++) {
        this.$refs.inputs[i].value = "";
      }
      this.selectedOption = "";
    },

    btnSubmitClick() {
      const res = this.getInputs();
      console.log("使用者輸入: " + res);
      const obj = {
        college: res[0],
        collegeFullName: res[1],
        dept: res[2],
        deptFullName: res[3],
        agent: res[4],
        agentExt: "#" + res[5],
        agentEmail: res[6],
        curriAgent: this.curriAgentOptions[this.selectedOption].name,
        curriAgentExt: res[7],
        curriAgentEmail: res[8],
      };
      console.log("上傳前的資料：", obj);
      Swal.fire({
        title: "確認上傳資料",
        text: res + "," + this.curriAgentOptions[this.selectedOption].name,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "送出",
        cancelButtonText: "返回編輯",
        denyButtonText: `取消並清除`,
      }).then((result) => {
        if (result.isConfirmed) {
          // 取得目前資料庫的user數，將其+1作為id給新的user
          gogo(db)
            .then((users) => {
              console.log("取得使用者資料成功：", users);
              console.log("取得使用者資料成功：", users.length.toString());
              addAgent(obj, (users.length + 1).toString());
            })
            .catch((error) => {
              console.error("取得使用者資料失敗：", error);
            });

          Swal.fire("資料已送出", "", "success");
        } else if (result.isDenied) {
          Swal.fire("欄位已重置", "", "info");
          this.clearInputs();
        }
      });
    },
  },
};
</script>
