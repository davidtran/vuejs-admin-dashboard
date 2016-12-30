<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Card</div>
          <ul class="card-action">
            <li class="dropdown">
              <a href="/" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-cogs" aria-hidden="true"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">Action 1</a></li>
                <li><a href="#">Action 2</a></li>
                <li><a href="#">Action 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          Card Table
        </div>
        <div class="card-body no-padding">
          <div class="table-responsive">
            <table class="table card-table">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MicroSD 64Gb</td>
                  <td>2</td>
                  <td><span class="badge badge-success badge-icon"><i class="fa fa-check" aria-hidden="true"></i><span>Complete</span></span>
                  </td>
                </tr>
                <tr>
                  <td>MiniPC i5</td>
                  <td>5</td>
                  <td><span class="badge badge-warning badge-icon"><i class="fa fa-clock-o" aria-hidden="true"></i><span>Pending</span></span>
                  </td>
                </tr>
                <tr>
                  <td>Mountain Bike</td>
                  <td>1</td>
                  <td><span class="badge badge-info badge-icon"><i class="fa fa-credit-card" aria-hidden="true"></i><span>Confirm Payment</span></span>
                  </td>
                </tr>
                <tr>
                  <td>Notebook</td>
                  <td>1</td>
                  <td><span class="badge badge-danger badge-icon"><i class="fa fa-times" aria-hidden="true"></i><span>Cancelled</span></span>
                  </td>
                </tr>
                <tr>
                  <td>Raspberry Pi2</td>
                  <td>6</td>
                  <td><span class="badge badge-primary badge-icon"><i class="fa fa-truck" aria-hidden="true"></i><span>Shipped</span></span>
                  </td>
                </tr>
                <tr>
                  <td>Flashdrive 128Mb</td>
                  <td>4</td>
                  <td><span class="badge badge-info  badge-icon"><i class="fa fa-credit-card" aria-hidden="true"></i><span>Confirm Payment</span></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card card-mini">
        <div class="card-header">
          Card Mini
        </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card card-tab card-mini">
        <tab-set>
          <tab-item header="Card Tab 1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </tab-item>
          <tab-item header="Card Tab 2">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </tab-item>
        </tab-set>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'CardPage'
  }
</script>