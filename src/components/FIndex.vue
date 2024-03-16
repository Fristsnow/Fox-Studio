<script setup lang="ts">
import {RouterLink} from "vue-router";
import {type Ref, ref} from "vue"
import {ChatboxOutline, HeartOutline} from '@vicons/ionicons5'

const name: string = "FirstSnow"
let listTitle: Ref<Array<any>> = ref([])
let listRightData: Ref<Array<any>> = ref([])
const F = async () => {
  const a = await fetch('/data/title.json')
  listTitle.value = await a.json()
}
const RightData = async () => {
  const a = await fetch('/data/list.json')
  listRightData.value = await a.json()
}
const create = () => {
  F()
  RightData()
}
create()
</script>

<template>
  <div class="F-index">
    <!--  左边  -->
    <div class="F-left">
      <!--   个人信息    -->
      <div class="F-left-main">
        <p>
          <n-avatar
              class="img"
              round
              :size="120"
              :src="listTitle.user"
          />
        </p>
        <h2>{{ name }}</h2>
        <div class="box">
          <RouterLink to="#" class="box-1">
            <span>数量:1000</span>
            <div>
              <n-icon size="20">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 448 512">
                  <path
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                      fill="currentColor"></path>
                </svg>
              </n-icon>
              <span>粉丝</span>
            </div>
          </RouterLink>
          <span class="span">|</span>
          <RouterLink to="#" class="box-2">
            <span>数量:1000</span>
            <div>
              <n-icon size="20">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                    <path d="M3 6v13"></path>
                    <path d="M12 6v13"></path>
                    <path d="M21 6v13"></path>
                  </g>
                </svg>
              </n-icon>
              <span>动态</span>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="F-left-bottom">
        <div v-for="(item,index) in listTitle.data" :key="index">
<!--          <n-icon class="nicon" size="40" v-html="item.icon"/>-->
          <n-image
              width="40"
              class="nicon"
              :src="item.icon"
          />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
    <!--  右边  -->
    <div class="F-right">
      <n-scrollbar style="max-height: 900px">
        <div class="F-right-main">
          <n-card
              v-for="(item,index) in listRightData.data"
              :key="index"
              class="cart"
              :title="item.client">
            <div class="F-right-main-box">
              <div>
                <p style="color: #4FC3C2">{{ item.title }}</p>
                <p style="color: #cccccc">{{ item.content }}</p>
                <div class="F-right-main-box-tab">
                  <n-icon :component="HeartOutline" size="40" :depth="5"/>
                  <span>{{ item.hot }}</span>
                  <n-icon :component="ChatboxOutline" style="margin-left: 20px" size="40" :depth="5"/>
                  <span>{{ item.p }}</span>
                </div>
              </div>
              <n-image
                  width="250"
                  :src="item.imgSrc"
              />
            </div>
          </n-card>
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.F-index {
  width: 100vw;
  height: calc(100vh - 96px);
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background-image: url("@/assets/bg.png");
  background-position: center;
  background-size: 100% 100%;

  .F-left {
    width: 400px;

    .F-left-main {
      height: 250px;
      border: 1px solid #ffffff;

      h2, p {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p {
        padding-top: 10px;
      }

      h2 {
        margin: 10px 0;
        font-size: 30px;
      }

      .box {
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #ffffff;
        position: relative;

        .span {
          font-size: 48px;
          position: absolute;
          top: -18px;
        }

        .box-1, .box-2 {
          height: 50px;
          display: flex;
          flex-direction: column;
          color: #f2f2f2;

          div {
            display: flex;
          }
        }
      }
    }

    .F-left-bottom {
      width: 400px;

      div {
        color: #ccc;
        margin-top: 40px;
        height: 50px;
        border: 1px solid #ffffff;
        display: flex;
        font-size: 26px;
        &:nth-child(1){
          background: #145676;
        }
        .nicon {
          margin: 0 20px;
          border: none;
        }
      }
    }
  }

  .F-right {
    width: 800px;
    height: 700px;
    margin-left: 50px;

    .F-right-main {

      .cart {
        border: 1px solid #ffffff;
        margin-bottom: 20px;

        .F-right-main-box {
          display: flex;
          position: relative;

          .F-right-main-box-tab {
            display: flex;
            margin: 8px;
            position: absolute;
            bottom: 1px;
          }

          span {
            margin: 0 10px;
          }

          p, span {
            font-size: 15px;
            margin-right: 3px;
          }
        }
      }
    }
  }
}
</style>
