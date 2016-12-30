<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="row">
        <div class="col-xs-12">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body app-heading">
                  <img class="profile-img" src="http://placehold.it/150x150">
                  <div class="app-title">
                    <div class="title"><span class="highlight">MicroSD 64Gb</span></div>
                    <div class="description">1023 Sold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <div class="card card-tab">
            <tab-set>
              <tab-item header="Activity">
                <div class="row">
                  <div class="col-md-3 col-sm-12">
                    <div class="section">
                      <div class="section-title"><i class="icon fa fa-user" aria-hidden="true"></i> Info</div>
                      <div class="section-body __indent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                    </div>
                    <div class="section">
                      <div class="section-title"><i class="icon fa fa-book" aria-hidden="true"></i> Warranty</div>
                      <div class="section-body __indent">3 Years</div>
                    </div>
                  </div>
                  <div class="col-md-9 col-sm-12">
                    <div class="section">
                      <div class="section-title">Sale Stats</div>
                      <div class="section-body">
                        <chartist class="ct-chart ct-perfect-fourth" :data="stackBarChart.data" :options="stackBarChart.config" type="Bar">
                        </chartist>
                      </div>
                    </div>
                  </div>
                </div>
              </tab-item>
              <tab-item header="Edit">
                <form class="form form-horizontal">
                  <div class="section">
                    <div class="section-title">Information</div>
                    <div class="section-body">
                      <div class="form-group">
                        <label class="col-md-3 control-label">Name</label>
                        <div class="col-md-9">
                          <input type="text" class="form-control" placeholder="">
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-md-3">
                          <label class="control-label">Description</label>
                          <p class="control-label-help">( short detail of products , 150 max words )</p>
                        </div>
                        <div class="col-md-9">
                          <textarea class="form-control"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-3 control-label">Price</label>
                        <div class="col-md-9">
                          <div class="input-group">
                            <span class="input-group-addon">$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section">
                    <div class="section-title">Warranty</div>
                    <div class="section-body">
                      <div class="form-group">
                        <label class="col-md-3 control-label">Type</label>
                        <div class="col-md-9">
                          <div class="radio radio-inline">
                            <input type="radio" name="radio4" id="radio10" value="option10">
                            <label for="radio10">
                          Global
                        </label>
                          </div>
                          <div class="radio radio-inline">
                            <input type="radio" name="radio4" id="radio11" value="option11" checked="">
                            <label for="radio11">
                          Local
                        </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-3 control-label">Cover</label>
                        <div class="col-md-4">
                          <div class="input-group">
                            <select2 value="1">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select2>
                            <span class="input-group-addon">Years</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-footer">
                    <div class="form-group">
                      <div class="col-md-9 col-md-offset-3">
                        <button type="submit" class="btn btn-primary">Save</button>
                        <button type="button" class="btn btn-default">Cancel</button>
                      </div>
                    </div>
                  </div>
                </form>
              </tab-item>
              <tab-item header="Stats">
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nullaip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nullaip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla
              </tab-item>
            </tab-set>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'ExampleFormPage',
    data: function () {
      return {
        stackBarChart: {
          data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
              [800000, 1200000, 1400000, 1300000],
              [200000, 400000, 500000, 300000],
              [100000, 200000, 400000, 600000]
            ]
          },
          config: {
            stackBars: true,
            axisY: {
              labelInterpolationFnc: function (value) {
                return (value / 1000) + 'k';
              }
            }
          }
        }
      }
    }
  }
</script>