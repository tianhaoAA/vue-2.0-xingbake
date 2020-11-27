<template>
  <!-- 门店页面 -->
  <div>
    <div class="menus">
      <input
        type="text"
        style="width: 100%"
        placeholder="请输入客户信息"
        class="inputInfo"
        v-model="searchcursom"
        v-on:focus="focusCustomer()"
        v-on:blur="blurCustomer()"
      />
      <div v-show="show && searchcursom.length > 1" class="scroll">
        <ul ref="search">
          <li
            v-for="(item, index) in list"
            :value="item"
            :key="index"
            @click="chooseCustomer(item)"
          >
            {{ item.address}}
          </li>
          <li v-show="!list.length">没有查到数据</li>
        </ul>
      </div>
    </div>
    <van-field
      v-model="getAndLocation"
      label="当前位置信息"
      placeholder="请输入位置"
    />
    <div
      ref="container"
      style="width: 100%; height: 250px; margin-top: 20px"
    ></div>
  </div>
</template>

<script>
import { Tmap } from "@/utils/TMap.js";
import axios from "axios";
import { geturl } from "@/api/mapUrl.js";
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      // 获取个人的地理信息
      userPositon: {
        province: null, //省
        city: null, //市
        district: null, //区
        location: {
          lat: null, //经度
          lng: null, //纬度
        },
      },
      getAndLocation: null, //绑定当前的信息
      markersArray: [], //用来存储标注的
      searchcursom: "", //查询的关键词
      list: [], //查询返回来的数组
      show: false,
    };
  },
  watch: {
    'searchcursom': {
      handler(newVlaue, oldvalue) {
        this.searchcursom = newVlaue
        if (newVlaue && newVlaue.length >= 2) {
           
          this.list =[]
          this.$axios({
            method: "get",
            url: "https://apis.map.qq.com/ws/place/v1/suggestion/?",
            params: {
              region: newVlaue,
              keyword: newVlaue,
              key: "JAQBZ-UX463-H5W3U-YZMOJ-XR6FV-TBBRO",
            },
          }).then((res) => {
            // console.log(res.data.data);
            if(!res.data.data){
                return
            }
            for (let i = 0; i < res.data.data.length; i++) {
              this.list.push({
                address: res.data.data[i].address,
                location: res.data.data[i].location
              })
            }
          })
        }
      },
    },
  },
  mounted() {
    // this.getAndTMap();
    this.scroll = new Bscroll(this.$refs.search, {
      click: true,
    });
    let that = this;
    document.addEventListener("click", function (e) {
      // console.log(e);
      if (e.target.className != "inputInfo") {
        that.$nextTick(() => {
          that.show = false;
        });
      }
    });
  },
  methods: {
    // 点击li 事件
    chooseCustomer(value) {
      this.searchcursom = value.address; //地址信息
       this.getAndLocation = value.address;
      // console.log('点击的值', value.location )
      this.userPositon.location.lat = value.location.lat
      this.userPositon.location.lng =value.location.lng
      this.getAndTMap()
    },
    // 触焦
    focusCustomer() {
      this.show = true;
    },
    // 失去焦点
    blurCustomer() {
      // console.log('失去焦点时输入框的值',this.searchcursom);
      this.show = false;
    },
    // 页面创建地图
    getAndTMap() {
      Tmap().then((qq) => {
        let lat = this.userPositon.location.lat;
        let lng = this.userPositon.location.lng;
        const center = new qq.maps.LatLng(lat, lng);
        const map = new qq.maps.Map(this.$refs.container, {
          center: center,
          zoom: 15,
        });
        this.clickMapEvent(qq, map, center); //点击地图事件
        this.getMapIcon(map, center); //给地图添加图标
      });
    },
    // 点击地图事件
    clickMapEvent(qq, map) {
      //  监听地图点击的事件
      qq.maps.event.addListener(map, "click", (event) => {
        // console.log("点击的事件", event);
        // 获取点击后的地图坐标
        let lat = event.latLng.getLat().toFixed(6);
        let lng = event.latLng.getLng().toFixed(6);
        this.userPositon.location.lat = lat;
        this.userPositon.location.lng = lng;
        let location = lat + "," + lng;
        // 根据经纬度查看当前的位置信息
        this.$axios({
          method: "get",
          url: "https://apis.map.qq.com/ws/geocoder/v1/?",
          params: {
            location: location,
            key: "JAQBZ-UX463-H5W3U-YZMOJ-XR6FV-TBBRO",
            get_poi: 0,
          },
        }).then((res) => {
          console.log("根据经纬度查看当前的信息", res);
          const center = new qq.maps.LatLng(lat, lng);
          this.getMapIcon(map, center); //给地图添加图标
          this.getAndLocation = res.data.result.address;
          this.searchcursom = res.data.result.address;
        });
      });
    },
    // 给地图添加图标
    getMapIcon(map, center) {
      //创建一个Marker
      var marker = new qq.maps.Marker({
        //设置Marker的位置坐标
        position: center,
        //设置显示Marker的地图
        map: map,
      });
      this.markersArray.push(marker);
      if (this.markersArray.length > 1) {
        for (let i = 0; i < this.markersArray.length - 1; i++) {
          this.markersArray[i].setMap(null); //清除标记
        }
      }
      //设置Marker的可见性，为true时可见,false时不可见，默认属性为true
      marker.setVisible(true);
      //设置Marker的动画属性为从落下
      marker.setAnimation(qq.maps.MarkerAnimation.DOWN);
      //设置Marker是否可以被拖拽，为true时可拖拽，false时不可拖拽，默认属性为false
      marker.setDraggable(true);
      ////设置Marker自定义图标的属性，size是图标尺寸，该尺寸为显示图标的实际尺寸，origin是切图坐标，该坐标是相对于图片左上角默认为（0,0）的相对像素坐标，anchor是锚点坐标，描述经纬度点对应图标中的位置
      var anchor = new qq.maps.Point(0, 39),
        size = new qq.maps.Size(50, 50),
        origin = new qq.maps.Point(0, 0),
        icon = new qq.maps.MarkerImage(
          "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png",
          // "../assets/map.nilt.png",
          size,
          origin,
          anchor
        );
      marker.setIcon(icon);
    },

    // 获取自身的地理位置
    getMyPosition() {
      // axios.defaults.baseURL = '/apiMap'
      const key = "JAQBZ-UX463-H5W3U-YZMOJ-XR6FV-TBBRO";
      this.$axios({
        method: "get",
        url: `https://apis.map.qq.com/ws/location/v1/ip?&key=${key}`,
        // url:`/ws/location/v1/ip?&key=${key}`
      }).then((res) => {
        // console.log('自身的位置信息',res);
        // console.log('省',res.data.result.ad_info.province);
        // console.log('市',res.data.result.ad_info.city);
        // console.log('区',res.data.result.ad_info.district);
        let result = res.data.result;
        this.userPositon.province = result.ad_info.province; //'省'
        this.userPositon.city = result.ad_info.city; //市
        this.userPositon.district = result.ad_info.district; //区
        this.userPositon.location.lat = result.location.lat; //经度
        this.userPositon.location.lng = result.location.lng; //纬度

        this.getAndLocation =
          this.userPositon.province +
          this.userPositon.city +
          this.userPositon.district;
             this.getAndTMap();
      });
    },
  },
  created() {
    this.getMyPosition();
  },
};
</script>

<style lang='less' scoped>
.menus {
  overflow: hidden;
}
.scroll {
  width: 90%;
  height: 150px;
  overflow-y: scroll;
}
.inputInfo {
  font-size: 18px;
}
ul {
  width: 90%;
  // height: 100px;
  border: 1px solid #cccccc;
}
li {
  -webkit-app-region: no-drag;
  font-size: 18px;
  list-style-type: none;
}
</style>