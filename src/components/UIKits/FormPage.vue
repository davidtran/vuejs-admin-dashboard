<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          Basic Elements
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Input">
              <textarea name="name" rows="3" class="form-control"></textarea>
              <input type="text" class="form-control" placeholder="Disabled" disabled="">
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">
                  <i class="fa fa-user" aria-hidden="true"></i></span>
                <input type="text" class="form-control" placeholder="Input group" aria-describedby="basic-addon1" value="">
              </div>
              <div>
                <div class="checkbox">
                  <input type="checkbox" id="checkbox1">
                  <label for="checkbox1">
                      Checkbox
                  </label>
                </div>
                <div class="checkbox">
                  <input type="checkbox" id="checkbox2">
                  <label for="checkbox2">
                      Checkbox Square
                  </label>
                </div>
              </div>
              <div>
                <div class="checkbox checkbox-inline">
                  <input type="checkbox" id="checkbox3">
                  <label for="checkbox3">
                      Checkbox Inline
                  </label>
                </div>
                <div class="checkbox checkbox-inline">
                  <input type="checkbox" id="checkbox4">
                  <label for="checkbox4">
                      Checkbox Inline
                  </label>
                </div>
              </div>
              <div>
                <div class="radio">
                  <input type="radio" name="radio2" id="radio3" value="option1">
                  <label for="radio3">
                      One
                  </label>
                </div>
                <div class="radio">
                  <input type="radio" name="radio2" id="radio4" value="option2" checked="">
                  <label for="radio4">
                      Two
                  </label>
                </div>
              </div>
              <div>
                <div class="radio radio-inline">
                  <input type="radio" name="radio2" id="radio5" value="option1">
                  <label for="radio5">
                      One
                  </label>
                </div>
                <div class="radio radio-inline">
                  <input type="radio" name="radio2" id="radio6" value="option2" checked="">
                  <label for="radio6">
                      Two
                  </label>
                </div>
              </div>
              <select2 value="AL">
                <option value="AL">Alabama</option>
                <option value="WY">Wyoming</option>
              </select2>
            </div>
            <div class="col-md-6">
              <div class="form-group has-success">
                <input type="text" class="form-control" id="inputSuccess1" placeholder="Success">
              </div>
              <div class="form-group has-warning">
                <input type="text" class="form-control" id="inputWarning1" placeholder="Warning">
              </div>
              <div class="form-group has-error">
                <input type="text" class="form-control" id="inputError1" placeholder="Danger">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          Form Horizontal
        </div>
        <div class="card-body">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormPage'
  }
</script>