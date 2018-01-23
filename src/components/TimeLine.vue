<template>
<div>
  <div class="page">
    <mu-timeline lineColor="black" lineType="dashed">
      <mu-timeline-item iconColor="red" iconType="dotted">
        <span>hello world!</span>
      </mu-timeline-item>
      <mu-timeline-item lineType="solid">
        <span>vue.js</span>
      </mu-timeline-item>
      <mu-timeline-item>
        <span>java</span>
      </mu-timeline-item>
      <mu-timeline-item lineColor="#3476db">
        <mu-icon value="flight_takeoff" color="red" slot="icon" />
        <span>spring</span>
      </mu-timeline-item>
      <mu-timeline-item iconColor="blue">
        <span>mybatis</span>
      </mu-timeline-item>
      <mu-timeline-item iconLine="5">
        <span>xxxx</span>
      </mu-timeline-item>
    </mu-timeline>
  </div>
</div>
</template>
