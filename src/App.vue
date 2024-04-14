<template>
  <div id="outer" class="my-20 flex items-center justify-center">
    <div id="inner" class="w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/3 text-center">
      <form class="w-full mx-auto bg-white p-8 rounded form-shadow">
        <h2 class="text-2xl font-semibold mb-6">登記資料</h2>
        <div
          class="mb-4 flex flex-col md:flex-row md:items-center"
          v-for="(value, key, index) in dataFields"
          :key="index"
        >
          <div
            class="md:w-1/4 flex flex-col align-items: flex-end;"
            id="leftform"
          >
            <label
              class="text-gray-700 text-sm font-bold mb-1 flex-shrink-0 md:text-right md:mb-0"
              :for="key"
            >
              <span class="mr-1">{{ value }}</span>
            </label>
            <span
              class="text-red-500 text-sm italic mt-1"
              v-show="validations[key].isShow && !validations[key].isCorrect"
              >&nbsp;</span
            >
          </div>
          <div class="md:w-3/4 flex flex-col" id="rightform">
            <template v-if="key === 'curriAgent'">
              <!-- 顯示課務組承辦人下拉選單 -->
              <select
                class="shadow border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <input
                class="shadow appearance-none border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                :id="key"
                type="text"
                :placeholder="'請輸入' + value"
                ref="inputs"
                @input="validateInput($event, key)"
              />
              <span
                class="text-red-500 text-sm italic mt-1 text-left"
                v-show="validations[key].isShow && !validations[key].isCorrect"
                >{{ validations[key].text }}</span
              >
            </template>
          </div>
        </div>

        <!-- 以下按鈕 -->
        <div class="flex items-center justify-around mt-4">
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
            show agents in console
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="btnClear"
          >
            清除
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* 追加的样式 */
#rightform {
  margin-left: 1rem; /* 调整右侧输入框及验证信息的位置 */
}
.mb-1 {
  margin-bottom: 0.25rem; /* 调整标签与输入框之间的间距 */
}
.mt-1 {
  margin-top: 0.25rem; /* 调整验证信息与输入框之间的间距 */
}
</style>

<script>
import Swal from "sweetalert2";

import { getAllAgents } from "./assets/js/getAgents";
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
      validations: {
        college: { text: "尚未輸入", isShow: false, isCorrect: false },
        collegeFullName: { text: "尚未輸入", isShow: false, isCorrect: false },
        dept: { text: "尚未輸入", isShow: false, isCorrect: false },
        deptFullName: { text: "尚未輸入", isShow: false, isCorrect: false },
        agent: { text: "尚未輸入", isShow: false, isCorrect: false },
        agentExt: { text: "尚未輸入", isShow: false, isCorrect: false },
        agentEmail: { text: "尚未輸入", isShow: false, isCorrect: false },
        curriAgent: { text: "尚未輸入", isShow: false, isCorrect: false },
        curriAgentExt: { text: "尚未輸入", isShow: false, isCorrect: false },
        curriAgentEmail: { text: "尚未輸入", isShow: false, isCorrect: false },
      },
      showValidation: {}, // Keep track of input touched status
      validationResults: {
        college: "尚未輸入",
        collegeFullName: "尚未輸入",
        dept: "尚未輸入",
        deptFullName: "尚未輸入",
        agent: "尚未輸入",
        agentExt: "尚未輸入",
        agentEmail: "尚未輸入",
        curriAgent: "尚未輸入",
        curriAgentExt: "尚未輸入",
        curriAgentEmail: "尚未輸入",
      },
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
    validateInput(event, key) {
      // 如果這個input有輸入值才顯示validation
      // this.showValidation[key] = event.target.value === "" ? false : true;
      this.validations[key].isShow = event.target.value === "" ? false : true;
      // var str = key;
      // console.log();
      const chineseRegex = /^[\u4E00-\u9FA5]+$/;

      // const chineseRegex = /\p{Unified_Ideograph}/u;

      console.log(chineseRegex.test(event.target.value));
      if (chineseRegex.test(event.target.value)) {
        switch (key) {
          case "college":
            this.validations[key].isCorrect = true;
            break;
          case "collegeFullName":
            this.validationResults.collegeFullName = "限輸入文字";
          case "dept":
            this.validationResults.dept = "限輸入文字";
          case "deptFullName":
            this.validationResults.deptFullName = "限輸入文字";
          case "agent":
            this.validationResults.agent = "限輸入文字";
          case "agentExt":
            this.validationResults.agentExt = "限輸入數字";
          case "agentEmail":
            this.validationResults.agentEmail = "需輸入email格式";
        }
      } else {
        switch (key) {
          case "college":
            this.validations[key].isCorrect = false;
            this.validations[key].text = "格式錯誤，限輸入中文";
            break;
          case "collegeFullName":
            this.validationResults.collegeFullName = "限輸入文字";
          case "dept":
            this.validationResults.dept = "限輸入文字";
          case "deptFullName":
            this.validationResults.deptFullName = "限輸入文字";
          case "agent":
            this.validationResults.agent = "限輸入文字";
          case "agentExt":
            this.validationResults.agentExt = "限輸入數字";
          case "agentEmail":
            this.validationResults.agentEmail = "需輸入email格式";
        }
      }
    },
    curriAgentOnChange() {
      document.getElementById("curriAgentExt").value =
        this.curriAgentOptions[this.selectedOption].ext;
      document.getElementById("curriAgentEmail").value =
        this.curriAgentOptions[this.selectedOption].email;
    },
    async show() {
      getAllAgents(db)
        .then((users) => {
          console.log("取得使用者資料成功：", users);
          const userNum = users.length;
          const msg = `目前資料庫中共有${userNum}位使用者。`;
          console.log(msg);
        })
        .catch((error) => {
          console.error("取得使用者資料失敗：", error);
        });
    },
    getInputs() {
      const inputdata = [];
      for (let i = 0; i < this.$refs.inputs.length; i++) {
        console.log(this.$refs.inputs[i].value);
        inputdata.push(this.$refs.inputs[i].value);
      }
      return inputdata;
    },
    btnClear() {
      for (let i = 0; i < this.$refs.inputs.length; i++) {
        this.$refs.inputs[i].value = "";
      }
      this.selectedOption = "";
      Object.keys(this.showValidation).forEach(
        (v) => (this.showValidation[v] = false)
      );
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
          getAllAgents(db)
            .then((users) => {
              console.log("取得使用者資料成功：", users);
              console.log("取得使用者資料成功：", users.length.toString());
              addAgent(db, obj, (users.length + 1).toString());
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
