<template>
  <form class="text-center border border-light p-5" action="#!">
      <div>
        <h3 class="title">TimeSheet</h3>
        <div class="input-group input-group-prepend" style="width:300px; margin-left:1200px">
            <div style="width:85px">
            <select class="custom-select" id="inputGroupSelect01">
                <option class="option" selected>Day</option>
                <option class="option" value="1">Week</option>
                <option class="option" value="2">Month</option>
            </select>
            </div>
            <input type="date" class="form-control mb-3" aria-label="Text input with dropdown button">
        </div>
        <div>
            <h4 class="name" >Wellcome {{ name }}</h4>
            <h4 class="leader" >Leader: {{ leader }}</h4>
        </div>
        <hr>
        </div>
        <!-- Table  -->
        
<!-- Table  -->
<table class="table border border-light" style="width:80%; margin-left:8%; margin-top: 5%">
  <!-- Table head -->
  <thead>
    <tr>
      <th style="width:30px">
        <!-- Default unchecked -->
        <div class="custom-control custom-checkbox" >
          <input type="checkbox" class="custom-control-input" id="Check1">
          <label class="custom-control-label" for="Check1"></label>
        </div>
      </th>
      <th style="width:300px">Working Day</th>
      <th>Task</th>
      <th style="width:100px">Status</th>
    </tr>
  </thead>
  <!-- Table head -->

  <!-- Table body -->
  <tbody>
    <tr v-for="time in TimeSheet" :key="time.index" >
      <th scope="row">
        <!-- Default unchecked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id='time.id'>
          <label class="custom-control-label" :for="time.id"></label>
        </div>
        </th>
        <td>{{ time.day }}</td>
        <td>
            <li  v-for="task in time.task" :key="task.index" >{{ task }}</li>
        </td>
        <td>{{ time.status }}</td>
        </tr>   
    </tbody>
    <!-- Table body -->
    </table>
    <!-- Table  -->
    <div style="float:right">
        <v-pagination v-model="currentPage" :page-count="3"></v-pagination>
    </div>
  </form>

</template>

<script>
import Vue from "vue"
import vPagination from 'vue-plain-pagination'

export default {
    name: "Timesheet",
    components: {
    vPagination
  },
    data() {
        return {
                name: 'Nguyen Hong Nhung',
                leader: 'Duong Ngoc Son',
                TimeSheet: [
                    {
                        id: '1',
                        day: '01/09/2020',
                        currentPage: 1,
                        task: [
                            'ASY-10  Display timesheet list',
                            'ASY-10  Display timesheet list'
                            ],
                        status: 'close'
                    },
                    {
                        id: '2',
                        day: '01/09/2020',
                        task: [
                            'ASY-10  Display timesheet list',
                            'ASY-10  Display timesheet list'
                            ],
                        status: 'close'
                    },
                    {
                        id: '3',
                        day: '01/09/2020',
                        task: [
                            'ASY-10  Display timesheet list',
                            'ASY-10  Display timesheet list'
                            ],
                        status: 'close'
                    },
                    {
                        id: '4',
                        day: '01/09/2020',
                        task: [
                            'ASY-10  Display timesheet list',
                            'ASY-10  Display timesheet list'
                            ],
                        status: 'close'
                    },
                    {
                        id: '5',
                        day: '01/09/2020',
                        task: [
                            'ASY-10  Display timesheet list',
                            'ASY-10  Display timesheet list'
                            ],
                        status: 'close'
                    }
                ]
        }
    },
    methods: {
        changePage(pageNum) {
            if (pageNum === undefined) {
                this.pageNumber = 0;
            }
            this.pageNumber = pageNum - 1;
            }
        }
}
</script>

<style scoped>
.title {
    float:left;
    color: #ffff;
}
.option {
    color: black;
}
.custom-select {
    width: 85px;
}
.name {
    margin-left: -66%;
}
.leader {
    margin-left: 47%;
    margin-top:-2.5%;
}
hr {
    border: 1px solid gray;
    width: 60%;
    margin-bottom: 2%;
}
</style>